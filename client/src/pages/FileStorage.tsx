import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

function readAsBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(reader.error ?? new Error("Unable to read file"));
    reader.readAsDataURL(file);
  });
}

export default function FileStorage() {
  const { user, loading, isAuthenticated } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const assets = trpc.fileStorage.list.useQuery(undefined, { enabled: user?.role === "admin" });
  const upload = trpc.fileStorage.upload.useMutation({
    onSuccess: () => {
      toast.success("File berhasil disimpan di File Storage");
      assets.refetch();
    },
    onError: error => toast.error(error.message),
  });

  async function handleFile(file?: File) {
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      toast.error("Ukuran file maksimal 8 MB");
      return;
    }
    setUploading(true);
    try {
      const base64 = await readAsBase64(file);
      await upload.mutateAsync({ originalName: file.name, mimeType: file.type || "application/octet-stream", sizeBytes: file.size, base64 });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload gagal");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  if (loading) return <div className="min-h-screen grid place-items-center bg-[#F8F4EA]"><Loader2 className="animate-spin text-[#0E5A4A]" /></div>;
  if (!isAuthenticated) return <div className="min-h-screen grid place-items-center bg-[#F8F4EA] p-6"><Button onClick={() => startLogin()}>Masuk untuk mengelola file</Button></div>;
  if (user?.role !== "admin") return <div className="min-h-screen grid place-items-center bg-[#F8F4EA] p-6 text-center"><div><h1 className="display-serif text-4xl text-[#173D31]">Akses terbatas</h1><p className="mt-3 text-[#527065]">Halaman File Storage hanya tersedia untuk admin JuraganKambing.id.</p></div></div>;

  return <main className="min-h-screen bg-[#F8F4EA] px-5 py-10 text-[#173D31] sm:px-10">
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col justify-between gap-5 border-b border-[#D7CDBB] pb-7 sm:flex-row sm:items-end">
        <div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-5xl">File Storage</h1><p className="mt-3 max-w-xl text-[#527065]">Simpan gambar dan media besar secara terkelola. File bytes berada di storage, sementara metadata disimpan di database.</p></div>
        <Button disabled={uploading} onClick={() => inputRef.current?.click()} className="rounded-full bg-[#0E5A4A] px-5 text-white hover:bg-[#124D40]"><UploadCloud className="mr-2 h-4 w-4" />{uploading ? "Mengunggah…" : "Unggah file"}</Button>
        <input ref={inputRef} hidden type="file" accept="image/*,application/pdf" onChange={event => handleFile(event.target.files?.[0])} />
      </div>
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assets.isLoading && <div className="text-[#527065]">Memuat daftar file…</div>}
        {assets.data?.map(file => <article key={file.id} className="overflow-hidden rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] shadow-sm">
          {file.mimeType.startsWith("image/") ? <img src={file.url} alt={file.originalName} className="h-44 w-full object-cover" /> : <div className="grid h-44 place-items-center bg-[#F0E9DB] text-sm font-bold text-[#527065]">{file.mimeType}</div>}
          <div className="p-4"><h2 className="truncate font-bold">{file.originalName}</h2><p className="mt-1 text-xs text-[#698074]">{Math.ceil(file.sizeBytes / 1024)} KB · {new Date(file.createdAt).toLocaleDateString("id-ID")}</p><a href={file.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-extrabold uppercase tracking-[.12em] text-[#0E5A4A]">Buka file ↗</a></div>
        </article>)}
      </section>
      {!assets.isLoading && assets.data?.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-[#CDBEAA] bg-[#FFFCF5] p-10 text-center text-[#527065]">Belum ada file yang diunggah melalui halaman ini.</div>}
    </div>
  </main>;
}
