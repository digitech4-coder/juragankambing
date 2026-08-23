import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { useMemo, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Loader2, MessageCircle, RefreshCw, Download, Filter, X } from "lucide-react";
import { toast } from "sonner";
import { BUSINESS_WHATSAPP_NUMBER, buildContactWhatsAppMessage } from "@shared/contact";

const DOMISILI_OPTIONS = ["Ciputat", "Pamulang", "Pondok Aren", "Bintaro", "Serpong", "BSD", "Depok", "Bojongsari", "Gunung Sindur", "DKI Jakarta", "Lainnya"] as const;
const FOLLOW_UP_OPTIONS = ["baru", "dihubungi", "deal", "selesai"] as const;
type FollowUpStatus = (typeof FOLLOW_UP_OPTIONS)[number];

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
  followUpStatus: FollowUpStatus;
  emailSentAt: Date | null;
  createdAt: Date;
};

function MagicLinkRequest() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const request = trpc.auth.requestMagicLink.useMutation({ onSuccess: () => setSent(true) });
  return <div className="mt-6 w-full max-w-md rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-5 text-left shadow-sm"><label htmlFor="admin-email" className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Email admin</label><Input id="admin-email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="digitechsmart4@gmail.com" className="mt-2 bg-white" disabled={request.isPending || sent} /><Button type="button" disabled={!email || request.isPending || sent} onClick={() => request.mutate({ email, origin: window.location.origin })} className="mt-3 w-full rounded-full bg-[#0E5A4A] text-white hover:bg-[#124D40]">{request.isPending ? "Mengirim tautan…" : sent ? "Tautan sudah dikirim" : "Kirim magic link"}</Button>{sent && <p className="mt-3 text-xs leading-5 text-[#527065]">Periksa inbox email admin. Tautan berlaku singkat dan hanya dapat digunakan sekali.</p>}{request.isError && <p role="alert" className="mt-3 text-xs leading-5 text-[#A5402F]">Tautan belum dapat dikirim. Silakan coba lagi.</p>}</div>;
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function WhatsAppLink({ request }: { request: RequestItem }) {
  const href = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildContactWhatsAppMessage(request))}`;
  return <a href={href} target="_blank" rel="noreferrer" aria-label={`Kirim permintaan ${request.name} ke WhatsApp`} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#0E5A4A] px-4 py-2 text-xs font-extrabold text-white transition hover:bg-[#124D40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66B] active:scale-[.98]"><MessageCircle aria-hidden="true" className="h-4 w-4" /> Kirim ke WhatsApp</a>;
}

function EmailStatusBadge({ status }: { status: RequestItem["emailStatus"] }) {
  const styles = { sent: "bg-[#E3F3E8] text-[#1B704B]", pending: "bg-[#FFF2C9] text-[#8A6217]", failed: "bg-[#FBE5E1] text-[#A5402F]" };
  const labels = { sent: "Email terkirim", pending: "Menunggu email", failed: "Email gagal" };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] ${styles[status]}`}>{labels[status]}</span>;
}

function FollowUpBadge({ status }: { status: FollowUpStatus }) {
  const styles: Record<FollowUpStatus, string> = { baru: "bg-[#EAF0ED] text-[#315D50]", dihubungi: "bg-[#FFF2C9] text-[#8A6217]", deal: "bg-[#DDEFE5] text-[#176644]", selesai: "bg-[#E7E5E0] text-[#5F625C]" };
  const labels: Record<FollowUpStatus, string> = { baru: "Baru", dihubungi: "Dihubungi", deal: "Deal", selesai: "Selesai" };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] ${styles[status]}`}>{labels[status]}</span>;
}

function RequestCard({ request, onStatusChange, updating }: { request: RequestItem; onStatusChange: (id: number, status: FollowUpStatus) => void; updating: boolean }) {
  return <article className="rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-5 shadow-sm"><div className="flex flex-col gap-3 border-b border-[#E8DFD1] pb-4 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#7A5A20]">Permintaan #{request.id}</p><h2 className="display-serif mt-1 text-3xl text-[#173D31]">{request.name}</h2><p className="mt-1 text-xs text-[#698074]">{formatDate(request.createdAt)}</p></div><div className="flex flex-wrap gap-2"><EmailStatusBadge status={request.emailStatus} /><FollowUpBadge status={request.followUpStatus} /></div></div><dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Layanan</dt><dd className="mt-1 font-semibold text-[#173D31]">{request.service}</dd></div><div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Domisili</dt><dd className="mt-1 font-semibold text-[#173D31]">{request.domisili}</dd></div><div className="min-w-0"><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Email</dt><dd className="mt-1 break-words font-semibold text-[#173D31]"><a href={`mailto:${request.email}`} className="underline underline-offset-2">{request.email}</a></dd></div><div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">WhatsApp</dt><dd className="mt-1 font-semibold text-[#173D31]"><a href={`tel:${request.whatsapp}`} className="underline underline-offset-2">{request.whatsapp}</a></dd></div><div><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Porsi/tamu</dt><dd className="mt-1 font-semibold text-[#173D31]">{request.guests || "Belum diisi"}</dd></div><div className="sm:col-span-2"><dt className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Pesan</dt><dd className="mt-1 whitespace-pre-wrap break-words leading-6 text-[#4B665C]">{request.message || "Belum diisi"}</dd></div></dl><div className="mt-5 flex flex-col gap-3 border-t border-[#E8DFD1] pt-4 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-col gap-2 sm:flex-row sm:items-center"><label htmlFor={`follow-up-${request.id}`} className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Status follow-up</label><select id={`follow-up-${request.id}`} value={request.followUpStatus} disabled={updating} onChange={event => onStatusChange(request.id, event.target.value as FollowUpStatus)} className="min-h-10 rounded-full border border-[#D7CDBB] bg-white px-3 text-sm font-semibold text-[#173D31] outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66B]">{FOLLOW_UP_OPTIONS.map(status => <option key={status} value={status}>{status[0].toUpperCase() + status.slice(1)}</option>)}</select></div><div className="flex flex-col gap-3 sm:flex-row sm:items-center"><p className="text-xs text-[#698074]">{request.emailSentAt ? `Terkirim ${formatDate(request.emailSentAt)}` : "Belum ada waktu pengiriman email"}</p>{request.emailStatus === "sent" && <WhatsAppLink request={request} />}</div></div></article>;
}

export default function AdminRequests() {
  const { user, loading, isAuthenticated } = useAuth();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [domisili, setDomisili] = useState("");
  const [followUpStatus, setFollowUpStatus] = useState<FollowUpStatus | "">("");
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const filters = useMemo(() => {
    const value = { from: from || undefined, to: to || undefined, domisili: domisili || undefined, followUpStatus: followUpStatus || undefined };
    return Object.values(value).some(Boolean) ? value : undefined;
  }, [from, to, domisili, followUpStatus]);
  const history = trpc.contact.history.useQuery(filters, { enabled: user?.role === "admin" });
  const csvExport = trpc.contact.exportCsv.useQuery(filters, { enabled: false });
  const updateStatus = trpc.contact.updateFollowUpStatus.useMutation({ onSuccess: async () => { toast.success("Status follow-up diperbarui."); await history.refetch(); }, onError: () => toast.error("Status belum dapat diperbarui.") });

  async function refresh() { try { await history.refetch(); toast.success("Riwayat permintaan diperbarui."); } catch { toast.error("Riwayat permintaan belum dapat diperbarui."); } }
  function resetFilters() { setFrom(""); setTo(""); setDomisili(""); setFollowUpStatus(""); }
  async function downloadCsv() { try { const result = await csvExport.refetch(); if (!result.data) throw new Error("CSV kosong"); const blob = new Blob([result.data.csv], { type: "text/csv;charset=utf-8" }); const url = URL.createObjectURL(blob); const anchor = document.createElement("a"); anchor.href = url; anchor.download = result.data.filename; anchor.click(); URL.revokeObjectURL(url); toast.success("CSV berhasil diunduh."); } catch { toast.error("CSV belum dapat dibuat."); } }
  function changeStatus(id: number, status: FollowUpStatus) { setUpdatingId(id); updateStatus.mutate({ id, followUpStatus: status }, { onSettled: () => setUpdatingId(null) }); }

  if (loading) return <div className="grid min-h-screen place-items-center bg-[#F8F4EA]"><Loader2 aria-label="Memuat akses admin" className="h-6 w-6 animate-spin text-[#0E5A4A]" /></div>;
  if (!isAuthenticated) return <div className="grid min-h-screen place-items-center bg-[#F8F4EA] p-6 text-center text-[#173D31]"><div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-4xl">Masuk untuk melihat permintaan.</h1><p className="mx-auto mt-3 max-w-md text-[#527065]">Gunakan magic link yang dikirim ke email admin. Password lokal tidak disimpan.</p><MagicLinkRequest /><div className="mt-4"><Button type="button" variant="ghost" onClick={() => startLogin()} className="text-xs text-[#527065] underline underline-offset-4 hover:bg-transparent">Gunakan login Manus OAuth</Button></div></div></div>;
  if (user?.role !== "admin") return <div className="grid min-h-screen place-items-center bg-[#F8F4EA] p-6 text-center text-[#173D31]"><div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-4xl">Akses terbatas.</h1><p className="mt-3 max-w-md text-[#527065]">Riwayat permintaan hanya tersedia untuk admin JuraganKambing.id.</p></div></div>;

  return <DashboardLayout><div className="min-h-[calc(100vh-2rem)] bg-[#F8F4EA] px-1 py-4 text-[#173D31] sm:px-4 sm:py-6"><div className="mx-auto max-w-6xl"><header className="flex flex-col gap-5 border-b border-[#D7CDBB] pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow mb-3">Admin workspace</p><h1 className="display-serif text-5xl leading-none">Riwayat permintaan.</h1><p className="mt-4 max-w-xl text-sm leading-6 text-[#527065]">Lihat, saring, ekspor, dan tindak lanjuti permintaan konsultasi pelanggan.</p></div><div className="flex flex-wrap gap-2"><Button type="button" onClick={downloadCsv} disabled={csvExport.isFetching} variant="outline" className="rounded-full border-[#B6A990] bg-[#FFFCF5] text-[#173D31] hover:bg-white"><Download className="mr-2 h-4 w-4" />{csvExport.isFetching ? "Menyiapkan…" : "Ekspor CSV"}</Button><Button type="button" onClick={refresh} disabled={history.isFetching} className="rounded-full bg-[#0E5A4A] px-5 text-white hover:bg-[#124D40]"><RefreshCw className={`mr-2 h-4 w-4 ${history.isFetching ? "animate-spin" : ""}`} />{history.isFetching ? "Memuat…" : "Segarkan"}</Button></div></header><section aria-labelledby="filter-heading" className="mt-7 rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-4 shadow-sm sm:p-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 id="filter-heading" className="flex items-center gap-2 text-sm font-extrabold text-[#173D31]"><Filter aria-hidden="true" className="h-4 w-4 text-[#7A5A20]" />Filter permintaan</h2><Button type="button" variant="ghost" onClick={resetFilters} disabled={!filters} className="w-fit text-xs text-[#527065] hover:bg-[#F4EEDF]"><X className="mr-1 h-3.5 w-3.5" />Reset filter</Button></div><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div><label htmlFor="filter-from" className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Dari tanggal</label><Input id="filter-from" type="date" value={from} onChange={event => setFrom(event.target.value)} className="mt-2 bg-white" /></div><div><label htmlFor="filter-to" className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Sampai tanggal</label><Input id="filter-to" type="date" value={to} onChange={event => setTo(event.target.value)} className="mt-2 bg-white" /></div><div><label htmlFor="filter-domisili" className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Domisili</label><select id="filter-domisili" value={domisili} onChange={event => setDomisili(event.target.value)} className="mt-2 min-h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-[#173D31] outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66B]"><option value="">Semua domisili</option>{DOMISILI_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}</select></div><div><label htmlFor="filter-status" className="text-xs font-bold uppercase tracking-[.08em] text-[#7A5A20]">Status follow-up</label><select id="filter-status" value={followUpStatus} onChange={event => setFollowUpStatus(event.target.value as FollowUpStatus | "")} className="mt-2 min-h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-[#173D31] outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66B]"><option value="">Semua status</option>{FOLLOW_UP_OPTIONS.map(status => <option key={status} value={status}>{status[0].toUpperCase() + status.slice(1)}</option>)}</select></div></div></section><div className="mt-7 flex flex-wrap items-center justify-between gap-3"><p className="text-sm font-semibold text-[#4B665C]">{history.data?.length ?? 0} permintaan ditemukan</p><p className="text-xs text-[#698074]">Maksimal 200 data sesuai filter</p></div>{history.isLoading && <div className="mt-5 rounded-2xl border border-[#E0D5C3] bg-[#FFFCF5] p-8 text-center text-sm text-[#527065]">Memuat riwayat permintaan…</div>}{history.isError && <div className="mt-5 rounded-2xl border border-[#E6B8AE] bg-[#FFF3F0] p-8 text-center text-sm text-[#A5402F]">Riwayat belum dapat dimuat. Silakan segarkan kembali.</div>}{!history.isLoading && !history.isError && history.data?.length === 0 && <div className="mt-5 rounded-2xl border border-dashed border-[#CDBEAA] bg-[#FFFCF5] p-10 text-center text-sm text-[#527065]">Belum ada permintaan yang cocok dengan filter.</div>}{!history.isLoading && !history.isError && history.data && history.data.length > 0 && <div className="mt-5 grid gap-4">{history.data.map(request => <RequestCard key={request.id} request={request as RequestItem} onStatusChange={changeStatus} updating={updatingId === request.id} />)}</div>}</div></div></DashboardLayout>;
}
