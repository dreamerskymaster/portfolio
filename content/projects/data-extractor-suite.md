---
title: "Data Extractor & BlobCheck Suite"
subtitle: "Automated Data Integrity & OCR Extraction Tools"
category: "Van Dyk Recycling Solutions"
timeline: "May 2025 - Dec 2025"
teamSize: "Solo Developer"
status: "Production Ready"
summary: "A suite of automation tools for data integrity and extraction, saving $40K+ annually by eliminating manual verification and entry."
tech: ["Python", "Azure SQL", "OCR", "Pandas", "Azure Blob Storage"]
impact:
  - "$40K+ combined annual value"
  - "Eliminated manual PDF data entry"
  - "Ensured 100% data integrity"
links:
  demo: "#"
  repo: "#"
date: "2025-08-15"
businessContext: "Manual entry of data from PDF reports was slow and error-prone. Additionally, sync issues between Azure Blob Storage and SQL Server caused operational disruptions."
challenge: "Develop automated tools to extract structured data from unstructured PDFs and verify data consistency between cloud storage and the database."
scope:
  - "PDF OCR extraction pipeline"
  - "Automated data validation"
  - "Cloud-to-Database integrity monitoring"
  - "Self-healing link correction"
technicalSolution:
  extraction:
    - "LayoutParser & PaddleOCR for text"
    - "Regex for pattern matching"
    - "Pandas for data structuring"
  integrity:
    - "Automated daily verification scripts"
    - "Azure SDK integration"
    - "SQL consistency checks"
quantifiedResults:
  "Value": "$40K+ annual savings"
  "ROI": "800%+ for both tools"
  "Reliability": "Zero missing file errors"
images: []
---

# Data Extractor & BlobCheck Suite

## Overview
This suite of tools addresses two critical backend challenges: extracting structured data from unstructured PDF reports and ensuring data consistency across cloud and on-premise databases.

## Data Extractor
*   **Problem**: Manual entry of data from hundreds of PDF service reports was slow and error-prone.
*   **Solution**: A Python-based OCR pipeline that automatically parses PDFs, validates the data, and inserts it into the ERP system.
*   **Impact**: Saved 320+ hours of manual work annually.

## BlobCheck
*   **Problem**: Sync issues between Azure Blob Storage and the local SQL database caused "missing file" errors for users.
*   **Solution**: An automated monitoring script that continuously verifies file integrity and self-heals broken links.
*   **Impact**: Reduced support tickets related to missing files to near zero.
