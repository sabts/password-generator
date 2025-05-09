import { useState } from "react"

const PasswordGenerator = () =>{
const [rangeValue, setRangeValue] = useState(0)

    return <>
    <div>
        <label>
        <input type="text"/>
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
        <input type="checkbox"/>
        </label>
        </div>
       
    <div>
        <span>Include Lowercase</span>
        <label>
        <input type="checkbox"/>
        </label> 
    </div>
           
    <div>  
        <span>Include Numbers</span>
        <label>
        <input type="checkbox"/>
        </label>
    </div>

    <div> 
        <span>Include Symbols</span>
        <label>
        <input type="checkbox"/>
        </label> 
        </div>

    <button disabled> Generate Password </button>
    </>
}
export default PasswordGenerator

const showRangeValue =  (event, setRangeValue)=> {
    const newValue = event.target.value
    setRangeValue(newValue)
}