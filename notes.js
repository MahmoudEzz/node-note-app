const fs = require('fs');
const chalk = require('chalk');
const getNotes = ()=>{
    return "Your notes ....";
}

const addNote =(title, body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find(note=>note.title === title);
    
    debugger;
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added'));
    }else{
        console.log(chalk.yellow('Note title taken!'));

    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const notesUpdated = notes.filter(note=> note.title !== title)
    if (notes.length === notesUpdated.length){
        console.log(chalk.red.inverse('No note found!'));
    }else{
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesUpdated);
    }
}

const saveNotes = (notes)=>{
    try {
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync('notes.json',dataJSON);
        return true;
    } catch (error) {
        return false;
    }
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green(note.title));
        console.log(chalk.yellow(note.body));
    });
}

const readNote = (title)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find(note=>note.title === title)
    if (duplicateNote){
        console.log(chalk.green.inverse(duplicateNote.title));
        console.log(duplicateNote.body);
    }else{
        console.log(chalk.red('Not found!!'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}