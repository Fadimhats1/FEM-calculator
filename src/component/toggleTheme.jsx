import { useEffect } from 'react';
import { useState } from 'react';
import '../style/toggle-theme.css'

const ToggleTheme = ({ theme }) => {
    return (
        <div style={{
            display: "flex", gap: "2rem", alignItems: "flex-end", fontSize: "14px",
        }}>
            <p>THEME</p>
            <div className="toggle-container">
                <div className="total-theme">
                    <p onClick={(e) =>{ theme.handleTheme(0)
                    document.querySelector('.toggle').style.transform = "translateX(0px)"
                    }}>1</p>
                    <p onClick={(e) =>{ theme.handleTheme(1)
                    document.querySelector('.toggle').style.transform = "translateX(24px)"
                    }}>2</p>
                    <p onClick={(e) =>{ theme.handleTheme(2)
                    document.querySelector('.toggle').style.transform = "translateX(48px)"
                    }}>3</p>
                </div>
                <div style={{ backgroundColor: theme.selectedTheme.toggleAndKeypadBg, position: "relative", overflow: "hidden"}} className='toggle-body'>
                    <button className='button-toggle' onClick={(e) =>{ theme.handleTheme(0)
                    document.querySelector('.toggle').style.transform = "translateX(0px)"
                    }}></button>
                    <button  className='button-toggle' onClick={(e) =>{ theme.handleTheme(1)
                   document.querySelector('.toggle').style.transform = "translateX(24px)"
                    }}></button>
                    <button  className='button-toggle' onClick={(e) =>{ theme.handleTheme(2)
                    document.querySelector('.toggle').style.transform = "translateX(48px)"
                    }}></button>
                    <div className='toggle' style={{ backgroundColor: theme.selectedTheme.buttonColor[2].buttonBgColor, position: "absolute", top: "0.2rem", left:"0.2rem"}}></div>
                </div>
            </div>
        </div>
    );
}

export default ToggleTheme