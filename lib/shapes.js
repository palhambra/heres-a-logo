class Shape {
  constructor(logoText, logoTextColor, logoShapeColor) {
    this.logoText = logoText;
    this.logoTextColor = logoTextColor;
    this.logoShapeColor = logoShapeColor;
  }
};

class Circle extends Shape {
  constructor(logoText, logoTextColor, logoShapeColor) {
    super(logoText, logoTextColor, logoShapeColor)
  }
  newLogo() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 
 <circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>

</svg>`
  }
  getShape(){
    return `circle`
  }
};

class Triangle extends Shape {
  constructor(logoText, logoTextColor, logoShapeColor) {
    super(logoText, logoTextColor, logoShapeColor)
  }
  newLogo() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,0 0,200 300,200" fill="${this.logoShapeColor}" />
 

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>

</svg>`
  }
  getShape(){
    return `triangle`
  }
};

class Square extends Shape {
  constructor(logoText, logoTextColor, logoShapeColor) {
    super(logoText, logoTextColor, logoShapeColor)
  }
  newLogo() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="${this.logoShapeColor}" />
 

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>

</svg>`
  }
  getShape(){
    return `square`
  }
};

module.exports = { Shape, Circle, Triangle, Square };