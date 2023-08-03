const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.fileName = '';
    this.params;
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'fileName',
          message: 'Type the name you would like for the finished logo file',
        },
        {
          type: 'input',
          name: ' backgroundColor',
          message: 'Choose a color for the background. You can type the color\'s name or use a hexadecimal code',
        },
        {
          type: 'input',
          name: 'text',
          message: 'Choose up to 3 letters to display on the logo',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Choose a color for the text. You can type the color\'s name or use a hexadecimal code',
        },
        {
          type: 'list',
          name: 'shapeSelect',
          message: 'Choose a shape',
          choices: ['triangle', 'square', 'circle']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Choose a color for the shape. You can type the color\'s name or use a hexadecimal code',
        },

      ])
      .then(({fileName, backgroundColor, text, textColor, shapeSelect, shapeColor}) => {
        this.params = 
        return writeFile(
          join(__dirname, '..', 'examples', this.fileName + '.svg'),
          createDocument(this.title, this.tasks)
        );
      })
      .then(() => console.log('Created svg file!'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

}

module.exports = CLI;
