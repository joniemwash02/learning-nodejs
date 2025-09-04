const { readFileSync, writeFileSync } = require("fs");

const secondfile = readFileSync("./content/subfolder/second.txt", 'utf-8');
const firstfile = readFileSync("./content/first.txt", 'utf-8');

writeFileSync("./content/newcreateditem.txt",`here is the created item ${secondfile}, ${firstfile}`,{flag: 'a'})

// console.log(secondfile)
// console.log(firstfile)