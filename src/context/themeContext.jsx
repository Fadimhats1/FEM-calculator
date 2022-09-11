import React, { createContext, useEffect, useState } from 'react'
import { Context } from 'react'

export const ThemeContext = createContext();

const themeInitialData = [{
    id: 0,
    mainBg: "hsl(222, 26%, 31%)",
    toggleAndKeypadBg: "hsl(223, 31%, 20%)",
    screenBg: "hsl(224, 36%, 15%)",
    fontColor: ["hsl(221, 14%, 31%)", "white"],
    buttonColor: [
        { buttonBgColor: "hsl(30, 25%, 89%)", buttonShadowColor: "hsl(28, 16%, 65%)", hoverBg: "white" },
        { buttonBgColor: "hsl(225, 21%, 49%)", buttonShadowColor: "hsl(224, 28%, 35%)", hoverBg: "rgb(162,179,225)" },
        { buttonBgColor: "hsl(6, 63%, 50%)", buttonShadowColor: "hsl(6, 70%, 34%)", hoverBg: "rgb(249,108,91)" },
    ]
}, {
    id: 1,
    mainBg: "hsl(0, 0%, 90%)",
    toggleAndKeypadBg: "hsl(0, 5%, 81%)",
    screenBg: "hsl(0, 0%, 93%)",
    fontColor: ["hsl(60, 10%, 19%)","white"],
    buttonColor: [
        { buttonBgColor: "hsl(45, 7%, 89%)", buttonShadowColor: "hsl(35, 11%, 61%)", hoverBg: "white" },
        { buttonBgColor: "hsl(185, 42%, 37%)", buttonShadowColor: "hsl(185, 58%, 25%)", hoverBg: "rgb(97,183,190)" },
        { buttonBgColor: "hsl(25, 98%, 40%)", buttonShadowColor: "hsl(25, 99%, 27%)", hoverBg: "rgb(255,139,56)" },
    ],
}, {
    id: 2,
    mainBg: "hsl(268, 75%, 9%)",
    toggleAndKeypadBg: "hsl(268, 71%, 12%)",
    fontColor: ["hsl(52, 100%, 62%)", "hsl(198, 20%, 13%)", "white"],
    buttonColor: [
        { buttonBgColor: "hsl(268, 47%, 21%)", buttonShadowColor: "hsl(290, 70%, 36%)", hoverBg: "rgb(107,52,172)" },
        { buttonBgColor: "hsl(281, 89%, 26%)", buttonShadowColor: "hsl(285, 91%, 52%)", hoverBg: "rgb(134,49,176)" },
        { buttonBgColor: "hsl(176, 100%, 44%)", buttonShadowColor: "hsl(177, 92%, 70%)", hoverBg: "rgb(148,255,249)" },
    ]
}]


const ThemeProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(themeInitialData[0])

    function handleTheme(number){
        setSelectedTheme(themeInitialData[number]);
    }
    return (
        <ThemeContext.Provider value={{selectedTheme, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider