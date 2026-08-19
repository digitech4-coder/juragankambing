from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent / "image"

# Conservative display widths: enough resolution for retina mobile and desktop cards,
# while preventing multi-megapixel originals from delaying the first viewport.
MAX_WIDTHS = {
    "juragankambing-hero.jpg": 1600,
    "juragankambing-katering.jpg": 1400,
    "juragankambing-aqiqah.jpg": 1400,
    "juragankambing-tumpeng.jpg": 1400,
    "PaketKambingGuling.png": 1600,
    "proses-aqiqah-tanpa-judul.png": 1600,
    "juragankambing-logo-transparent.png": 800,
    "juragankambing-paket-hemat.png": 1000,
    "juragankambing-paket-standar.png": 1000,
    "juragankambing-paket-super.png": 1000,
    "juragankambing-paket-istimewa.png": 1000,
}

for name, max_width in MAX_WIDTHS.items():
    source = ROOT / name
    if not source.exists():
        raise FileNotFoundError(source)

    with Image.open(source) as image:
        image = image.convert("RGBA") if image.mode in ("RGBA", "LA", "P") else image.convert("RGB")
        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)

        stem = source.stem
        webp = ROOT / f"{stem}.webp"
        image.save(webp, "WEBP", quality=88, method=6, lossless=False)

        if image.mode == "RGBA":
            optimized = ROOT / f"{stem}-optimized.png"
            image.save(optimized, "PNG", optimize=True)
        else:
            optimized = ROOT / f"{stem}-optimized.jpg"
            image.save(optimized, "JPEG", quality=91, optimize=True, progressive=True, subsampling=0)

        print(f"{name}: {source.stat().st_size:,} -> {webp.stat().st_size:,} bytes; {image.width}x{image.height}")
