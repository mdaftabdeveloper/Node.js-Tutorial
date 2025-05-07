console.log("This is lecture 4. Learn path module");
import path from 'path';
// join two file
const fullPath = path.join('/path', 'index.py', 'file.java');
console.log(fullPath);

// find the absolute directory of the file
const absolutePath = path.resolve();
console.log(absolutePath);

// now find the extension of a file
const extensionName = path.extname('Resume.html');
console.log(extensionName);

// this is how extension of file is checked during document upload
if (extensionName == '.html') {
    console.log("You can proceed..");
} else {
    console.log("Invalid file format..");
}