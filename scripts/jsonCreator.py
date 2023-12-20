import json
import os

def printStatements(folderPath, folderName):
    if not os.path.exists(folderPath):
        print(f"The folder path specified {folderPath} does not exist.")
        exit()
    
    imageFiles = [file for file in os.listdir(folderPath) if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    folderName += '.json'
    jsonData = []
    for imageFile in imageFiles:
        data = {
            "filePath": os.path.join(folderPath, imageFile).replace('\\', '/')
        }
        jsonData.append(data)
        print(data)

    outputPath = os.path.join(folderPath, folderName)

    with open(outputPath, 'w') as json_file:
        json.dump(jsonData, json_file, indent = 2)

def main():
    folderPath = "../photographs/"
    folderName = input("Enter the folder where the images are:")
    folderPath += folderName
    printStatements(folderPath, folderName)
    print("JSON created successfully")




if __name__ == "__main__":
    main()