import os
import re
from pathlib import Path

# Configuration
SOURCE_DIR = "src"
EXCLUDE_DIRS = {"node_modules", "dist", "build", ".git"}
EXTENSIONS = {".ts", ".tsx", ".js", ".jsx"}

def analyze_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return [f"ERROR: Could not read file {file_path}: {str(e)}"]
    
    lines = content.split('\n')
    issues = []
    
    # Check for Docstrings on Exports
    # Regex to find exported functions/classes/consts
    # Limitation: naive regex, might miss some cases or false positive
    export_pattern = re.compile(r'export\s+(?:default\s+)?(?:class|function|const|interface|type)\s+([a-zA-Z0-9_]+)')
    
    for i, line in enumerate(lines):
        match = export_pattern.search(line)
        if match:
            # Check previous lines for docstring
            has_doc = False
            for k in range(1, 10): # Check up to 10 lines back
                if i - k < 0: break
                prev_line = lines[i-k].strip()
                if prev_line.endswith('*/') or prev_line.startswith('/**'):
                    has_doc = True
                    break
                if prev_line == '' or prev_line.startswith('//'): # Allow empty lines or single comments
                    continue
                else:
                    break # Code or something else found
            
            if not has_doc:
                issues.append(f"DOCS NEEDED: L{i+1} `{match.group(1)}`: Missing docstring")

    # Check for Unused Imports (Naive)
    # 1. Extract imports
    # 2. Check if name is used in file
    import_pattern = re.compile(r'import\s+(?:\{([^}]+)\}|(\*\s+as\s+[\w]+)|([\w]+))\s+from')
    
    imported_names = set()
    for line in lines:
        match = import_pattern.search(line)
        if match:
            # Group 1: { A, B }
            if match.group(1):
                names = [n.strip().split(' as ')[0] for n in match.group(1).split(',')] # taking original name checking usage logic is complex with aliases
                # Logic simplification: just check if the string appears elsewhere
                for n in names:
                     if n: imported_names.add(n.strip())
            # Group 2: * as A
            if match.group(2):
                parts = match.group(2).split(' as ')
                if len(parts) > 1:
                    imported_names.add(parts[1].strip())
            # Group 3: Default import A
            if match.group(3):
                imported_names.add(match.group(3).strip())

    # Check usage
    # Remove imports from content to avoid self-match? No, regex finding import lines not efficient
    # Better: simpler check
    # Check if 'name' appears > 1 time in the file (once for import)
    # This is rough but indicative
    
    for name in imported_names:
        # Simple word boundary check
        # Escape name for regex
        escaped_name = re.escape(name)
        # We need to ignore the import statement itself
        matches = re.findall(r'\b' + escaped_name + r'\b', content)
        if len(matches) <= 1:
             # Might be unused
             # Check if it is exported?
             issues.append(f"DEAD CODE: Unused import `{name}`?")

    # Check for Commented Out Code
    comment_block_count = 0
    in_comment_block = False
    in_comment_start = 0
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('//') and not stripped.startswith('///'): # allow directive
            # rudimentary check: does it look like code?
            if re.search(r'[;{}=]', stripped):
                if not in_comment_block:
                    in_comment_start = i
                in_comment_block = True
                comment_block_count += 1
            else:
                if in_comment_block and comment_block_count > 5:
                    issues.append(f"DEAD CODE: L{in_comment_start+1}-{i} Potential commented out code block")
                in_comment_block = False
                comment_block_count = 0
        else:
            if in_comment_block and comment_block_count > 5:
                 issues.append(f"DEAD CODE: L{in_comment_start+1}-{i} Potential commented out code block")
            in_comment_block = False
            comment_block_count = 0

    return issues
    
def main():
    if not os.path.exists(SOURCE_DIR):
        print(f"ERROR: Source directory '{SOURCE_DIR}' not found.")
        return

    print("PHASE 1: MAP (Audit Scan)")
    print("-------------------------")
    
    count = 0
    
    for root, dirs, files in os.walk(SOURCE_DIR):
        # Filter dirs
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if any(file.endswith(ext) for ext in EXTENSIONS):
                file_path = os.path.join(root, file)
                issues = analyze_file(file_path)
                
                if issues:
                    print(f"\nFILE: {file_path}")
                    for issue in issues:
                        print(f"  {issue}")
                    count += 1
    
    if count == 0:
        print("\nNo major issues found.")
    else:
        print(f"\nFlagged {count} files with issues.")

if __name__ == "__main__":
    main()
