const inquirer = require('inquirer')
const questions = require('./lib/questions')
const {appendFile} = require('fs')
const generateSvg = require('./lib//GenerateSVG');
const { createDiffieHellmanGroup } = require('crypto');
const { Triangle } = require('./lib/shapes');

inquirer
    .prompt(questions)
    .then((answers)=>{
    const {text, textColor, shape, shapeColor} = answers;
    
    const logo = generateSvg(text, textColor, shape, shapeColor)
    
    appendFile('logo.svg',logo, (error) => {(error) ? console.error(error) : ''})
    console.log('\n'+'Generated logo.svg');
});

