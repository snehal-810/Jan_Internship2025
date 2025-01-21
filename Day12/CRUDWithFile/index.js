const path = require('path')
const fs = require('fs')

const dirPath = path.join(__dirname,'crud');

const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a Simple text file');

// fs.readFile(filePath,'utf8', (err, item) => {
//     console.log(item);
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if(!err) {
//         console.log("file is updated");
//     }
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err) {
//         console.log("file name is update");
//     }
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);






// ** CRUD With File
// Make File
// Read File
// Update File
// Rename File
// Delete File