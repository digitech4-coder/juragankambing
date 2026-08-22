from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/image/proses-aqiqah-tanpa-judul.png')
output = Path('/home/ubuntu/webdev-static-assets/image/proses-aqiqah-tanpa-judul-mobile.webp')

with Image.open(source) as image:
    image = image.convert('RGB')
    image.thumbnail((900, 900), Image.Resampling.LANCZOS)
    image.save(output, 'WEBP', quality=86, method=6)
    print(f'{output} {image.width}x{image.height} {output.stat().st_size} bytes')
