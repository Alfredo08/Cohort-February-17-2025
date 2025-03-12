console.log("Program begins here!");
let num = 1;
let pageButton = document.querySelectorAll('button');

for(let i = 0; i < pageButton.length; i ++){
    pageButton[i].addEventListener('click', (event) => {
        console.log(event.target);
        console.log("This is amazing, isn't it?", num);
        num ++;
    });
}



console.log("Program ends here?");