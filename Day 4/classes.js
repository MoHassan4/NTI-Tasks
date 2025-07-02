class Shape {
    area;
    permieter;
    constructor (){
        if(this.constructor == Shape ){
            throw new Error ("Can't take object from Shape Class");
        }
        this.area = 0;
        this.permieter = 0;
    }
    calculateArea(){}
    calculatePremieter(){}
    toString(){}
}

class Square extends Shape{
    constructor (side){
        super();
        this.side = side;
    }
    calculateArea (){
        this.area = this.side * this.side;
        return this.area;
    }
    calculatePremieter(){
        this.permieter = this.side * 4;
        return this.permieter;
    }
    toString(){
        console.log (`Square Area = ${this.area}`);
        console.log (`Square Premieter = ${this.permieter} `);
    }
}

class Rectangle extends Shape{
    constructor (length,width){
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea (){
        this.area = this.length * this.width;
        return this.area;
    }
    calculatePremieter(){
        this.permieter = (this.length + this.width) * 2;
        return this.permieter;
    }
    toString(){
        console.log (`Rectangle Area = ${this.area}`);
        console.log (`Rectangle Premieter = ${this.permieter} `);
    }
}

class Circle extends Shape{
    PI = 3.14;
    constructor (radius){
        super();
        this.radius = radius;
    }
    calculateArea (){
        this.area = this.PI * (this.radius * this.radius);
        return this.area;
    }
    calculatePremieter(){
        this.permieter = 2 * this.PI * this.radius;
        return this.permieter;
    }
    toString(){
        console.log (`Circle Area = ${this.area}`);
        console.log (`Circle Premieter = ${this.permieter} `);
    }
}

export { Shape, Square, Rectangle, Circle };