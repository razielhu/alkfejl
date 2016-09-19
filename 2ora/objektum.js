"use strict";

const cim = {
    varos: 'Budapest',
    utca: 'Pazmany Peter setany',
    hazszam: '1/c',
    toString() {
        return `${this.varos}, ${this.utca}`; //Alt Gr + 7
    }
};

cim.iranyitoszam = '1117';

console.log(cim);
console.log(cim.toString());

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    setX(value) {
        this._x = value;
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }
}
// console.log(typeof Point)

class Circle extends Point {
    constructor(x,y,r) {
        super(x,y);
        this._r = r;


    }
}

const p1 = new Point(10, 20);
// p1.z = 30
// p1.setX(100);
p1.x = 100;
console.log(p1);
const c1 = new Circle(30,40,50);
console.log(c1);