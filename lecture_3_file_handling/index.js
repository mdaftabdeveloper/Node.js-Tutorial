console.log("Tutorial for File Handling")

import { readFile, writeFile, appendFile } from 'fs/promises'

// read file function
const read_file = async (fileName) => {
    const data = await readFile(fileName, 'utf-8')
    console.log(data);
}


// create file
const write_file = async (fileName, content) => {
    await writeFile(fileName, content)
    console.log("File created successfully..")
}

// apend to file
const apppend_file = async (fileName, content) => {
    await appendFile(fileName, content)
    console.log("Content added successfully..")
}



console.log(read_file('sample.txt'))
console.log(write_file('demo.java', 'class Demo{}'))
console.log(apppend_file('demo.js', "This is extra content"))

