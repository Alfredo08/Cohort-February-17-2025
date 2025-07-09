import { createContext } from "react";

const AppContext = createContext({
    message: "",
    updateCounter: () => {}
});

export default AppContext;