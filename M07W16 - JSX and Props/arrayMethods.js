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

const topicTitles = topics.map((topic) => {
    return topic.title;
});

console.log(topicTitles);