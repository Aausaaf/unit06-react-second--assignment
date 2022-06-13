import React, {Component, useState} from "react";


const State = (props) => {
    useState = {
        name:"Aausaf",
        age:"19"
    }
   
   
 
    return (
       <div className="App">
        <h1>
            Dear {useState.name} ,age: {useState.age}  
        </h1>
       
       </div>
    )
}
export default State
