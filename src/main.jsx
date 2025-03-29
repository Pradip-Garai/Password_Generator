import React,{useState,useEffect} from "react";
import ReactDOM, { createRoot } from "react-dom/client";

function App(){

    const [password,setPassword]=useState("ABDBHJDVUF");
    const [length,setLength]=useState(10);
    const [numberChanged,setnumberChanged]=useState(false);
    const [characterChanged,setcharacterChanged]=useState(false);

    function generatePassword(){
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="0123456789";
        if(characterChanged)
            str+="/*-+.!@#$%^&*()_+=~`{}[]?/><,";

        let pass="";

        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
    };

    // function calling     
    useEffect(()=>{
         generatePassword();
    },[length,numberChanged,characterChanged]);

    

    return(
     <>
        <h1>Password is : {password}</h1>
        <div className="second">
            <input type="range" min={5} max={20} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is : {length}</label>

            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={characterChanged} onChange={()=>setcharacterChanged(!characterChanged)}></input>
            <label>Character</label>
        </div>
     </>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);