const path = require('path')
const fs = require('fs');
const { error } = require('console');

// console.log(__dirname);
const dirPath = path.join(__dirname,'files');
console.log(dirPath);

// for(i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + `/hello${i}.txt`, "a simple text file");
// }

fs.readdir(dirPath,(error, files) => {
    files.forEach((item) => {
        console.log("file name is: ",item);
    })
})


// console.log(__dirname);



// ** Displaying File List From Folder
// Make files in folder
// Use path module
// Get file names and print

