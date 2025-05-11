import { useState } from "react"
import {PASSWORD_CONTENT} from "../../constants/passwordContent"
import styles from "./passwordgenerator.module.css"

const categories = ['uppercase', 'lowercase', 'numbers', 'symbols']

const PasswordGenerator = () =>{
    //styles

    //states
const [rangeValue, setRangeValue] = useState(4);
const [includeUppercase, setIncludeUppercase] = useState(false);
const [includeLowercase, setIncludeLowercase] = useState(false);
const [includeNumbers, setIncludeNumbers] = useState(false);
const [includeSymbols, setIncludeSymbols] = useState(false);
const allCheckboxs = [includeUppercase, includeLowercase, includeNumbers, includeSymbols];
const [password, setPassword] = useState('');
let passwordAllowedChar = "";

    return <main className={styles["container"]}>
    <div>
        <label>
        <input type="text" placeholder="P4$W0RD!" value={password} readOnly className={styles['input-text-type']}/>
        </label>
    </div>
    <div className={styles["range-container"]}>
        <label>
        LENGTH:{rangeValue} <input type="range"  min="4" max="32" value={rangeValue} onInput={(e)=> showRangeValue(e, setRangeValue)} className={styles["input-range"]}/>
        </label>
    </div>
    <div className={styles["toggle-option-box"]}> 
        <span>Include Uppercase</span>
        <input id="uppercase" type="checkbox"
         checked={includeUppercase}
         onChange={() => setIncludeUppercase(!includeUppercase)}
         className={styles['input-toggle']}/>
        <label htmlFor="uppercase" className={styles['label-checkbox']}> </label>
        </div>
       
    <div className={styles["toggle-option-box"]}>
        <span>Include Lowercase</span>
        <input id="lowercase" type="checkbox"
        checked={includeLowercase}
        onChange={() => setIncludeLowercase(!includeLowercase)}
        className={styles['input-toggle']}/>
       <label htmlFor="lowercase" className={styles['label-checkbox']}>  </label> 
    </div>
           
    <div className={styles["toggle-option-box"]}>  
        <span>Include Numbers</span>
        <input id="numbers" type="checkbox"
        checked={includeNumbers}
        onChange={() => setIncludeNumbers(!includeNumbers)}
        className={styles['input-toggle']}/>
        <label htmlFor="numbers" className={styles['label-checkbox']}> </label>
    </div>

    <div className={styles["toggle-option-box"]}> 
        <span>Include Symbols</span>
        <input id="symbols" type="checkbox"
        checked={includeSymbols}
        onChange={() => setIncludeSymbols(!includeSymbols)}
        className={styles['input-toggle']}/>
         <label htmlFor="symbols" className={styles['label-checkbox']}> </label> 
        </div>

    <button onClick={() => passwordGenerator(allCheckboxs, rangeValue, setPassword)} disabled={!toggleCheekerActivateButton(allCheckboxs)} className={styles["button-default"]}> Generate Password </button>
    </main>
}

const showRangeValue =  (event, setRangeValue)=> {
    const newValue = event.target.value
    setRangeValue(newValue)
}

const toggleCheekerActivateButton = (allCheckboxs) => {
    return allCheckboxs.some(check => check)
}

const toggleContentinPassword = (allCheckboxs) => {
    let passwordAllowedChar = '';
  
    categories.forEach((category, index) => {
      if (allCheckboxs[index]) {
        passwordAllowedChar += PASSWORD_CONTENT[category];
      }
    });
  
    return passwordAllowedChar;
}

const passwordGenerator = (allCheckboxs, rangeValue, setPassword) => {
    const passwordAllowedChar = toggleContentinPassword(allCheckboxs);
    let generatedPassword = '';

    categories.forEach((category, i) => {
        if (allCheckboxs[i]) {
            const chars = PASSWORD_CONTENT[category];
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            generatedPassword += randomChar;
        }
    });

   while (generatedPassword.length < rangeValue) {
        const randomChar = passwordAllowedChar[Math.floor(Math.random() * passwordAllowedChar.length)];
        generatedPassword += randomChar;
    }

    setPassword(generatedPassword)
};

export default PasswordGenerator