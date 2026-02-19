import zipfile
import xml.etree.ElementTree as ET
import os
import sys

def extract_text_from_pptx(pptx_path):
    text_content = []
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            # excessive listing might be too much, just look for slides
            slide_files = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            # Sort by slide number (e.g. slide1, slide2, slide10)
            slide_files.sort(key=lambda x: int(os.path.basename(x).replace('slide', '').replace('.xml', '')))

            for i, slide_file in enumerate(slide_files):
                slide_xml = z.read(slide_file)
                root = ET.fromstring(slide_xml)
                
                # Namespace map (PowerPoint uses these)
                ns = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
                
                slide_text = []
                # Find all text runs
                for text_element in root.findall('.//a:t', ns):
                    if text_element.text:
                        slide_text.append(text_element.text)
                
                if slide_text:
                    text_content.append(f"--- Slide {i+1} ---")
                    text_content.append(" ".join(slide_text))
                    text_content.append("")
                    
    except Exception as e:
        sys.stderr.write(f"Error reading {pptx_path}: {str(e)}\n")
        sys.exit(1)
    
    return "\n".join(text_content)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pptx.py <path_to_pptx>")
        sys.exit(1)
        
    pptx_path = sys.argv[1]
    print(extract_text_from_pptx(pptx_path))
