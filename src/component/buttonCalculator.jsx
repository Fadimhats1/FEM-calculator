import '../style/button-calculator.css'


const ButtonCalculator = ({symbol, click, spanMore, coloring}) => {
    return (
        <div onClick={()=> click(symbol)} style={{
            backgroundColor: coloring.buttonBgColor, boxShadow: "0px 4px 0px 0px " + coloring.buttonShadowColor, color: coloring.buttonSymbolColor
        }} className={spanMore ? "button-calculator spanMore" : "button-calculator"} onMouseOver={(e)=>{
            e.target.style.backgroundColor = coloring.hoverBg;
        }} onMouseOut={(e)=>{
            e.target.style.backgroundColor = coloring.buttonBgColor
        }}>
            {symbol}
        </div>
    );
}

export default ButtonCalculator