const Shape = require('./shape.js');

 class Triangle extends Shape {
  constructor (backgroundColor, text, textColor, shape, shapeColor) {
    super(backgroundColor, text, textColor, shape, shapeColor);

  }
 }

 class Square extends Shape {
  constructor (backgroundColor, text, textColor, shape, shapeColor) {
    super(backgroundColor, text, textColor, shape, shapeColor);
    
  }
 }

 class Circle extends Shape {
  constructor (backgroundColor, text, textColor, shape, shapeColor) {
    super(backgroundColor, text, textColor, shape, shapeColor);
    
  }
 }

 module.exports = Triangle, Square, Circle;