import { Shape, Square, Rectangle, Circle } from './classes.js';

let shape = new Shape();

let square = new Square (5);
square.calculateArea();
square.calculatePremieter();
square.toString();

let rect = new Rectangle (5,4);
rect.calculateArea();
rect.calculatePremieter();
rect.toString();

let circle = new Circle (5);
circle.calculateArea();
circle.calculatePremieter();
circle.toString();