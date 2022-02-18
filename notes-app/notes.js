const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => {
  return "Your notes ...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicates = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicates.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(notesToKeep);
  if(notes.length === notesToKeep.length){
    console.log(chalk.red.inverse.bold('No note found!'));
  }
  else{
    console.log(chalk.green.inverse.bold('Note Removed'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  console.log(chalk.inverse('Your notes'))
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  })
}

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => {
    return note.title === title;
  })
  if(note){
    console.log(chalk.yellow.inverse(note.title));
    console.log(chalk.yellow(note.body));
  }
  else{
    console.log(chalk.red('Note not found'))
  }
  
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  listNotes: listNotes,
  removeNote: removeNote,
  readNotes: readNotes
};
