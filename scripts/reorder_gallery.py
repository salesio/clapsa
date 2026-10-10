import os
import json

# Read current verify_and_build_gallery.py
with open('scripts/verify_and_build_gallery.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Desired priority order of Job Group IDs
PRIORITY_ORDER = [
    # --- Top Priority: Local South African & Enterprise Heavyweights ---
    "job-standard-bank",         # 1. Standard Bank (Johannesburg/Sandton)
    "job-gauteng-province",      # 2. Gauteng Provincial Government (SA)
    "job-albany-bakeries",       # 3. Albany Bakeries (Tiger Brands SA)
    "job-g4s-security",          # 4. G4S Secure Solutions (SA / SADC)
    "job-trans-sadc-signs",      # 5. Trans-SADC Highway & Infrastructure Signs
    "job-sadc-logistics",        # 6. SADC Logistics Hub (Sandton Freight & Packaging)
    
    # --- Regional Telecom & Commercial Activations ---
    "job-movitel-telecom",       # 7. Movitel Telecom (Brand activations & gazebos)
    
    # --- Political Campaigns & Electoral Merchandise (Mozambique) ---
    "job-frelimo-campaign",      # 8. FRELIMO & Daniel Chapo
    "job-cad-campaign",          # 9. CAD & Venâncio Mondlane
    "job-renamo-campaign",       # 10. RENAMO
    
    # --- International FMCG & Humanitarian ---
    "job-tropigalia",            # 11. Tropigalia Moçambique
    "job-unicef-humanitarian",   # 12. UNICEF & UN Agencies
    "job-mera-malawi",           # 13. MERA Malawi Energy Authority
]

# We can execute verify_and_build_gallery module in a dict
namespace = {}
# Execute up to where JOB_GROUPS and GALLERY_ITEMS are defined
exec(code, namespace)

old_groups = namespace['JOB_GROUPS']
old_items = namespace['GALLERY_ITEMS']

# Create group map
group_map = {g['id']: g for g in old_groups}
new_groups = []
for gid in PRIORITY_ORDER:
    if gid in group_map:
        new_groups.append(group_map[gid])
    else:
        print(f"Warning: {gid} not in groups!")

# Check if any groups missed
for g in old_groups:
    if g['id'] not in PRIORITY_ORDER:
        new_groups.append(g)

# Order items by the same group priority
new_items = []
for gid in PRIORITY_ORDER:
    group_items = [item for item in old_items if item['jobId'] == gid]
    new_items.extend(group_items)

# Check if any items missed
accounted_ids = set(item['id'] for item in new_items)
for item in old_items:
    if item['id'] not in accounted_ids:
        new_items.append(item)

print(f"Reordered {len(new_groups)} groups and {len(new_items)} items.")
print("New Group Order:")
for i, g in enumerate(new_groups, 1):
    print(f"  {i:2d}. {g['title']} ({g['client']})")

# Verify disk assets
missing = []
for item in new_items:
    thumb_rel = os.path.join("public", item["thumbnail"].lstrip("/"))
    if not os.path.exists(thumb_rel):
        missing.append(f"Thumb missing: {thumb_rel}")
    src_rel = os.path.join("public", item["src"].lstrip("/"))
    if not os.path.exists(src_rel):
        missing.append(f"Src missing: {src_rel}")

for jg in new_groups:
    actual = len([i for i in new_items if i["jobId"] == jg["id"]])
    if actual != jg["itemsCount"]:
        missing.append(f"Count mismatch in {jg['id']}: expected {jg['itemsCount']}, got {actual}")
    cover_rel = os.path.join("public", jg["coverImage"].lstrip("/"))
    if not os.path.exists(cover_rel):
        missing.append(f"Cover missing: {cover_rel}")

if missing:
    print("ERRORS:", missing)
    exit(1)

# Write to src/data/gallery.ts
ts_content = f'''export type MediaCategory = 'all' | 'campaigns' | 'corporate' | 'ppe' | 'printing' | 'signage' | 'gifting' | 'sportswear' | 'display';
export type MediaType = 'all' | 'photo' | 'video';

export interface GalleryItem {{
  id: string;
  jobId: string;
  jobTitle: string;
  client: string;
  category: MediaCategory;
  categoryLabel: string;
  mediaType: 'photo' | 'video';
  thumbnail: string;
  src: string; // Image path or Video path
  title: string;
  description: string;
  tags: string[];
  specs: string[];
  location: string;
  date: string;
  featured?: boolean;
}}

export interface JobGroup {{
  id: string;
  jobCode: string;
  title: string;
  client: string;
  category: MediaCategory;
  categoryLabel: string;
  coverImage: string;
  description: string;
  itemsCount: number;
  location: string;
  year: string;
  deliverables: string[];
}}

export const JOB_GROUPS: JobGroup[] = {json.dumps(new_groups, indent=2)};

export const GALLERY_ITEMS: GalleryItem[] = {json.dumps(new_items, indent=2)};
'''

with open('src/data/gallery.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("[SUCCESS] src/data/gallery.ts rewritten with SA-first priority order!")
