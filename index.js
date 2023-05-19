const inquirer = require('inquirer')
const questions = require('./lib/questions')

inquirer
    .prompt(questions)
    .then((answers)=>{
    const {text, textColor, shape, shapeColor} = answers;
    console.log(text,textColor,shape,shapeColor);
});