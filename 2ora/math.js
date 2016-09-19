"use strict";

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    // add: add,
    // multiply: multiply
    // de ha ugyanaz a név, akkor így is megy:
    add,
    multiply
};