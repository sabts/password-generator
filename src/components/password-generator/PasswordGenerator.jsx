import { useState } from "react"
import {PASSWORD_CONTENT} from "../../constants/passwordContent"
import styles from "./passwordgenerator.module.css"

const categories = ['uppercase', 'lowercase', 'numbers', 'symbols']

const PasswordGenerator = () =>{
const [rangeValue, setRangeValue] = useState(4);
const [includeUppercase, setIncludeUppercase] = useState(false);
const [includeLowercase, setIncludeLowercase] = useState(false);
const [includeNumbers, setIncludeNumbers] = useState(false);
const [includeSymbols, setIncludeSymbols] = useState(false);
const allCheckboxs = [includeUppercase, includeLowercase, includeNumbers, includeSymbols];
const [password, setPassword] = useState('');
//const generatedpassword = passwordGenerator(toggleContentinPassword)
let passwordAllowedChar = "";
    return <main className={styles["container"]}>
    <div>
        <label>
        <input type="text" placeholder="P4$W0RD!" value={password} readOnly/>
        </label>
    </div>
    <div>
        <label>
        LENGTH:{rangeValue} <input type="range"  min="4" max="32" value={rangeValue} onInput={(e)=> showRangeValue(e, setRangeValue)}/>
        </label>
    </div>
    <div> 
        <span>Include Uppercase</span>
        <label>
        <input type="checkbox"
         checked={includeUppercase}
         onChange={() => setIncludeUppercase(!includeUppercase)}/>
        </label>
        </div>
       
    <div>
        <span>Include Lowercase</span>
        <label>
        <input type="checkbox"
        checked={includeLowercase}
        onChange={() => setIncludeLowercase(!includeLowercase)}/>
        </label> 
    </div>
           
    <div>  
        <span>Include Numbers</span>
        <label>
        <input type="checkbox"
        checked={includeNumbers}
        onChange={() => setIncludeNumbers(!includeNumbers)}/>
        </label>
    </div>

    <div> 
        <span>Include Symbols</span>
        <label>
        <input type="checkbox"
        checked={includeSymbols}
        onChange={() => setIncludeSymbols(!includeSymbols)}/>
        </label> 
        </div>

    <button onClick={() => passwordGenerator(allCheckboxs, rangeValue, setPassword)} disabled={!toggleCheekerActivateButton(allCheckboxs)}> Generate Password </button>
    </main>
}

const showRangeValue =  (event, setRangeValue)=> {
    const newValue = event.target.value
    setRangeValue(newValue)
}

const toggleCheekerActivateButton = (allCheckboxs) => {
    return allCheckboxs.some(check => check)
}

const toggleContentinPassword = (allCheckboxs,password) => {
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

    categories.forEach((category => {
        const chars = PASSWORD_CONTENT[category];
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        generatedPassword += randomChar;
    } ))

    while (generatedPassword.length < rangeValue) {
        const randomChar = passwordAllowedChar[Math.floor(Math.random() * passwordAllowedChar.length)];
        generatedPassword += randomChar;
    }

    setPassword(generatedPassword)
};

export default PasswordGenerator