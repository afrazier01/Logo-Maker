const {Triangle, Circle, Square} = require('./shapes');

describe('Shapes', () => {
    describe('triangle', ()=>{
        it('blue triangle', ()=>{
            const shape = new Triangle();

            shape.setColor('blue');

            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
        });
    });
    describe('circle', ()=>{
        it('red circle', ()=>{
            const shape2 = new Circle();

            shape2.setColor('red');

            expect(shape2.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="red"/>`);
        });
    });
    describe('square', ()=>{
        it('green square', ()=>{
            const shape3 = new Square();

            shape3.setColor('green');

            expect(shape3.render()).toEqual(`<rect width="200" height="200" fill="green"/>`);
        });
    });
});