import './App.css';
import React from 'react';
import Student from './components/Student';
import StudentForm from './components/StudentForm';

class App extends React.Component{
  constructor(props){
    super(props);
    // this.updateCounter = this.updateCounter.bind(this);
    this.state = {
      students: [{
        firstName: "Alex",
        lastName: "Miller",
        age: 25
      },
      {
        firstName: "Martha",
        lastName: "Smith",
        age: 28
      },
      {
        firstName: "Roger",
        lastName: "Anderson",
        age: 23
      }],
      counter: 0,
      counterTwo: 0,
      listOfNews: []
    }
  }

  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
      counterTwo: this.state.counterTwo - 1
    });
  }

  addNewStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent]
    });
  }

  // useEffect(() => {}, []) 
  componentDidMount = () => {
    console.log("This triggers only once, when App finishes rendering the JSX");
  }

  // Triggers when you leave the component
  componentWillUnmount = () => {}

  fetchNews = async () => {
    let URL = "URL_TO_NEWS_APP";
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({
      listOfNews: data
    });
  }

  render = () => {
    console.log("JSX is about to render.")
    return(
      <>
        <h1> Class based components demonstration </h1>
        {
          this.state.students.map((student, index) => {
            return(<Student key={index}
                            firstName={student.firstName}
                            lastName={student.lastName}
                            age={student.age} />)
          })
        }
        <h2> Counter: {this.state.counter} </h2>
        <h2> Counter 2: {this.state.counterTwo} </h2>
        <button onClick={this.updateCounter}>
          Update counters
        </button>
        <StudentForm addNewStudent={this.addNewStudent}/>
        
      </>
    )
  }
}

/*
  Inherited methods from React.Component
  1) this.state
  2) this.render()
  3) this.componentDidMount
  4) this.componentDidUnmount()

  0) this.setState()

*/

export default App;
