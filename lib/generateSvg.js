const {Triangle, Circle, Square} = require('./shapes')

function generateSvg (text, textColor, shape, shapeColor) {
    let logo;
    console.log(shape)
    switch(shape) {
        case 'triangle':
            logo = new Triangle(text,textColor,shapeColor).render();
            break;
        case 'square':
            logo = new Square(text,textColor,shapeColor).render();
            break;
        case 'circle':
            logo = new Circle(text,textColor,shapeColor).render();;
    };
    
    return logo;
}

module.exports = generateSvg;

// if (shape === 'triangle') {
//     let logo = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

//     <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />

//     <text x="150" y="135" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg> `
// };

// if (shape === 'square') {
//     let logo = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

//     <rect width="200" height="200" fill="${shapeColor}"/>

//     <text x="100" y="115" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg> `
// };

// if (shape === 'circle') {
//     let logo = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

//     <circle cx="100" cy="100" r="100" fill="${shapeColor}"/>

//     <text x="100" y="115" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg>`
// };