console.log('Starting . . . ')
const yargs = require('yargs')
const notes = require('./notes.js')

const argv = yargs.command('add', 'adds a note to the file.', {
        title: {
            describe: 'title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'body of note',
            demand: true,
            alias: 'b'
        }
    }).command('read', 'read a specific note.', {
        title: {
            describe: 'title of note',
            demand: true,
            alias: 't'
        }
    }).command('list', 'displays all of the notes from the file.')
    .command('remove', 'removes a note from the file.', {
        title: {
            describe: 'title of note',
            demand: true,
            alias: 't'
        }
    })
    .help().argv


const command = argv._[0]

if (command === 'add') {
    notes.addNotes(argv.title, argv.body)
} else if (command === 'list') {
    notes.listNotes()
} else if (command === 'read') {
    notes.readNotes(argv.title)
} else if (command === 'remove') {
    notes.removeNotes(argv.title)
} else {
    console.log('COMMAND NOT RECONGNIZED ! ')
}