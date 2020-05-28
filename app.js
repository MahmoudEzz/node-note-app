const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command:'add',
    describe: 'adding new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:'remove',
    describe: 'removing a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe: 'list a note',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe: 'Reading new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);