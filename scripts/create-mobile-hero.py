from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/juragankambing/image/juragankambing-hero.webp')
target = Path('/home/ubuntu/juragankambing/image/juragankambing-hero-mobile.webp')

with Image.open(source) as image:
    mobile = image.resize((768, 432), Image.Resampling.LANCZOS)
    mobile.save(target, 'WEBP', quality=82, method=6)

print(f'created {target} ({target.stat().st_size} bytes)')
