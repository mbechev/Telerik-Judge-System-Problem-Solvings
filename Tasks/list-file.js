const fs = require('fs');

const isDirectory = function (path) {
    return fs.statSync(path).isDirectory();
};

const getAllFilesAndFolders = function (dir) {
    return fs.readdirSync(dir);
};

const traverseFolders = function (direktoriq, indent) {
    const folders = getAllFilesAndFolders(direktoriq);

    folders.forEach((file) => {
        console.log(" ".repeat(indent) + file)
        if(isDirectory(direktoriq + "\\" + file)){
            traverseFolders(direktoriq + "\\" + file, indent+1);
        }
    });
};

// Input the path you are searching
traverseFolders('C:\\Users\\marti', 0);