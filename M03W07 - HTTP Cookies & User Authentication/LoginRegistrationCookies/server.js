const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Simulating our database
const listOfUsers = {
    'alex@miller.com' : {
        firstName: 'Alex',
        lastName: 'Miller',
        password: 'password1234'
    },
    'martha@smith.com' : {
        firstName: 'Martha',
        lastName: 'Smith',
        password: 'secret1234'
    }
};

// Setting our view engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Endpoints
app.get('/register', (req, res) => {
    return res.render('registration');
});

app.get('/login', (req, res) => {
    return res.render('login');
});

app.get('/home', (req, res) => {
    if(!req.cookies.email){
        console.log("You are not allowed to view this page yet!");
        return res.redirect('/login');
    }
    const templateVars = {
        firstName: req.cookies.firstName,
        lastName: req.cookies.lastName
    }

    return res.render('home', templateVars);
});

app.post('/create/user', (req, res) => {
    const email = req.body.email;
    if(email in listOfUsers){ // if(listOfUsers[email])
        return res.status(400).send(`
                <h1> This email already exists, try a different one </h1>
                <a href="/register"> Go back to registration form </a>
            `);
    }
    // Add user to database
    listOfUsers[email] = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    // Add user to cookies
    res.cookie('email', email);
    res.cookie('firstName', req.body.firstName);
    res.cookie('lastName', req.body.lastName);

    console.log(listOfUsers);
    // Redirect to a home page
    return res.redirect('/home');
});

app.post('/process/login', (req, res) => {
    const {email, password} = req.body;

    // Validate if the email exists in the dataset
    if(! listOfUsers[email]){
        return res.status(404).send(`
                <h1> This email is not in our data set </h1>
                <a href="/login"> Attempt login again </a>
            `);
    }

    // Validate if password matches the user email's
    if(listOfUsers[email].password !== password){
        return res.status(404).send(`
            <h1> Wrong credentials </h1>
            <a href="/login"> Attempt login again </a>
        `);
    }

    // Add user to cookies
    res.cookie('email', email);
    res.cookie('firstName', listOfUsers[email].firstName);
    res.cookie('lastName', listOfUsers[email].lastName);

    return res.redirect('/home');
});

app.post('/logout', (req, res) => {
    res.clearCookie('email');
    res.clearCookie('firstName');
    res.clearCookie('lastName');
    return res.redirect('/login');
});

app.listen(8080, () => {
    console.log("Server running in port 8080.");
});
