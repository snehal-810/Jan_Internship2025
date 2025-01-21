const fs = require('fs')

// console.log(process);
// console.log(process.argv);
// console.log(process.argv[0]);
const input = process.argv;


// fs.writeFileSync(input[2], input[3]);

if(input[2]=='add')
    {
        fs.writeFileSync(input[3],input[4])
    }
    else if(input[2]=='remove')
    {
        fs.unlinkSync(input[3])
    }
    else
    {
        console.log("invalid input ")
    }


// ** Getting Input From Command Line
// Set input from Command Line
// Create file with input
// Delete the file with input

// console.log(process);
// console.log(process.argv);
// console.log(process.argv[0]);