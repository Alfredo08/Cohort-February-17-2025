import { useParams } from "react-router-dom";

const ParamComponent = () => {
    const params = useParams()
    console.log(params);
    return (
        <>
            <h2> Parameters in the URL: </h2>
            <ul>
                <li> Identifier: {params.identifier} </li>
                <li> Full name: {params.firstName} {params.lastName} </li>
            </ul>
        </>
    );
}

export default ParamComponent;