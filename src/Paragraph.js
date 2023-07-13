import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    console.log('theme')
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Context providers a way
        </p>
    )
}

export default Paragraph;