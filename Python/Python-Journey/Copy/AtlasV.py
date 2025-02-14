import os
import shutil


def transfer_directory(source_dir, dest_dir):
    if not os.path.exists(source_dir):
        print(f"Source Directory {source_dir} does not exist")
        return
    # Create a destination directory if it does not exist
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
# Copy the entire directory into the destination
    try:
        shutil.copytree(source_dir, dest_dir, dirs_exist_ok=True)
        print(f"Successfully Copied {source_dir} to {dest_dir}")
    except Exception as error:
        print(f"An Error Occur:{error}")


source_directory = "C:\Users\sahrfear.macarthy\OneDrive - Onto Innovation Inc\Desktop\Software Upgrade\TSMC MFG Upgrade-Main\Backup History\Atlas V Config Backup tool 691"
destination_directory = "D:"
transfer_directory(source_directory, destination_directory)
