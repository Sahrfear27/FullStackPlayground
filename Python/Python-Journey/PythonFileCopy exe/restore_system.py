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

    for root, files in os.walk(src):
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


source_directory = r"/Users/sahrfearmacarthy/Maharishi University./Repositories/ThinkAndCode/LeetCode/Strings"

destination_directory = r"/Users/sahrfearmacarthy/Maharishi University./Repositories/FullStackPlayground/Python/Python-Journey/PythonFileCopy exe"
copy_files(source_directory, destination_directory)
print("File copy operation completed.")

"""
Source Path: --> FTP --> Backup --> AtlasV(has 3 folders) ==>  Folder1:  Nano --> Data --> DB --> PR --> Backupfiles
                                                               Folder2: CompleteEase -->Results --> Backupresultsfiles
                                                               Folder3 : LensCalabration --> ReCal --> BackupCalibrationfiles


                                                                  
Dest Path: --> LocalDis C --> Nano(has 3 folders)==> Folder1: Data --> DB --> PR --> Backupfiles
                                                     Folder2: CompleteEase -->Results --> Backupresultsfiles
                                                     Folder3 : LensCalabration --> ReCal --> BackupCalibrationfiles

                                                     
                                          

 os.walk(src):generates the file names in a directory tree by walking either top-down or bottom-up. It returns a tuple for each directory it visits, containing three elements
    root: 
1. The current directory path.
    2. A list of subdirectories in the current directory.
    3. A list of files in the current directory.

"""
