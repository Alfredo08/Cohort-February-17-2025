import { useEffect, useState } from "react"

const useMouseMove = () => {
    const [coordinates, setCoordinates] = useState({x: 0, y: 0});

    const handleMouse = (event) => {
        console.log(event);
        const newCoordinates = {
            x: event.x,
            y: event.y
        };
        setCoordinates(newCoordinates);
    }

    useEffect(() => {
        console.log("Effect triggered");
        document.addEventListener("mousemove", handleMouse);
        return () => {
            // Unmounting and cleaning up the event so that it doesn't duplicates
            document.removeEventListener("mousemove", handleMouse);
        }
    }, [coordinates]);

    return [coordinates];
}

export default useMouseMove;