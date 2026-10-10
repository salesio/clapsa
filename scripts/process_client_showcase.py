import os
import subprocess
from PIL import Image

SRC_IMG_DIR = r"C:\Users\Alves King Edition\Videos\XenderDownload\phone\image\2026-10"
SRC_VID_DIR = r"C:\Users\Alves King Edition\Videos\XenderDownload\phone\video\2026-10"
PICTURES_DIR = r"C:\Users\Alves King Edition\Pictures\IceBerg"

OUT_IMG_DIR = r"c:\Users\Alves King Edition\Documents\Project 2\clapsa\public\images\gallery"
OUT_THUMB_DIR = os.path.join(OUT_IMG_DIR, "thumbs")

os.makedirs(OUT_IMG_DIR, exist_ok=True)
os.makedirs(OUT_THUMB_DIR, exist_ok=True)

# Additional images to process for the newly expanded client groups
NEW_IMAGES_TO_PROCESS = [
    # FRELIMO & Daniel Chapo
    ("IMG-20261010-WA0255.jpg", "frelimo-daniel-chapo-drawstring-bag"),
    ("IMG-20261010-WA0283.jpg", "frelimo-daniel-chapo-campaign-kit"),
    ("IMG-20261010-WA0278.jpg", "frelimo-yellow-capulana-bandana"),
    ("IMG-20261010-WA0282.jpg", "frelimo-drum-emblem-triangular-scarf"),
    ("IMG-20261010-WA0289.jpg", "frelimo-red-campaign-scarves-bandanas"),
    ("IMG-20261010-WA0643.jpg", "frelimo-presidential-campaign-cap"),

    # CAD & Venâncio Mondlane
    ("IMG-20261010-WA0290.jpg", "cad-venancio-mondlane-rollup-banner"),
    ("IMG-20261010-WA0287.jpg", "cad-electoral-banner-workshop-display"),
    ("IMG-20261010-WA0264.jpg", "cad-podium-acrylic-campaign-branding"),
    ("IMG-20261010-WA0391.jpg", "cad-campaign-rollup-banner-finishing"),

    # RENAMO
    ("IMG-20261010-WA1927.jpg", "renamo-blue-embroidered-polo-shirt"),
    ("IMG-20261010-WA1928.jpg", "renamo-blue-embroidered-campaign-cap"),
    ("IMG-20261010-WA0286.jpg", "renamo-civic-ambassador-blue-tee"),
    ("IMG-20261010-WA0294.jpg", "renamo-community-electoral-apparel"),

    # UNICEF & Humanitarian
    ("IMG-20261010-WA1923.jpg", "unicef-mec-aprender-melhor-tote-bag"),
    ("IMG-20261010-WA0271.jpg", "unhcr-refugiados-humanitarian-blue-shirts"),
    ("IMG-20261010-WA0288.jpg", "unhcr-high-vis-reflective-apparel-bundle"),
    ("IMG-20261010-WA0799.jpg", "un-women-generation-equality-pens"),

    # G4S Secure Solutions
    ("IMG-20261010-WA0919.jpg", "g4s-security-tactical-ballistic-vest"),
    ("IMG-20261010-WA1924.jpg", "g4s-tactical-vests-and-reflector-batch"),
    ("IMG-20261010-WA1925.jpg", "g4s-ballistic-vests-packaging-staging"),
    ("IMG-20261010-WA1926.jpg", "g4s-security-vest-embroidery-qc"),

    # ELAXO & Karina
    ("IMG-20261010-WA1337.jpg", "elaxo-sublimated-gazebo-and-tablecloth"),
    ("IMG-20261010-WA1339.jpg", "elaxo-event-activation-table-display"),
    ("IMG-20261010-WA1325.jpg", "elaxo-owara-corporate-merchandise-suite"),
    ("IMG-20261010-WA0885.jpg", "construcoes-karina-teardrop-flags"),

    # Gauteng Province
    ("IMG-20261010-WA0679.jpg", "gauteng-province-flame-retardant-conti-suits"),
    ("IMG-20261010-WA1804.jpg", "gauteng-province-sports-arts-tracksuits"),
    ("IMG-20261010-WA1766.jpg", "gauteng-province-recreation-apparel"),
    ("IMG-20261010-WA0427.jpg", "caterpillar-sabs-steel-toe-safety-boots")
]

print("Processing new curated images to WebP...")

for src_name, slug in NEW_IMAGES_TO_PROCESS:
    src_path = os.path.join(SRC_IMG_DIR, src_name)
    if not os.path.exists(src_path):
        print(f"Warning: {src_name} not found")
        continue

    out_full = os.path.join(OUT_IMG_DIR, f"{slug}.webp")
    out_thumb = os.path.join(OUT_THUMB_DIR, f"{slug}.webp")

    try:
        with Image.open(src_path) as img:
            rgb_img = img.convert("RGB")
            
            # Save full image (max 1280px on long edge, quality 82)
            full_img = rgb_img.copy()
            full_img.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
            full_img.save(out_full, format="WEBP", quality=82, method=6)
            
            # Save thumbnail (max 420px on long edge, quality 75)
            thumb_img = rgb_img.copy()
            thumb_img.thumbnail((420, 420), Image.Resampling.LANCZOS)
            thumb_img.save(out_thumb, format="WEBP", quality=75, method=6)
            
            f_size = os.path.getsize(out_full) / 1024
            t_size = os.path.getsize(out_thumb) / 1024
            print(f"[OK] {slug}.webp (Full: {f_size:.1f}KB, Thumb: {t_size:.1f}KB)")
    except Exception as e:
        print(f"Error {src_name}: {e}")

# Process Standard Bank logo if available
std_path = os.path.join(PICTURES_DIR, "StandardBank-400px-x-400px.png")
if os.path.exists(std_path):
    try:
        with Image.open(std_path) as img:
            rgb_img = img.convert("RGB")
            out_full = os.path.join(OUT_IMG_DIR, "standard-bank-corporate-identity.webp")
            out_thumb = os.path.join(OUT_THUMB_DIR, "standard-bank-corporate-identity.webp")
            rgb_img.save(out_full, format="WEBP", quality=85)
            rgb_img.thumbnail((420, 420))
            rgb_img.save(out_thumb, format="WEBP", quality=80)
            print("[OK] Standard Bank logo processed to WebP")
    except Exception as e:
        print(f"Error standard bank: {e}")

print("Image processing complete!")
