import React, { useState } from "react";

const Classnotes = (props) =>{
    const [name, setname] = useState({
        title:"",
        content:"",

    })
    const inputEvent = (event) => {

        const value = event.target.value;
        const nam = event.target.name;
        setname((olddata)=>{
            return{
                ...olddata,
                [nam]:value,
            }
        })
      // console.log(name)
    }
    const addEvent = () => {
       props.passnotes(name);
       setname({
        title:"",
        content:"",
       })
       
  }
    return(
        <>
        <div className="mainnotes">
           
                <input type="text"  placeholder="Title" style={{marginLeft:"35vw", width:"27vw" ,marginTop:"5vh" , borderBottom:"0.1vw solid white",padding:"1vh"}} 
                value={name.title} onChange={inputEvent} name="title"/>
                <br/>
                <textarea placeholder="write your notes ..." style={{marginLeft:"35vw"}} value={name.content} onChange={inputEvent} name="content" />
                <button className="bbtn" onClick={addEvent}>+</button>
           
        </div>

        </>
    )
}
export default Classnotes