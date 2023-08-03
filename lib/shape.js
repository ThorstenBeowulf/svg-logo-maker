class Shape {
  constructor( backgroundColor, text, textColor, shape, shapeColor) {
    this.backgroundColor;
    this.text;
    this.textColor;
    this.shape;
    this.shapeColor;
  }

  render() {
    throw new Error("Child class must implement render() method.")
  }

}

module.exports = Shape;