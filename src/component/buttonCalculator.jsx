import '../style/button-calculator.css'


const ButtonCalculator = ({symbol, click, spanMore, coloring, kind = 0}) => {
    return (
        <div onClick={()=> click(symbol)} style={{
            backgroundColor: coloring.buttonColor[kind].buttonBgColor, boxShadow: "0px 4px 0px 0px " + coloring.buttonColor[kind].buttonShadowColor, color: coloring.fontColor[coloring.fontColor.length < 2 ? (kind ? 1 : 0) : (!kind ? 0 : kind < 2 ? 2 : 1)]
        }} className={spanMore ? "button-calculator spanMore" : "button-calculator"} onMouseOver={(e)=>{
            e.target.style.backgroundColor = coloring.buttonColor[kind].hoverBg;
        }} onMouseOut={(e)=>{
            e.target.style.backgroundColor = coloring.buttonColor[kind].buttonBgColor
        }}>
            {symbol}
        </div>
    );
}

export default ButtonCalculator