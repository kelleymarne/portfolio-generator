const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and sent the error to the promises '.catch()' method
            if (err) {
                reject (err);
                //return the function to here to make sure the promise doesnt accidentally execute the resolve().
                return;
            }
            //if everything went well, resolve the promise and sent the successful data to the '.then()' method
            resolve({
                okay: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                okay: true,
                message: 'File Copied'
            });
        });
    });
};

module.exports = {writeFile, copyFile};