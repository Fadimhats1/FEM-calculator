import '../style/calculator.css'
import HeadSection from "./headSection";
import ScreenSection from './screenSection';
import KeySection from './keySection';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import ThemeProvider from '../context/themeContext';
import { ThemeContext } from '../context/themeContext';

const CalculatorWrapper = () => {
    return (
        <ThemeProvider>
            <Calculator />
        </ThemeProvider>
    );
}

const Calculator = () => {
    const theme = useContext(ThemeContext);
    const [currData, setCurrData] = useState('0');
    const [operation, setOperation] = useState(null);
    const [coma, setComa] = useState(0);

    return (
        <div className="calculator-body">
            <Helmet>
                <style>{"body{ background-color: " + theme.selectedTheme.mainBg + "}"}</style>
            </Helmet>
            <HeadSection />
            <ScreenSection number={currData} />
            <KeySection click={keypadHandle} />
        </div>
    );

    function keypadHandle(keypad) {
        if ((Number(keypad) || keypad == '0' || keypad == '-') && ((currData == '0') || ((keypad != '-') && currData.at(currData.length - 1) == '0' && (currData.at(currData.length - 2) == 'x' || currData.at(currData.length - 2) == '/' || currData.at(currData.length - 2) == '+' || currData.at(currData.length - 2) == '-')))) { /* BUAT MASUKIN DATA DARI YANG AWALNYA '0' JADI SUATU NOMOR, TITIK, ATAU KASIH MINUS DIAWAL. DAN JUGA BUAT ANTISIPASI ANGKA NOL SESUDAH OPERASI JADI KEK +07 YANG HARUSNYA JADI 07 */
            console.log("masuk1");
            setCurrData(current => {
                return current.slice(0, current.length - 1).concat(keypad)
            })
        } else if (Number(keypad) || keypad == '0') { /* BUAT MASUKIN ANGKA NORMAL 0 - 9 */
            console.log("masuk2");
            setCurrData(current => current.concat(keypad));
        } else if (keypad == '.' && ((coma == 0) || (coma == 1 && operation)) && (currData.at(currData.length - 1) != 'x' && currData.at(currData.length - 1) != '/' && currData.at(currData.length - 1) != '+' && currData.at(currData.length - 1) != '-')) { /* BUAT NGASIH KOMA */
            console.log("masuk3");
            setCurrData(current => current.concat(keypad));
            setComa(com => com = com + 1);
        } else if ((keypad == 'x' || keypad == '/' || keypad == '+' || keypad == '-') && (!operation || (keypad == '-' && (currData.at(currData.length - 1) == 'x' || currData.at(currData.length - 1) == '/' || currData.at(currData.length - 1) == '+'))) && currData.at(currData.length - 1) != '.') { /* BUAT MASUKIN OPERASI */
            console.log("masuk4");
            if (currData.at(currData.length - 1) != '-')
                setCurrData(current => current.concat(keypad));
            if (operation == null && currData.at(currData.length - 1) != '-')
                setOperation(keypad);
            if (coma == 0) {
                setComa(com => com = com + 1); // biar mengelompokkan koma bagian sebelum operasi dan sesudah operasi
            }
        } else if ((keypad == 'x' || keypad == '/' || keypad == '+') && (currData.at(currData.length - 1) == 'x' || currData.at(currData.length - 1) == '/' || currData.at(currData.length - 1) == '+' || currData.at(currData.length - 1) == '-')) { /* BUAT UBAH OPERASI KEK DARI x TERUS JADI + */
            console.log("masuk5");
            if (currData.at(currData.length - 1) == operation) {
                setCurrData(current => current.slice(0, current.length - 1).concat(keypad));
            } else {
                setCurrData(current => current.slice(0, current.length - 2).concat(keypad + '-'));
            }
            setOperation(keypad);
        } else if (keypad == 'Del' && currData != '0') { /* BUAT HAPUS DATA YANG ADA 1 PER 1 "DELETE" */
            console.log("masuk6");
            if (currData.at(currData.length - 1) == operation) {
                setOperation(null)
            }
            else if (currData.at(currData.length - 1) == '.') {
                setComa(com => com = com - 1)
            }
            if (currData.slice(0, currData.length - 1) == '') {
                setCurrData(current => current = '0')
                setOperation(null)
                setComa(0)
            } else {
                setCurrData(current => current.slice(0, current.length - 1))
            }

        } else if (keypad == 'Reset') { /* BUAT RESET DATA YANG ADA JADI "0" */
            console.log("masuk7");
            setCurrData(current => current = '0')
            setOperation(null)
            setComa(0)
        } else if ((keypad == "=" || keypad == 'x' || keypad == '/' || keypad == '+' || keypad == '-') && operation && (currData.at(currData.length - 1) != 'x' && currData.at(currData.length - 1) != '/' && currData.at(currData.length - 1) != '+' && currData.at(currData.length - 1) != '-')) { /* BUAT NGITUNG MENGGUNAKAN DATA YANG ADA */
            console.log("masuk8");
            let convert = currData.split(operation).filter((d) => d != '');
            let equals = 0;
            let convertBack = '';
            console.log(convert);
            if (operation == '-' && currData.at(0) == '-')
                convert[0] = '-' + convert[0];
            if (operation == 'x') {
                equals = Number(convert[0]) * Number(convert[1])
            } else if (operation == '/') {
                equals = Number(convert[0]) / Number(convert[1])
            } else if (operation == '+') {
                equals = Number(convert[0]) + Number(convert[1])
            } else if (operation == '-') {
                equals = Number(convert[0]) - Number(convert[1])
            }
            equals = Math.round((equals + Number.EPSILON) * 1000) / 1000
            convertBack = equals.toString();
            if (keypad != "=") {
                setOperation(keypad)
                convertBack = convertBack + keypad
            } else {
                setOperation(null)
            }
            if (convertBack.includes('.')) {
                setComa(1)
            } else {
                setComa(0)
            }
            setCurrData(convertBack);
        }

    }
}

export default CalculatorWrapper;