const Shape = require('../shape.js');

describe('Shape', () => {
  it('should throw an error if the render method is called', () => {
    const shape = new Shape()
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  })
})