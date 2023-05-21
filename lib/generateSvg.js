const {Triangle, Circle, Square} = require('./shapes')

function generateSvg (text, textColor, shape, shapeColor) {
    let logo;
    
    switch(shape) {
        case 'triangle':
            logo = new Triangle(text,textColor,shapeColor).renderShape();
            break;
        case 'square':
            logo = new Square(text,textColor,shapeColor).renderShape();
            break;
        case 'circle':
            logo = new Circle(text,textColor,shapeColor).renderShape();;
    };
    
    return logo;
}

module.exports = generateSvg;
