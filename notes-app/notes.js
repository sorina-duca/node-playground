const chalk = require("chalk");
const fs = require("fs");

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.red("Your notes:"));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(`${note.title}: ${note.body}`);
  } else {
    console.log(chalk.bgRed("No note found"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Note was added");
  } else {
    console.log("Sorry. Title is taken. Please choose another");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter((note) => note.title != title);

  if (updatedNotes.length === notes.length) {
    console.log(chalk.bgRed("Title not found"));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.bgGreen(title + " removed"));
  }
};

const saveNotes = (notes) => {
  const json = JSON.stringify(notes);
  fs.writeFileSync("notes.json", json);
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
