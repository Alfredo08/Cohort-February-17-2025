const fs = require('fs');


fs.readFile('./message.txt', {encoding: 'utf-8'}, (error, data) => {
    if(error){
        throw Error("Something went wrong while reading the content of the file", error);
    }
    let copiedText = data;
    copiedText += "\nCopying to new file finished.";

    fs.writeFile('./copyMessage.txt', copiedText, {encoding: 'utf-8'}, (errorWrite) => {
        if(errorWrite){
            throw Error("Something went wrong while writing the content into the file", error);
        }
        console.log("The text was successfully copied!");
    });
});


console.log("Program ends here?");