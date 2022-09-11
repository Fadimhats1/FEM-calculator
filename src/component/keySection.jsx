import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import '../style/key-section.css'
import ButtonCalculator from './buttonCalculator';

const KeySection = ({ click }) => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{backgroundColor: theme.selectedTheme.toggleAndKeypadBg}} className='key-container'>
            <ButtonCalculator symbol={"7"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"8"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"9"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"Del"} coloring={theme.selectedTheme} click={click} kind={1}/>
            <ButtonCalculator symbol={"4"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"5"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"6"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"+"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"1"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"2"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"3"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"-"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"."} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"0"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"/"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"x"} coloring={theme.selectedTheme} click={click} />
            <ButtonCalculator symbol={"Reset"} spanMore={true} coloring={theme.selectedTheme} click={click} kind={1}/>
            <ButtonCalculator symbol={"="} spanMore={true} coloring={theme.selectedTheme} click={click} kind={2}/>
        </div>
    );
}

export default KeySection