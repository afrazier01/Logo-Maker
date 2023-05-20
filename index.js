const inquirer = require('inquirer')
const questions = require('./lib/questions')
const {appendFile} = require('fs')
const generateSvg = require('./lib//GenerateSVG')

inquirer
    .prompt(questions)
    .then((answers)=>{
    const {text, textColor, shape, shapeColor} = answers;
    
    const logo = generateSvg(text, textColor, shape, shapeColor)
    console.log(logo)
    //appendFile('logo.svg',[])
    console.log('\n'+'Generated logo.svg');
});