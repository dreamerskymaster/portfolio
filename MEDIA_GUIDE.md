# 🖼️ Media & Assets Mapping Guide

This guide provides a comprehensive overview of how images, videos, and other media assets are linked to projects and hobbies in the **ManuFX Portfolio**.

## 📂 Directory Structure

All media assets are stored in the `public/` directory, which is served as the root `/` path in the application.

- `/public/internship/`: Images related to Van Dyk Recycling Solutions projects.
- `/public/hobbies/`: Photos and videos for the Hobbies page.
- `/public/certificates/`: Digital copies of professional certifications.
- `/public/documents/`: PDF reports, letters of recommendation, and research papers.

---

## 🚀 Project Image Mapping

Projects are defined in `src/data/profile.ts`. Each project object contains an `images` array with relative paths starting from `/`.

| Project ID | Project Title | Primary Images |
| :--- | :--- | :--- |
| `vdrs-roi-presentation` | VDRS Transformation & ROI Presentation | `/internship/DSC01399.JPG`, `/internship/DSC01400.JPG` |
| `van-dyk-one` | Van Dyk One Mobile App | `/internship/DSC01410.JPG`, `/internship/DSC01411.JPG` |
| `portfolio-website` | ManuFX Portfolio Website | `/ManuFX.png`, `/manufacturing-tech-1.jpg` |
| `dykscribe` | DykScribe: AI Knowledge Capture | `/internship/DSC01431.JPG`, `/internship/DSC01432.JPG` |
| `rag-knowledge-system` | RAG AI Knowledge System | `/internship/DSC01443.JPG`, `/internship/DSC01445.JPG` |
| `cdms` | CDMS - Container Management | `/internship/DSC01451.JPG`, `/internship/DSC01452.JPG` |
| `data-extractor-suite` | Data Extractor & BlobCheck | `/internship/DSC01466.JPG`, `/internship/DSC01467.JPG` |
| `van-dyk-tools-hub` | Van Dyk Tools Hub | `/internship/DSC01479.JPG`, `/internship/DSC01480.JPG` |
| `manufx-cnc-robotics` | ManuFX - CLI AI Model | `/ai-manufacturing-1.png`, `/ai-manufacturing-2.png` |
| `hero-motocorp-transformation` | Hero MotoCorp Transformation | `/internship/DSC01489.JPG`, `/internship/DSC01491.JPG` |
| `edm-controllers-study` | EDM Controllers Study | `/internship/DSC01499.JPG`, `/internship/DSC01498.JPG` |
| `ai-powered-manufacturing` | Optimization of Mfg Line | `/content/media/iot-smart-cell-1.jpg`, `/content/media/simio-simulation-2.jpg` |

---

## 🎭 Hobby Media Mapping

Hobbies are defined in `src/data/hobbies.ts`. Each hobby contains a `media` array with `type`, `src`, and `caption`.

| Hobby ID | Hobby Name | Sample Media Paths |
| :--- | :--- | :--- |
| `travelling` | Cultural Exploration & Travel | `/hobbies/IMG20240927181857.jpg`, `/hobbies/IMG_1721.MOV` |
| `cooking` | Culinary Arts & Innovation | `/hobbies/IMG_2536.JPG`, `/hobbies/IMG_0130.MOV` |
| `cuisine-exploration` | Global Cuisine Discovery | `/hobbies/Snapchat-1818034525.jpg`, `/hobbies/IMG_1304.MP4` |
| `biking` | Cycling & Outdoor Fitness | `/hobbies/CAB3B256-F15D-4059-AF1F-C3EEFF4E5A16.jpg`, `/hobbies/IMG_2425.MP4` |
| `hiking` | Mountain Hiking & Adventure | `/hobbies/IMG_9627.JPG`, `/hobbies/IMG_2572.MP4` |
| `music` | Music Appreciation & Discovery | `/hobbies/Snapchat-662689688.jpg`, `/hobbies/IMG_2797.MP4` |
| `tv-movies` | Cinema & Storytelling | `/hobbies/IMG_2481.jpg`, `/hobbies/IMG_2481.mov` |
| `automotive` | Automotive Repair & Upgrades | `/hobbies/IMG_1963.JPG`, `/hobbies/IMG_0755.MP4` |

---

## 🛠️ How to Add/Update Media

### 1. Add the file
Place your new image or video in the appropriate subdirectory under `public/`.

### 2. Update the Data Source
- **For Projects**: Open `src/data/profile.ts` and locate the `id` of your project. Update the `images` array:
  ```typescript
  "images": [
    "/internship/your-new-image.jpg"
  ]
  ```
- **For Hobbies**: Open `src/data/hobbies.ts` and find the hobby object. Add to the `media` array:
  ```typescript
  media: [
    { type: 'image', src: '/hobbies/new-photo.jpg', alt: 'Description', caption: 'Your Caption' }
  ]
  ```
