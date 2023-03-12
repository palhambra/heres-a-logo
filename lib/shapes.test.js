const { Shape, Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
  it('should return true if logo chosen is the same', () =>{
    const circle = new Circle();
    const result = circle.getShape();

    expect(result).toEqual('circle');
  })
});

describe('Circle', () => {
  it('should return true if logo chosen is the same', () =>{
    const triangle = new Triangle();
    const result = triangle.getShape();

    expect(result).toEqual('triangle');
  })
});

describe('Square', () => {
  it('should return true if logo chosen is the same', () =>{
    const square = new Square();
    const result = square.getShape();

    expect(result).toEqual('square');
  })
})