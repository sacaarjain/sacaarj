import os
import shutil

# Specify the directory you want to work with
folder_path = '../mrfudge'

# Ensure the folder path exists
if not os.path.exists(folder_path):
    print(f"The folder path {folder_path} does not exist.")
    exit()

# Get the list of files in the directory
files = os.listdir(folder_path)

# Filter out any non-file items in the list
# files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

# Sort the files by their modified time (optional step)
# files.sort(key=lambda x: os.path.getmtime(os.path.join(folder_path, x)))

# Iterate through the files and rename them
for i, file in enumerate(files):
    _, ext = os.path.splitext(file)
    new_name = f"{i + 1}{ext}"
    src = os.path.join(folder_path, file)
    dst = os.path.join(folder_path, new_name)
    if src != dst:
        os.rename(src, dst)
        print(f"Renamed {src} to {dst}")

print("All files have been renamed.")
