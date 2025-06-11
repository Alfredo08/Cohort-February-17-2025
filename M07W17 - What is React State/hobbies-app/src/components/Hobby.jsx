/*
    props = {
        hobby: {
            name,
            userId
        },
        updateAge = f(),
        age
    }
*/
const Hobby = ({hobby, age, updateAge}) => {
    return(
        <>
            <li>
                {hobby.name}
            </li>
            {/*
                <button onClick={() => updateAge(age - 2)}>
                    Update age
                </button> 
            */}
        </>
    );
}

export default Hobby;