const express = require("express");
const app = express();

const topics = [
    {
        name: "JavaScript fundamentals",
        code: "JS-01"
    },
    {
        name: "Mocha and Chai",
        code: "TS-01"
    },
    {
        name: "Express",
        code: "JS-02"
    }
];

const middleMan = (req, res, next) => {
    console.log("The middle man is checking the code before moving on!");
    // res.status(401).json("You are not authorized to see this info!")
    next();
}

// Common middlewares:
app.use(express.urlencoded({ extended: true })); // Accept info coming from forms
app.use(express.json()); // Acept info coming in the BODY of the request
app.use(middleMan);

app.get('/home', (req, res) => {
    console.log("Reaching home");
    res.send("Hey there, this is a message from express /home route!");
});

app.get('/topics', (req, res) => {
    console.log("This happens after the middleware");
    res.status(200).json(topics);
});

// http://localhost:8080/topic/JS-02
app.get('/topic/:code', (req, res) => {
    console.log("This happens after the middleware");
    const foundTopic = topics.find((topic) => topic.code === req.params.code);
    if(!foundTopic){
        res.status(404).json({message:"This code doesn't exist in our data set."})
    }
    res.json(foundTopic);
});


app.listen(8080, () => {
    console.log("This server is running in port 8080.");
});