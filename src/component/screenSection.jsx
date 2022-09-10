import '../style/screen-section.css';

const ScreenSection = ({number}) => {
    return (
        <div className="container-screen">
            <div className="wrapper-screen">
                <p>{number}</p>
            </div>
        </div>
    );
}

export default ScreenSection