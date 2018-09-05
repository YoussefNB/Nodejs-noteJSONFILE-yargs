const fs = require('fs')
//Outside addNotes(title,body) because if its inside its gonna be declared everytime the function is called.
let notes = []

const addNotes = (title, body) => {
    let note = {
        title,
        body
    }
    try {
        let noteStr = fs.readFileSync('./notes.json')
        notes = JSON.parse(noteStr)
    } catch (e) {}
    let filteredNotes = notes.filter((note => note.title === title))
    if (filteredNotes == 0) {
        notes.push(note)
        console.log('Adding note . . .');
        fs.writeFileSync('./notes.json', JSON.stringify(notes))
    } else {
        console.log('Note already exists.')
    }

}
const listNotes = () => {
    console.log('Listing note(s) . . .');
    try {
        let noteStr = fs.readFileSync('./notes.json')
        notes = JSON.parse(noteStr)
    } catch (e) {}
    console.log(notes)
    console.log('\n------------------------\n')
    for (i = 0; i < notes.length; i++) {
        console.log('   Title : ' + notes[i].title)
        console.log('   body : ' + notes[i].body)
        console.log('\n------------------------\n')
    }
}
const removeNotes = (title) => {
    console.log('Removing note . . .');
    try {
        let noteStr = fs.readFileSync('./notes.json')
        notes = JSON.parse(noteStr)
    } catch (e) {}
    let filteredNotes = notes.filter((note => note.title !== title))
    console.log(filteredNotes)
    if (filteredNotes !== 0) {
        console.log('removing note . . .');
        fs.writeFileSync('./notes.json', JSON.stringify(filteredNotes))
    } else {
        console.log('Note doesnt exist.')
    }
}
const readNotes = (title) => {
    console.log('reading note . . .');
    let noteStr = fs.readFileSync('./notes.json')
    notes = JSON.parse(noteStr)
    let filteredNotes = notes.filter((note => note.title === title))
    console.log('\n ------------------------\n')
    console.log('   Title : ' + filteredNotes[0].title)
    console.log('   body : ' + filteredNotes[0].body)
    console.log('\n------------------------')
}

module.exports = {
    addNotes,
    listNotes,
    removeNotes,
    readNotes
}