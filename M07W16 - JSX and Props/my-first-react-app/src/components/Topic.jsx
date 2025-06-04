import Instructor from "./Instructor";

const Topic = (props) => {
    console.log(props);
    return(
        <>
            <h2> Topic: {props.title} </h2>
            <p> Number of weeks: {props.weeks} </p>
            <p> Instructors: </p>
            <ul>
                {
                    props.instructors.map((instructor, index) => {
                        return( <Instructor key={"instructor_" + index}
                                            instructorName={instructor}/>)
                    })
                }
            </ul>
        </>
    );
}

export default Topic;