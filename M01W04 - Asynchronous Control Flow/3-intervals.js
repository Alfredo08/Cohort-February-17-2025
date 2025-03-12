
let num = 1;

let timer = setInterval(() => {
    console.log(`Hello, the timer is at: ${num}`);
    num ++;

    if(num > 10){
        clearInterval(timer);
    }
}, 1000);

console.log("This executes first!");