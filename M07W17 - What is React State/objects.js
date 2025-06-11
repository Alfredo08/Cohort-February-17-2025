

const info = {
    firstName: "Alex",
    lastName: "Miller"
}

const key = "age";

const infoCopy = {
    ...info,
    [key] : 25
}

console.log(infoCopy);