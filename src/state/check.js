import React, { useState } from "react";

const Check = () =>{
 const[name,setname] = useState(1)
 const[changecolor,setcolor] = useState("c0")
const Ans = () =>{
  let n = name 
  if(n >= 10 && n <= 20)
  {
      setcolor("c1")
  }
  else if (n <= 10)
  {
    setcolor("c0")
  }
  else if (n >=  20)
  {
    setcolor("c2")
  }
    setname(name+1)
}

const Ans2 = () =>{
    if(+name == 0)
    {
        alert(`you can not dec below zero`)
    }
    else
    {
        let n = name
        if(n >= 10 && n <= 20)
  {
      setcolor("c1")
  }
  else if (n <= 10)
  {
    setcolor("c0")
  }
  else if (n >=  20)
  {
    setcolor("c2")
  }
    setname(name+1)
        setname(name-1)
    }
}

const Ans3 = () =>{
  if(+name == 0)
  {
      alert(`you can not dec below zero`)
  }
  else
  {
      let n = name
      if(n >= 10 && n <= 20)
{
    setcolor("c1")
}
else if (n <= 10)
{
  setcolor("c0")
}
else if (n >=  20)
{
  setcolor("c2")
}
  setname(name+1)
      setname(name+2)
  }
}


    return (
        <>
            <div className="main_div">
             <div className="center_div">
                 <h1 id="incdrc" className={`${changecolor}h1`}>
                   {name}
                 </h1>
                 <br/>
                 <button className="incbuttom" onClick={Ans}>
                  Inc
                 </button>
                 <button className="decbuttom" onClick={Ans2}>
                  Dec
                 </button>
                 <br />
                 <button style={{marginLeft:"-12vh"}} className="decbuttom" onClick={Ans3}>
                  Double
                 </button>

             </div>
            </div>
        </>
    )
}
export default Check;
