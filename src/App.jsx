import React, { useContext } from 'react'
import ThemeProvider, { ThemeContext } from './context/themeContext'
import Calculator from './component/calculator'
import './App.css'

const App = () => {
    const theme = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.selectedTheme.mainBg }} className='body'>
            <Calculator />
        </div>
    )
}

const AppWrapper = () => {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    )
}

export default AppWrapper