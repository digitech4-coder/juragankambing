from pathlib import Path
from PIL import Image

SOURCE_DIR = Path('/home/ubuntu/upload')
TARGET_DIR = Path('/home/ubuntu/juragankambing/image')
FILES = {
    'SnackBoxekonomis.png': 'snack-box-ekonomis.webp',
    'SnackBoxReguler.png': 'snack-box-reguler.webp',
    'SnackBoxPremium.png': 'snack-box-premium.webp',
}

TARGET_DIR.mkdir(parents=True, exist_ok=True)
for source_name, target_name in FILES.items():
    source = SOURCE_DIR / source_name
    target = TARGET_DIR / target_name
    with Image.open(source) as image:
        image = image.convert('RGB')
        image.save(target, 'WEBP', quality=88, method=6)
        print(f'{source_name}: {image.size[0]}x{image.size[1]} -> {target_name} ({target.stat().st_size} bytes)')
