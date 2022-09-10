import '../style/toggle-theme.css'

const ToggleTheme = () => {
    return (
        <div style={{
            display: "flex", gap: "2rem", alignItems: "flex-end", fontSize: "14px",
        }}>
            <p>THEME</p>
            <div className="toggle-container">
                <div className="total-theme">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <div className='toogle-body' onClick={(e)=>{
                    let rect = e.target.getBoundingClientRect();
                    let currPos = 0;
                    if(e.clientX - rect.left >= 0 && e.clientX - rect.left <= 24){
                        e.target.querySelector('.toogle').style.transform = `translateX(${currPos = 0}px)`
                    }else if(e.clientX - rect.left >= 24 && e.clientX - rect.left <= 48){
                        e.target.querySelector('.toogle').style.transform = `translateX(${currPos = 24}px)`
                    }else{
                        e.target.querySelector('.toogle').style.transform = `translateX(${currPos = 48}px)`
                    }
                    

                }}>
                    <div className='toogle'></div>
                </div>
            </div>
        </div>
    );
}

export default ToggleTheme