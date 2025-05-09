import { useState } from "react"
import {PASSWORD_CONTENT} from "../../constants/passwordContent"

const PasswordGenerator = () =>{
const [rangeValue, setRangeValue] = useState(4);
const [includeUppercase, setIncludeUppercase] = useState(false);
const [includeLowercase, setIncludeLowercase] = useState(false);
const [includeNumbers, setIncludeNumbers] = useState(false);
const [includeSymbols, setIncludeSymbols] = useState(false);
const allCheckboxs = [includeUppercase, includeLowercase, includeNumbers, includeSymbols];
//value={password} 
//const password = generateAleatoryCharacters

    return <>
    <div>
        <label>
        <input type="text" placeholder="P4$W0RD!" readOnly/>
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

    <button disabled={!toggleCheekerActivateButton(allCheckboxs)}> Generate Password </button>
    </>
}
export default PasswordGenerator

const showRangeValue =  (event, setRangeValue)=> {
    const newValue = event.target.value
    setRangeValue(newValue)
}

const toggleCheekerActivateButton = (allCheckboxs) => {
    return allCheckboxs.some(check => check)
}

const generateAleatoryCharacters = max => {
    return Math.floor(Math.random() * max);
  };
