import '../style/calculator.css'
import HeadSection from "./headSection";
import ScreenSection from './screenSection';
import KeySection from './keySection';
import { useState } from 'react';
const Calculator = () => {
    const [currData, setCurrData] = useState('0');
    const [operation, setOperation] = useState(null);
    const [coma, setComa] = useState(0);

    const formatter = new Intl.NumberFormat('en-UK', { maximumFractionDigits: 10 });
    
    let currentData = currData;
    let res = '';
    return (
        <div className="calculator-body">
            <HeadSection />
            <ScreenSection number={currData} />
            <KeySection click={keypadHandle} />
        </div>
    );
    function filterFormatter(number) {
        let filterCurrData = number.split(',').filter((d) => d != '');
        let filtered = '';
        filterCurrData.forEach((e) => {
            filtered += e;
        })
        return filtered;
    }
    function formatComa(number) {
        let filterComa = number.split('.').filter((d) => d != '');
        let filtered = formatter.format(filterComa[0]) + '.';
        if (filterComa.length > 1) {
            filtered += filterComa[1]
        }
        return filtered
    }
    function keypadHandle(keypad) {
        
        if (currentData.includes(',')) {
            console.log("masuk0");
            currentData = filterFormatter(currentData);
            console.log(currentData);
        }
        if ((Number(keypad) || keypad == '0' || keypad == '-') && ((currentData == '0') || ((keypad != '-') && currentData.at(currentData.length - 1) == '0' && (currentData.at(currentData.length - 2) == 'x' || currentData.at(currentData.length - 2) == '/' || currentData.at(currentData.length - 2) == '+' || currentData.at(currentData.length - 2) == '-')))) { /* BUAT MASUKIN DATA DARI YANG AWALNYA '0' JADI SUATU NOMOR, TITIK, ATAU KASIH MINUS DIAWAL. DAN JUGA BUAT ANTISIPASI ANGKA NOL SESUDAH OPERASI JADI KEK +07 YANG HARUSNYA JADI 07 */
            console.log("masuk1");
            if (currentData == '0' && keypad == '-') {
                res = currentData.slice(0, currentData.length - 1).concat(keypad);
            } else {
                res = formatter.format(currentData.slice(0, currentData.length - 1).concat(keypad))
            }
            setCurrData(res)
        } else if (Number(keypad) || keypad == '0') { /* BUAT MASUKIN ANGKA NORMAL 0 - 9 */
            console.log("masuk2");
            if (operation && currentData.at(currentData.length - 1) != operation) {
                let tempNumber = currentData.split(operation).filter((d) => d != '');
                tempNumber[1] += keypad;
                tempNumber[0] = formatter.format(tempNumber[0]);
                if (coma == 2) {
                    tempNumber[1] = formatComa(tempNumber[1]);
                } else {
                    tempNumber[1] = formatter.format(tempNumber[1]);
                }
                res = tempNumber[0] + operation + tempNumber[1];
                setCurrData(res);
            } else if (operation && currentData.at(currentData.length - 1) == operation) {
                let tempNumber = currentData.split(operation).filter((d) => d != '').map((data) => formatter.format(data));
                res = tempNumber[0] + operation + formatter.format(keypad);
                setCurrData(res);
            }
            else {
                if (coma) {
                    let filtered = formatComa(currentData);
                    res = filtered += keypad;
                }else{
                    res = formatter.format(currentData.concat(keypad));
                }
                setCurrData(res);
            }
        } else if (keypad == '.' && ((coma == 0) || (coma == 1 && operation)) && (currentData.at(currentData.length - 1) != 'x' && currentData.at(currentData.length - 1) != '/' && currentData.at(currentData.length - 1) != '+' && currentData.at(currentData.length - 1) != '-')) { /* BUAT NGASIH KOMA */
            console.log("masuk3");
            let tempNumber = currentData.split(operation).filter((d) => d != '');
            tempNumber[0] = formatter.format(tempNumber[0])
            if (coma == 0) {
                res = tempNumber[0].concat(keypad);
            }else{
                tempNumber[1] = formatter.format(tempNumber[1]).concat(keypad);
                res = tempNumber[0] + operation + tempNumber[1];
            }
            setCurrData(res);
            setComa(com => com = com + 1);
        } else if ((keypad == 'x' || keypad == '/' || keypad == '+' || keypad == '-') && (!operation || (keypad == '-' && (currentData.at(currentData.length - 1) == 'x' || currentData.at(currentData.length - 1) == '/' || currentData.at(currentData.length - 1) == '+'))) && currentData.at(currentData.length - 1) != '.') { /* BUAT MASUKIN OPERASI */
            console.log("masuk4");
            if (currentData.at(currentData.length - 1) != '-') {
                let filtered = currentData.split(operation).filter((d) => d != '').map((data) => formatter.format(data));
                if (operation) {
                    filtered[0] += operation;
                }
                res = filtered[0] + keypad;
                setCurrData(res);
            }
            if (operation == null && currentData.at(currentData.length - 1) != '-') {
                setOperation(keypad);
            }
            if (coma == 0) {
                setComa(com => com = com + 1); // biar mengelompokkan koma bagian sebelum operasi dan sesudah operasi
            }
        } else if ((keypad == 'x' || keypad == '/' || keypad == '+') && (operation && (currentData.at(currentData.length - 1) == 'x' || currentData.at(currentData.length - 1) == '/' || currentData.at(currentData.length - 1) == '+' || currentData.at(currentData.length - 1) == '-'))) { /* BUAT UBAH OPERASI KEK DARI x TERUS JADI + */
            console.log("masuk5");
            if (currentData.at(currentData.length - 1) == operation) {
                if(currentData.includes('.'))
                    res = formatComa(currentData.slice(0, currentData.length - 1)).concat(keypad)
                else
                    res = formatter.format(currentData.slice(0, currentData.length - 1)).concat(keypad);
            } else {
                if(currentData.includes('.'))
                    res = formatComa(currentData.slice(0, currentData.length - 2)).concat(keypad + '-')
                else
                    res = formatter.format(currentData.slice(0, currentData.length - 2)).concat(keypad + '-');
            }
            setCurrData(res);
            setOperation(keypad);
        } else if (keypad == 'Del' && currentData != '0') { /* BUAT HAPUS DATA YANG ADA 1 PER 1 "DELETE" */
            console.log("masuk6");
            if (currentData.at(currentData.length - 1) == operation) {
                setOperation(null)
                if(currentData.includes('.')){
                    setComa(1)
                }else{
                    setComa(0)
                }
            }
            else if (currentData.at(currentData.length - 1) == '.') {
                setComa(com => com = com - 1)
            }
            if (currentData.slice(0, currentData.length - 1) == '') {
                res = '0';
                setOperation(null)
                setComa(0)
            } else {
                let current = currentData.slice(0, currentData.length - 1);
                let filtered = current.split(operation).filter((d) => d != '').map((data, index) =>{
                    res += formatter.format(data) != 'NaN' ? data.includes('.') ? formatComa(data) : formatter.format(data) : data; 
                    if((operation && current.includes(operation))  && index != 1){
                        res += operation
                    }
                } );
            }
            setCurrData(res);

        } else if (keypad == 'Reset') { /* BUAT RESET DATA YANG ADA JADI "0" */
            console.log("masuk7");
            setCurrData(current => current = '0')
            setOperation(null)
            setComa(0)
        } else if ((keypad == "=" || keypad == 'x' || keypad == '/' || keypad == '+' || keypad == '-') && operation && (currentData.at(currentData.length - 1) != 'x' && currentData.at(currentData.length - 1) != '/' && currentData.at(currentData.length - 1) != '+' && currentData.at(currentData.length - 1) != '-')) { /* BUAT NGITUNG MENGGUNAKAN DATA YANG ADA */
            console.log("masuk8");
            let convert = currentData.split(operation).filter((d) => d != '');
            let equals = 0;
            let convertBack = '';
            console.log(convert);
            if (operation == '-' && currentData.at(0) == '-')
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
            convertBack = formatter.format(equals.toString());
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

export default Calculator;