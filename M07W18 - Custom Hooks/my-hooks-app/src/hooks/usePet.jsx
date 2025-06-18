import { useEffect, useState } from "react"

const usePet = (API_URL, type) => {
    const [petImage, setPetImage] = useState("");

    const fetchPetImage = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        switch(type){
            case "dog": setPetImage(data.message);
                        break;
            case "cat": setPetImage(data[0].url);
                        break;
        }
    }

    useEffect(() => {
        fetchPetImage();
    }, []);

    const loadNewImage = (event) => {
        console.log(event);
        fetchPetImage();
    }

    return [petImage, loadNewImage];
}

export default usePet;