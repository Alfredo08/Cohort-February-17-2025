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

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/topics", (req,res) => {
    const templateVariables = {
        topics: topics,
        title: "The list of topic codes"
    }

    res.render("topics", templateVariables);
});

app.get("/topic/:code", (req, res) => {
    const foundTopic = topics.find((topic) => topic.code === req.params.code);
    
    const templateVariables = {}

    if(!foundTopic){
        templateVariables.error = true;
        templateVariables.message = `This code (${req.params.code}) doesn't exist in our data set.`

    }
    else{
        templateVariables.error = false,
        templateVariables.topic = foundTopic;
    }

    res.render("detail", templateVariables);
});

app.listen(8080, () => {
    console.log("Server running in port 8080");
});