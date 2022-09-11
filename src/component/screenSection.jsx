import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import '../style/screen-section.css';

const ScreenSection = ({number}) => {
    const theme = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: theme.selectedTheme.id < 2 ? theme.selectedTheme.screenBg : theme.selectedTheme.toggleAndKeypadBg}} className="container-screen">
            <div style={{color: theme.selectedTheme.id ? theme.selectedTheme.fontColor[0] : theme.selectedTheme.fontColor[1]}} className="wrapper-screen">
                <p>{number}</p>
            </div>
        </div>
    );
}

export default ScreenSection