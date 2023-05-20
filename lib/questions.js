const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three text characters: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword or hexadecimal number for the text color: '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape: ',
        choices: ['circle','triangle','square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword or hexadecimal number for the shape color: '
    },
]

module.exports = questions;