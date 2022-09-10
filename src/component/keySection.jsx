import '../style/key-section.css'
import ButtonCalculator from './buttonCalculator';

const buttonColor = [
    { buttonBgColor: "hsl(30, 25%, 89%)", buttonShadowColor: "hsl(28, 16%, 65%)", buttonSymbolColor: "hsl(198, 20%, 13%)", hoverBg: "white" },
    { buttonBgColor: "hsl(225, 21%, 49%)", buttonShadowColor: "hsl(224, 28%, 35%)", buttonSymbolColor: "white", hoverBg: "rgb(162,179,225)" },
    { buttonBgColor: "hsl(6, 63%, 50%)", buttonShadowColor: "hsl(6, 70%, 34%)", buttonSymbolColor: "white", hoverBg: "rgb(249,108,91)" },
]

const KeySection = ({ click }) => {
    return (
        <div className='key-container'>
            <ButtonCalculator symbol={"7"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"8"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"9"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"Del"} coloring={buttonColor[1]} click={click}/>
            <ButtonCalculator symbol={"4"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"5"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"6"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"+"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"1"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"2"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"3"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"-"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"."} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"0"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"/"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"x"} coloring={buttonColor[0]} click={click}/>
            <ButtonCalculator symbol={"Reset"} spanMore={true} coloring={buttonColor[1]} click={click}/>
            <ButtonCalculator symbol={"="} spanMore={true} coloring={buttonColor[2]} click={click}/>
        </div>
    );
}

export default KeySection