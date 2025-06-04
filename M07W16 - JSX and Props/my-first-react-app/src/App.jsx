import './App.css'
import Topic from './components/Topic';

const App = () => {
  const fullName = "Alex Miller";
  const names = ["Alex", "Martha", "Julie", "Roger"];
  const myInfo = {
    firstName: "Alex",
    lastName: "Miller",
    age: 30
  }

  const printHello = () => {
    console.log("Hey there!");
  }

  const topics = [{
    title: "SQL",
    weeks: 2,
    instructors: ["Andy", "Duy", "Alfredo"]
  },
  {
    title: "React",
    weeks: 4,
    instructors: ["Andy", "Warren", "Vincent", "Alfredo"]
  },
  {
    title: "Ruby",
    weeks: 4,
    instructors: ["Pedro", "Warren", "Alfredo"]
  },
  {
    title: "CSS",
    weeks: 4,
    instructors: ["Andy", "Vincent", "Pedro", "Warren", "Alfredo"]
  }];

  let templateString = (
    <div>
      {fullName}
    </div>
  );

  return (
    <>
      <h1> Welcome back {fullName}. React is fun! </h1>
     
      {templateString}
     
      <p> Reusing code is a core methodology of React </p>
      <p> Names: {names} </p>
      <p> Fullname: {myInfo.firstName} {myInfo.lastName} </p>
      <p> Age: {myInfo.age} </p>
  
      <h2> Topics </h2>
      {
        topics.map((topic, index) => {
          return(<Topic title={topic.title}
                        weeks={topic.weeks}
                        instructors={topic.instructors}
                        key={"topic_" + index}/>)
        })
      }
    </>
  )
}

export default App
