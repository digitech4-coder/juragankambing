import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function AdminMagicLogin() {
  const [message, setMessage] = useState("Memverifikasi tautan masuk…");
  const verify = trpc.auth.verifyMagicLink.useMutation();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      setMessage("Tautan masuk tidak lengkap.");
      return;
    }
    verify.mutate({ token }, {
      onSuccess: () => {
        window.location.replace("/admin/requests");
      },
      onError: () => {
        setMessage("Tautan sudah kedaluwarsa atau sudah digunakan. Minta tautan baru.");
      },
    });
  }, []);

  return <main className="grid min-h-screen place-items-center bg-[#F8F4EA] p-6 text-center text-[#173D31]"><div><Loader2 aria-label="Memverifikasi tautan" className={`mx-auto mb-5 h-7 w-7 text-[#0E5A4A] ${verify.isPending ? "animate-spin" : "hidden"}`} /><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-4xl">{message}</h1>{!verify.isPending && <a href="/admin/requests" className="mt-6 inline-flex rounded-full bg-[#0E5A4A] px-5 py-3 text-sm font-bold text-white">Kembali ke login admin</a>}</div></main>;
}
