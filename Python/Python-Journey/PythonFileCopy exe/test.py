import os
import shutil
import sys


def copy_files(src, dst):
    """
    Walks through the source directory (src) and copies all files to the destination directory (dst),
    preserving the directory structure.
    """
    if not os.path.exists(src):
        print(f"Source path {src} does not exist!")
        sys.exit(1)

    for root, _, files in os.walk(src):
        # Compute the relative path from the source directory
        relative_path = os.path.relpath(root, src)
        # Create corresponding destination directory
        dest_dir = os.path.join(dst, relative_path)
        os.makedirs(dest_dir, exist_ok=True)

        for file in files:
            src_file = os.path.join(root, file)
            dest_file = os.path.join(dest_dir, file)
            try:
                shutil.copy2(src_file, dest_file)
                print(f"Copied: {src_file} -> {dest_file}")
            except Exception as e:
                print(f"Failed to copy {src_file}: {e}")


# Define source and destination folder mappings
folders_to_copy = {
    "CompleteEase": {
        # "src": r"/Users/sahrfearmacarthy/FTP/Backup/AtlasV/Data",
        "src": r"/Users/sahrfearmacarthy/Restore/FTP/Backup/AtlasV/CompleteEase",
        "dst": r"/Users/sahrfearmacarthy/Restore/Nano/CompleteEase"
    },
    "Data": {
        "src": r"/Users/sahrfearmacarthy/Restore/FTP/Backup/AtlasV/Data",
        "dst": r"/Users/sahrfearmacarthy/Restore/Nano/Data"
    },
    "LensCalibration": {
        "src": r"/Users/sahrfearmacarthy/Restore/FTP/Backup/AtlasV/LensCalibration",
        "dst": r"/Users/sahrfearmacarthy/Restore/Nano/LensCalibration"
    }
}

# Iterate through the folders and copy files
for folder_name, paths in folders_to_copy.items():
    print(f"\nCopying {folder_name} from {
          paths['src']} to {paths['dst']}...\n")
    copy_files(paths["src"], paths["dst"])

print("\nAll files copied successfully.")
