from pathlib import Path

path = Path(__file__).parent / "client/src/pages/Home.tsx"
s = path.read_text()

replacements = {
    '<img src={asset.mark} alt="Simbol JuraganKambing.id" className="h-14 w-14 object-contain" />': '<img src={asset.mark} alt="Simbol JuraganKambing.id" width={56} height={56} decoding="async" className="h-14 w-14 object-contain" />',
    '<img src={asset.hero} alt="Hidangan katering, tumpeng, nasi box, dan kambing guling JuraganKambing.id" className="hero-image relative h-[390px] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-[#D9B66B]/45 ring-offset-4 ring-offset-[#0E5A4A] sm:h-[510px]" />': '<img src={asset.hero} alt="Hidangan katering, tumpeng, nasi box, dan kambing guling JuraganKambing.id" fetchPriority="high" loading="eager" decoding="async" width={1600} height={900} className="hero-image relative h-[390px] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-[#D9B66B]/45 ring-offset-4 ring-offset-[#0E5A4A] sm:h-[510px]" />',
    '<img src={asset.katering} alt="Katering nasi box untuk acara kantor di Tangerang Selatan" className="h-[380px] w-full rounded-[1.5rem] object-cover ring-1 ring-[#B9954A]/40 ring-offset-4 ring-offset-white sm:h-[500px]" />': '<img src={asset.katering} alt="Katering nasi box untuk acara kantor di Tangerang Selatan" loading="lazy" decoding="async" width={1400} height={1050} className="h-[380px] w-full rounded-[1.5rem] object-cover ring-1 ring-[#B9954A]/40 ring-offset-4 ring-offset-white sm:h-[500px]" />',
    '<img src={image} alt={`Paket aqiqah ${name} JuraganKambing.id`} className="h-full w-full object-contain" />': '<img src={image} alt={`Paket aqiqah ${name} JuraganKambing.id`} loading="lazy" decoding="async" width={1000} height={800} className="h-full w-full object-contain" />',
    '<img src="image/PaketKambingGuling.webp" alt="Daftar paket kambing guling JuraganKambing.id dengan pilihan Hemat, Standar, Super, dan Istimewa" className="h-auto w-full rounded-[1.1rem] object-contain" />': '<img src="image/PaketKambingGuling.webp" alt="Daftar paket kambing guling JuraganKambing.id dengan pilihan Hemat, Standar, Super, dan Istimewa" loading="lazy" decoding="async" width={1402} height={1122} className="h-auto w-full rounded-[1.1rem] object-contain" />',
    '<img src={asset.tumpeng} alt="Tumpeng cantik untuk acara syukuran di Tangerang Selatan" className="h-[390px] w-full rounded-[1.5rem] object-cover ring-1 ring-[#B9954A]/40 ring-offset-4 ring-offset-[#F0E9DB]" />': '<img src={asset.tumpeng} alt="Tumpeng cantik untuk acara syukuran di Tangerang Selatan" loading="lazy" decoding="async" width={1400} height={1050} className="h-[390px] w-full rounded-[1.5rem] object-cover ring-1 ring-[#B9954A]/40 ring-offset-4 ring-offset-[#F0E9DB]" />',
    '<img src={img} alt={`${title} JuraganKambing.id`} className="h-56 w-full object-cover" />': '<img src={img} alt={`${title} JuraganKambing.id`} loading="lazy" decoding="async" width={1200} height={900} className="h-56 w-full object-cover" />',
    '<img src={asset.hero} alt="Sajian acara JuraganKambing.id" className="h-64 w-full rounded-2xl object-cover md:col-span-2" />': '<img src={asset.hero} alt="Sajian acara JuraganKambing.id" loading="lazy" decoding="async" width={1600} height={900} className="h-64 w-full rounded-2xl object-cover md:col-span-2" />',
    '<img src={asset.aqiqah} alt="Paket aqiqah JuraganKambing.id" className="h-64 w-full rounded-2xl object-cover" />': '<img src={asset.aqiqah} alt="Paket aqiqah JuraganKambing.id" loading="lazy" decoding="async" width={1400} height={1050} className="h-64 w-full rounded-2xl object-cover" />',
    '<img src={asset.tumpeng} alt="Tumpeng JuraganKambing.id" className="h-64 w-full rounded-2xl object-cover" />': '<img src={asset.tumpeng} alt="Tumpeng JuraganKambing.id" loading="lazy" decoding="async" width={1400} height={1050} className="h-64 w-full rounded-2xl object-cover" />',
    '<img src="image/proses-aqiqah-tanpa-judul.webp" alt="Alur proses aqiqah JuraganKambing.id dari konsultasi hingga pesanan tiba" className="mt-8 w-full rounded-[1.25rem] border border-[#E0D5C3] bg-[#FFFCF5] p-2 shadow-[0_18px_45px_rgba(23,61,49,.12)]" />': '<img src="image/proses-aqiqah-tanpa-judul.webp" alt="Alur proses aqiqah JuraganKambing.id dari konsultasi hingga pesanan tiba" loading="lazy" decoding="async" width={1600} height={1280} className="mt-8 w-full rounded-[1.25rem] border border-[#E0D5C3] bg-[#FFFCF5] p-2 shadow-[0_18px_45px_rgba(23,61,49,.12)]" />',
    '<img src={asset.mark} alt="Simbol JuraganKambing.id" className="h-12 w-12 object-contain" />': '<img src={asset.mark} alt="Simbol JuraganKambing.id" loading="lazy" decoding="async" width={48} height={48} className="h-12 w-12 object-contain" />',
}

for old, new in replacements.items():
    if old not in s:
        raise SystemExit(f"Missing expected image markup: {old[:90]}")
    s = s.replace(old, new, 1)

path.write_text(s)
print(f"Patched {len(replacements)} image elements")
