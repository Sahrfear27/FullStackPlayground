"""
The following foldr need to be backup

C:\Sahrfear\ALVES
C:\Sahrfear\D\DB\data files
C:\Sahrfear\LearnToCode folder
C:\Sahrfear\ssy folder
C:\Sahrfear\confD folder
C:\Sahrfear\SEC\SE.cat files
C:\NancyKay
C:\CompEase\NonaCla folder
C:\CompEase\fcd folder

I want to create a executable when clicked on, it should create a Source Folder "Sahrfear Backup" 
Sahrfear Backup Folder  should contain 3 main folders(Sahrfear, NancyKay, CompEase). each of the 3 folder should contain the folders or files that are copies

"""
import os
import shutil

# Base folders to search for dynamically
base_folders = {
    "Nano": [
        r"C:\Nano",
    ],
    "NanoKey": [
        r"C:\NanoKey"
    ],
    "Completeease": [
        r"C:\Completeease"
    ]
}

# Subdirectories we expect inside each base folder
expected_subdirs = {
    "Nano": ["ADAP", "Data\DB", "LensCakibration", "sys", "Configdata", "SECorrection"],
    "NanoKey": [""],
    "Completeease": ["NanoCal", "cnf"]
}


# Backup destination
backup_root = r"D:\AtlasV Backup"


def find_actual_path(base, subdir):
    """Finds the correct case-sensitive folder name inside a given base directory."""
    normalized_subdir = subdir.replace(
        "\\", os.sep)  # Becomes "folder/subfolder/file" on Linux/macOS
    parts = normalized_subdir.split(os.sep)  # ['folder', 'subfolder', 'file']

    current_path = base
    for part in parts:
        if not os.path.exists(current_path):
            return None

        try:
            entries = os.listdir(current_path)
        except PermissionError:
            return None

        # Match ignoring case
        matched = next(
            (entry for entry in entries if entry.lower() == part.lower()), None)

        if matched:
            current_path = os.path.join(current_path, matched)
        else:
            return None

    return current_path


def copy_folder(source, destination):
    """Copy files and folders recursively."""
    if os.path.exists(source):
        shutil.copytree(source, destination, dirs_exist_ok=True)
        print(f"Copied: {source} → {destination}")
    else:
        print(f"Warning: {source} does not exist, skipping.")


def create_backup():
    """Main function to create the backup."""
    if not os.path.exists(backup_root):
        os.makedirs(backup_root)

    for main_folder, base_dirs in base_folders.items():
        main_folder_path = os.path.join(backup_root, main_folder)
        if not os.path.exists(main_folder_path):
            os.makedirs(main_folder_path)

        for base in base_dirs:
            for subdir in expected_subdirs[main_folder]:
                source_path = find_actual_path(base, subdir)
                if source_path:
                    destination = os.path.join(
                        main_folder_path, os.path.basename(source_path))
                    copy_folder(source_path, destination)


create_backup()
print("Backup completed.")
