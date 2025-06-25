const person = {
    firstName: "Julie",
    lastName: "Smith",
    age: 25,
    printInfo: function(){
        console.log(this.firstName, this.lastName, this.age)
    }
};


class Person{
    constructor(firstName, lastName, age){
        // Attributes
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printInformation = () => {
        console.log("Full name", this.firstName, this.lastName);
        console.log("Age", this.age);
    }

    printWelcomeMessage = () => {
        console.log("Hello there, welcome to the review of classes and objects.");
        this.printInformation();
    }
}

class Student extends Person{
    constructor(fN, lN, age, course){
        super(fN, lN, age);
        this.course = course;
    }

    printStudentInformation = () => {
        this.printWelcomeMessage();
        console.log("Course", this.course);
    }
}

const alex = new Person("Alex", "Miller", 25);
const martha = new Person("Martha", "Smith", 28);
const roger = new Student("Roger", "Anderson", 23, "Web Fundamentals");

roger.printStudentInformation();
// alex.printWelcomeMessage();
// martha.printWelcomeMessage();

person.printInfo();