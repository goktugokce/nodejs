const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

//Customize yargs version, it is 1.0.0 by default
yargs.version("1.1.0");

//add, remove, read, list with notes
//Creating add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe:'Note title',
      demandOption: true,
      type:'string'
    },
    body: {
      describe: 'Note body',
      demandOption : true,
      typr: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  },
});

//Creating remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//Creating list command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler: function () {
    console.log("Listing notes!");
  },
});

//Creating read command
yargs.command({
  command: "read",
  describe: "Read the note",
  handler: function () {
    console.log("Reading the note!");
  },
});


yargs.parse();

//console.log(yargs.argv);
