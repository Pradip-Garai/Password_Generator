import React, { useState } from 'react'
import "./style.css"

function PasswordGenerator() {
  
  const [password,setPassword] = useState("AWSERDGFNB");
  const [length,setLength] = useState(10);
  const [chnageNumber,setChnageNumber] = useState(false);
  const [chnagecharacter,setChnagecharacter] = useState(false);

  let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const generator = ()=>{
    if(chnageNumber)
        str+="0123456789"
    if(chnagecharacter)
        str+="!@#$%^&*()_+="

    let newPassword = ""
    // generate pasword till length
    for(let i=0;i<length;i++){
       newPassword+= str[Math.floor(Math.random()*str.length)];
    }
    setPassword(newPassword);

  }

  return <>
    
    <h1>Password Generator</h1>
    <div className='container'>
    <h2>Password : {password}</h2>

    <div className='inputs'>
        <div className="range-container">
            <input type='range' min={5} max={20} value={length} onChange={(e)=> setLength(e.target.value)}  />
            <span className="length-value">{length}</span>
        </div>

        <div className="checkbox-container">
            <input type='checkbox' id="numbers" defaultChecked={chnageNumber} onChange={()=> setChnageNumber(!chnageNumber)}/>
            <label>Numbers</label>
        </div>

        <div className="checkbox-container">
            <input type='checkbox' id="specialChars" defaultChecked={chnagecharacter} onChange={()=> setChnagecharacter(!chnagecharacter)}/>
            <label >Special Characters</label>
        </div>

        <button className="generate-btn" onClick={generator}>Generate Password</button>
    </div>
  </div>
 </>
}

export default PasswordGenerator