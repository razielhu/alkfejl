//ctrl + shift + p, task configure, 
/*
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "node",
    "isShellCommand": true,
    "args": ["${file}"],
    "showOutput": "always"
}
*/

//Ctrl + ö  konzol log
//Ctrl + Shift + B      run
//Ctrl + Shift + U      use
//Ctrl + ü              gyors kommentelés



"use strict";

//let, const   deklarálás

const x = [1,2,54,6,-45,324,-3,-23,2];

function kivalogatas(arr, tulFv) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if( tulFv(arr[i]) ) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log( kivalogatas(x, function(p) {
    return p < 0;
}) );

//ezt a feladatot nem így oldjuk meg ecmascript óta

console.log(
    x.filter(function(p) {
        return p < 0;
    })
)

//ecmascript 6 óta

console.log(
    x.filter( p => p < 0 )
)
