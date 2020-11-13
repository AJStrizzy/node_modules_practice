const [favFoods] = require('./myModule')



function list(array) {
    for( let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
} 

list(favFoods)


const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));


import React from 'react'
import { SketchPicker } from 'react-color'
 
class Component extends React.Component {
 
  render() {
    return <SketchPicker />
  }
}



var color = Color('#7743CE').alpha(0.5).lighten(0.5);
console.log(color.hsl().string());  
console.log(color.cmyk().round().array());  
console.log(color.ansi256().object());