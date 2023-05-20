const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape: ',
        choices: ['circle','triangle','square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexadecimal number for the shape color: '
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three text characters: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color or hexadecimal number for the text color: '
    },
    
]

module.exports = questions;