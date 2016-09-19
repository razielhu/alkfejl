"use script";

/*
//aszinkron alapok: 2es hamarabb íródik mint 1es
setTimeout(function() {
    console.log(1);
}, 1000)
console.log(2);
*/

const fs = require('fs');
const jimp = require('jimp');
const path = 'images/';
const DataStore = require('nedb');
const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
});




fs.readdir(path, function (err, files) {
    if(err) throw err;

    files.forEach(fileName => {
        jimp.read(path + fileName, function (err, image) {
        const{width, height} = image.bitmap;

        
        console.log(fileName, width, height);
        db.insert({fileName, width, height}, function (err, insertedImage) {
            // console.log(insertedImage);
            image.resize(100, jimp.AUTO);
            image.write(`2ora/converted/${insertedImage._id}.png`, function (err) {
                if(err) throw err;
                console.log(fileName, 'atmeretezve es kiirva');
            });
        });
        })
        
    });
});
