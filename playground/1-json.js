const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// console.log(dataJson);

const info = JSON.parse(fs.readFileSync("1-json.json").toString());
console.log(info);
info.age = "36";
info.name = "Sorina";

console.log(info);

const newJSON = JSON.stringify(info);
fs.writeFileSync("1-json.json", newJSON);
