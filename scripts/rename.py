import os
import shutil

# Filter out any non-file items in the list
# files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

# Sort the files by their modified time (optional step)
# files.sort(key=lambda x: os.path.getmtime(os.path.join(folder_path, x)))

def format_number(num):
    if num < 10:
        return f"00{num}"
    elif num < 100:
        return f"0{num}"
    else:
        return str(num)

# Iterate through the files and rename them
def format_images(folder_path):
    
    # Ensure the folder path exists
    if not os.path.exists(folder_path):
        print(f"The folder path {folder_path} does not exist.")
        exit()

    # Get the list of files in the directory
    files = os.listdir(folder_path)

    for i, file in enumerate(files):
        _, ext = os.path.splitext(file)
        new_name = format_number(i + 1) + ext
        src = os.path.join(folder_path, file)
        dst = os.path.join(folder_path, new_name)
        if src != dst:
            os.rename(src, dst)
            print(f"Renamed {src} to {dst}")

    print("All files have been renamed.")

def main():
    folder_path = "../photographs/"
    folder_name = input("Enter the folder that you want the images to be renamed for: ")
    folder_path += folder_name
    format_images(folder_path)

if __name__ == "__main__":
    main()