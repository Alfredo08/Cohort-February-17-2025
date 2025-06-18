import usePet from "../hooks/usePet"

const Pet = ({API_URL, type}) => {

    const [petImage, loadNewImage] = usePet(API_URL, type);

    return(
        <>
            <h2> API about {type} images </h2>
            <div>
                <img src={petImage} alt={`An image of a ${type}`} />
            </div>
            <button onClick={loadNewImage}>
                New Image
            </button>
        </>
    );
}

export default Pet;