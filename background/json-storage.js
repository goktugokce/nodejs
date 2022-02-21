const fs = require('fs');


/*const book = {
  title:'Ego is the enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('book.txt', bookJSON);


console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);*/

const dataBuffer = fs.readFileSync('book.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Goko";
data.age = '28';

console.log(data.name);
console.log(data.age);

const userJSON = JSON.stringify(data);
fs.writeFileSync('book.json', userJSON)