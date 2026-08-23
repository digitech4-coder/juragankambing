import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Loader2, MessageCircle, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { BUSINESS_WHATSAPP_NUMBER, buildContactWhatsAppMessage } from "@shared/contact";

function MagicLinkRequest() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const request = trpc.auth.requestMagicLink.useMutation({ onSuccess: () => setSent(true) });
  return <div className="mt-6 w-full max-w-md rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-5 text-left shadow-sm"><label htmlFor="admin-email" className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Email admin</label><Input id="admin-email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="digitechsmart4@gmail.com" className="mt-2 bg-white" disabled={request.isPending || sent} /><Button type="button" disabled={!email || request.isPending || sent} onClick={() => request.mutate({ email, origin: window.location.origin })} className="mt-3 w-full rounded-full bg-[#0E5A4A] text-white hover:bg-[#124D40]">{request.isPending ? "Mengirim tautan…" : sent ? "Tautan sudah dikirim" : "Kirim magic link"}</Button>{sent && <p className="mt-3 text-xs leading-5 text-[#527065]">Periksa inbox email admin. Tautan berlaku singkat dan hanya dapat digunakan sekali.</p>}{request.isError && <p role="alert" className="mt-3 text-xs leading-5 text-[#A5402F]">Tautan belum dapat dikirim. Silakan coba lagi.</p>}</div>;
}

type RequestItem = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  domisili: string;
  guests: string;
  message: string;
  emailStatus: "pending" | "sent" | "failed";
  emailSentAt: Date | null;
  createdAt: Date;
};

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function WhatsAppLink({ request }: { request: RequestItem }) {
  const href = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildContactWhatsAppMessage(request))}`;
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#0E5A4A] px-4 py-2 text-xs font-extrabold text-white transition hover:bg-[#124D40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66B] active:scale-[.98]"><MessageCircle aria-hidden="true" className="h-4 w-4" /> Kirim ke WhatsApp</a>;
}

function StatusBadge({ status }: { status: RequestItem["emailStatus"] }) {
  const styles = {
    sent: "bg-[#E3F3E8] text-[#1B704B]",
    pending: "bg-[#FFF2C9] text-[#8A6217]",
    failed: "bg-[#FBE5E1] text-[#A5402F]",
  };
  const labels = { sent: "Email terkirim", pending: "Menunggu email", failed: "Email gagal" };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] ${styles[status]}`}>{labels[status]}</span>;
}

function RequestCard({ request }: { request: RequestItem }) {
  return <article className="rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-5 shadow-sm">
    <div className="flex flex-col gap-3 border-b border-[#E8DFD1] pb-4 sm:flex-row sm:items-start sm:justify-between">
      <div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#7A5A20]">Permintaan #{request.id}</p><h2 className="display-serif mt-1 text-3xl text-[#173D31]">{request.name}</h2><p className="mt-1 text-xs text-[#698074]">{formatDate(request.createdAt)}</p></div>
      <StatusBadge status={request.emailStatus} />
    </div>
    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
      <div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Layanan</dt><dd className="mt-1 font-semibold text-[#173D31]">{request.service}</dd></div>
      <div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Domisili</dt><dd className="mt-1 font-semibold text-[#173D31]">{request.domisili}</dd></div>
      <div className="min-w-0"><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Email</dt><dd className="mt-1 break-words font-semibold text-[#173D31]"><a href={`mailto:${request.email}`} className="underline underline-offset-2">{request.email}</a></dd></div>
      <div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">WhatsApp</dt><dd className="mt-1 font-semibold text-[#173D31]"><a href={`tel:${request.whatsapp}`} className="underline underline-offset-2">{request.whatsapp}</a></dd></div>
      <div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Porsi/tamu</dt><dd className="mt-1 font-semibold text-[#173D31]">{request.guests || "Belum diisi"}</dd></div>
      <div className="sm:col-span-2"><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Pesan</dt><dd className="mt-1 whitespace-pre-wrap break-words leading-6 text-[#4B665C]">{request.message || "Belum diisi"}</dd></div>
    </dl>
    <div className="mt-5 flex flex-col gap-3 border-t border-[#E8DFD1] pt-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-[#698074]">{request.emailSentAt ? `Terkirim ${formatDate(request.emailSentAt)}` : "Belum ada waktu pengiriman email"}</p>{request.emailStatus === "sent" && <WhatsAppLink request={request} />}</div>
  </article>;
}

export default function AdminRequests() {
  const { user, loading, isAuthenticated } = useAuth();
  const history = trpc.contact.history.useQuery(undefined, { enabled: user?.role === "admin" });

  async function refresh() {
    try {
      await history.refetch();
      toast.success("Riwayat permintaan diperbarui.");
    } catch {
      toast.error("Riwayat permintaan belum dapat diperbarui.");
    }
  }

  if (loading) return <div className="grid min-h-screen place-items-center bg-[#F8F4EA]"><Loader2 aria-label="Memuat akses admin" className="h-6 w-6 animate-spin text-[#0E5A4A]" /></div>;
  if (!isAuthenticated) return <div className="grid min-h-screen place-items-center bg-[#F8F4EA] p-6 text-center text-[#173D31]"><div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-4xl">Masuk untuk melihat permintaan.</h1><p className="mx-auto mt-3 max-w-md text-[#527065]">Gunakan magic link yang dikirim ke email admin. Password lokal tidak disimpan.</p><MagicLinkRequest /><div className="mt-4"><Button type="button" variant="ghost" onClick={() => startLogin()} className="text-xs text-[#527065] underline underline-offset-4 hover:bg-transparent">Gunakan login Manus OAuth</Button></div></div></div>;
  if (user?.role !== "admin") return <div className="grid min-h-screen place-items-center bg-[#F8F4EA] p-6 text-center text-[#173D31]"><div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-4xl">Akses terbatas.</h1><p className="mt-3 max-w-md text-[#527065]">Riwayat permintaan hanya tersedia untuk admin JuraganKambing.id.</p></div></div>;

  return <DashboardLayout><div className="min-h-[calc(100vh-2rem)] bg-[#F8F4EA] px-1 py-4 text-[#173D31] sm:px-4 sm:py-6"><div className="mx-auto max-w-6xl"><header className="flex flex-col gap-5 border-b border-[#D7CDBB] pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-5xl leading-none">Riwayat permintaan.</h1><p className="mt-4 max-w-xl text-sm leading-6 text-[#527065]">Lihat permintaan konsultasi terbaru, status email, dan siapkan tindak lanjut melalui WhatsApp.</p></div><Button type="button" onClick={refresh} disabled={history.isFetching} className="rounded-full bg-[#0E5A4A] px-5 text-white hover:bg-[#124D40]"><RefreshCw className={`mr-2 h-4 w-4 ${history.isFetching ? "animate-spin" : ""}`} />{history.isFetching ? "Memuat…" : "Segarkan"}</Button></header><div className="mt-7 flex flex-wrap items-center justify-between gap-3"><p className="text-sm font-semibold text-[#4B665C]">{history.data?.length ?? 0} permintaan terbaru</p><p className="text-xs text-[#698074]">Maksimal 200 data terakhir</p></div>{history.isLoading && <div className="mt-5 rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-8 text-center text-sm text-[#527065]">Memuat riwayat permintaan…</div>}{history.isError && <div className="mt-5 rounded-2xl border border-[#E6B8AE] bg-[#FFF3F0] p-8 text-center text-sm text-[#A5402F]">Riwayat belum dapat dimuat. Silakan segarkan kembali.</div>}{!history.isLoading && !history.isError && history.data?.length === 0 && <div className="mt-5 rounded-2xl border border-dashed border-[#CDBEAA] bg-[#FFFCF5] p-10 text-center text-sm text-[#527065]">Belum ada permintaan konsultasi yang tersimpan.</div>}{!history.isLoading && !history.isError && history.data && history.data.length > 0 && <div className="mt-5 grid gap-4">{history.data.map(request => <RequestCard key={request.id} request={request as RequestItem} />)}</div>}</div></div></DashboardLayout>;
}
