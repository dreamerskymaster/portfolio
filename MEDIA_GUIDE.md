# Media & Assets Guide

How images and video are wired into **ManuFX**. Generated from the data files
on 2026-09-29 — if this drifts, trust
`src/data/profile.ts` and `src/data/hobbies.ts`, not this page.

## Format rules (these are not stylistic)

| Use | Format | Why |
|---|---|---|
| Images | **WebP** | The PNG heroes were 800KB–1MB each, 13MB total. WebP cut that ~85%. |
| Video | **H.264 MP4** + faststart | The originals were VP9-in-MOV, which **does not play in Safari**. |

**Never add these back:**
- **HEIC** — Chrome and Firefox cannot display it at all. 47 HEIC files were
  being served to browsers that could not render them.
- **.MOV / VP9** — unplayable in Safari.
- **Full-resolution phone captures** — several were 2448×3264. Resize to
  ~1600px before converting.

`public/` is the deployment payload. It was 462MB and is now ~214MB. Anything
in there that nothing references still ships on every deploy — 112 such files
were removed in Sept 2026. **Check references before adding assets.**

## Where paths live

- **Projects** — `images` array on each entry in `src/data/profile.ts`
- **Hobbies** — `media` array on each entry in `src/data/hobbies.ts`

## Project images

| Project id | Image |
|---|---|
| `dykscribe` | /projects/dykscribe.webp |
| `rag-knowledge-system` | /projects/rag-knowledge.webp |
| `van-dyk-one` | /projects/van-dyk-one.webp |
| `cdms` | /projects/cdms-logistics.webp |
| `van-dyk-tools` | /projects/vdt-hub.webp |
| `costiq` | /projects/costiq.webp |
| `vdrs360` | /vdrs-presentation/vdt/Screenshot-2025-11-10-161206.png |
| `vdrs-website` | /vdrs-presentation/vdrs/Screenshot-2025-10-07-115533.png |
| `vdrs-exchange` | /vdrs-presentation/vdrsex/Screenshot-2025-10-30-104013.png |
| `mano-ai` | /ai-manufacturing-1.png |
| `hero-motocorp-transformation` | /projects/hero-motocorp.webp |
| `connecting-rod-assembly` | /projects/connecting-rod-assembly.webp |
| `f1-race-strategy-predictor` | /projects/f1-strategy.webp |
| `vigilance-decrement-research` | /projects/vigilance-research.webp |
| `edm-controllers-study` | /projects/edm-study.webp |
| `plc-elevator-simulation` | /projects/plc-elevator.webp |
| `airport-operations-lean` | /projects/airport-lean.webp |
| `schneider-digital-strategy` | /projects/schneider-supply-chain.webp |
| `bosch-rexroth-hydraulics` | /projects/bosch-rexroth-hydraulics.webp |
| `diy-lifi-communication` | /projects/lifi-comm.webp |
| `peizoelectric-bag` | /projects/piezo-bag.webp |

## Hobby media

| Hobby | Media |
|---|---|
| travelling | /hobbies/IMG20240927181857.webp<br>/hobbies/IMG20241010181331.webp<br>/hobbies/IMG_9627.webp<br>/hobbies/IMG_1651.webp<br>/hobbies/IMG_1721.mp4 |
| cooking | /hobbies/IMG_2536.webp<br>/hobbies/IMG_2537.webp<br>/hobbies/IMG_2538.webp<br>/hobbies/IMG_2914.webp<br>/hobbies/IMG_0130.mp4 |
| cuisine-exploration | /hobbies/Snapchat-1818034525.webp<br>/hobbies/Snapchat-186579657.webp<br>/hobbies/Snapchat-1952597326.webp<br>/hobbies/Snapchat-1972145851.webp<br>/hobbies/IMG_1304.mp4 |
| biking | /hobbies/CAB3B256-F15D-4059-AF1F-C3EEFF4E5A16.webp<br>/hobbies/IMG_2425.mp4<br>/hobbies/IMG_2431.mp4 |
| hiking | /hobbies/IMG_2572.mp4<br>/hobbies/IMG_2639.mp4 |
| music | /hobbies/Snapchat-662689688.webp<br>/hobbies/IMG_2797.mp4<br>/hobbies/IMG_0195.mp4 |
| tv-movies | /hobbies/IMG_2481.webp<br>/hobbies/IMG_2481.mp4<br>/hobbies/VID20250628163928.mp4 |
| automotive | /hobbies/IMG_1963.webp<br>/hobbies/IMG_0755.mp4 |

## Adding media

1. Convert first: `cwebp -q 82 in.jpg -o out.webp` for images;
   `ffmpeg -i in.mov -vf "scale='min(720,iw)':-2" -c:v libx264 -crf 28 -c:a aac -b:a 96k -movflags +faststart out.mp4` for video.
2. Drop it in the right `public/` subfolder.
3. Reference it from the data file. If nothing references it, do not commit it.
