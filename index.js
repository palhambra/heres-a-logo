const inquirer = require('inquirer');
const fs = require ('fs');
const { Shape, Circle, Triangle, Square } = require('./lib/shapes.js')

function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter up to 3 characters for your logo:',
      // Will not let user continue in prompt if it is more than 3 characters
      validate: function(input) {
        if (input.length > 3) {
          return 'You can only enter up to 3 characters';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'logoTextColor',
      message: 'Please enter what color you would like your text logo to be:'
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Please choose what shape you would like for your logo:',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'logoShapeColor',
      message: 'Please enter what color your would like the shape to be:'
    }
  ])
  .then((data) => {
    console.log(data)

    // switches depending on logoShape answer
    let shape;
    switch(data.logoShape) {
      case 'Circle':
        shape = new Circle(data.logoText, data.logoTextColor, data.logoShapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(data.logoText, data.logoTextColor, data.logoShapeColor);
        break;
      case 'Square':
        shape = new Square(data.logoText, data.logoTextColor, data.logoShapeColor);
    }

    fs.writeFile('logo.svg', shape.newLogo(data), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
  });
}
init();