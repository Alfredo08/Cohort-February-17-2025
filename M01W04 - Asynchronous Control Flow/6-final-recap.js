
const highOrderFunction = function(callback){
    const data = {
        fullName: "Alex Miller",
        initials: "AM"
    }
    console.log(1, data); // 2

    const timeOutData = setTimeout(() => {
        console.log(2); // 6
        data.initials = "RA";
        data.fullName = "Roger Anderson";
        callback(); 
        console.log(3, data); // 8
    }, 0);

    console.log(4, timeOutData); // 3
    console.log(5); // 4
}
console.log(6); // 1

highOrderFunction(() => {
    console.log(7, "Inside the callback"); // 7
});
console.log(8); // 5