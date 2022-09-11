import ToggleTheme from "./toggleTheme";
import '../style/head-section.css'
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const HeadSection = () =>{
    const theme = useContext(ThemeContext);
    return (
        <div className="head-container" style={{color: theme.selectedTheme.id ? theme.selectedTheme.fontColor[0] : theme.selectedTheme.fontColor[1]}}>
            <p>calc</p>
            <ToggleTheme theme={theme}/>
        </div>
    );
}


export default HeadSection