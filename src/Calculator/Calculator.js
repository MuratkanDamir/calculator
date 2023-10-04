import { useState } from "react";
import styles from "./Calculator.module.css";

function Calculator(){

    const [displayValue, setValue] = useState("")
    function addNine(){
        setValue(displayValue+"9");
    }
    function addEight(){
        setValue(displayValue+"8");
    }
    function addSeven(){
        setValue(displayValue+"7");
    }
    function addSix(){
        setValue(displayValue+"6");
    }
    function addFive(){
        setValue(displayValue+"5");
    }
    function addFour(){
        setValue(displayValue+"4");
    }
    function addThree(){
        setValue(displayValue+"3");
    }
    function addTwo(){
        setValue(displayValue+"2");
    }
    function addOne(){
        setValue(displayValue+"1");
    }
    function addZero(){
        setValue(displayValue+"0");
    }
    function addPoint(){
        setValue(displayValue+".");
    }

    

    function addPlus(){
        setValue(displayValue+"+");
    }
    function addMinus(){
        setValue(displayValue+"-")
    }
    function addMultiply(){
        setValue(displayValue+"*")
    }
    function addDivide(){
        setValue(displayValue+"/")
    }
    
    function resetAll(){
        setValue("");
    }
    
    function deleteLast(){
        // let res = displayValue == "" ? displayValue : displayValue.slice(0,-1);
        // setValue(res);
        let res = displayValue.slice(0,-1);
        setValue(res);
    }

    function calcAll(){
        try {
            let result = displayValue == ""?"":eval(displayValue);
            console.log(result);
            setValue(String(result));
        } catch (err) {
            setValue(displayValue);
        }
    }

    
    return (
        <div className={styles.main}>
            <div className={styles.input}>
                <div className={styles.display}>{displayValue}</div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.left}>
                   <div className={styles.calc}>
                        <button onClick={deleteLast}>del</button>
                        <button onClick={resetAll}>c</button>
                        <button onClick={calcAll}>=</button>
                    </div>
                    <div className={styles.numbers}>
                        <button onClick={addSeven}>7</button>
                        <button onClick={addEight}>8</button>
                        <button onClick={addNine}>9</button>
                        <button onClick={addFour}>4</button>
                        <button onClick={addFive}>5</button>
                        <button onClick={addSix}>6</button>
                        <button onClick={addOne}>1</button>
                        <button onClick={addTwo}>2</button>
                        <button onClick={addThree}>3</button>
                        <button onClick={addZero}>0</button>
                        <button onClick={addPoint}>.</button>
                    </div> 
                </div>
                <div className={styles.right}>
                    <div className={styles.operations}>
                        <button onClick={addPlus}>+</button>
                        <button onClick={addMinus}>-</button>
                        <button onClick={addMultiply}>*</button>
                        <button onClick={addDivide}>/</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;