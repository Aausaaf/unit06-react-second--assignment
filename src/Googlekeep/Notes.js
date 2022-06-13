import React from "react";

const Notes = (props) => {
    const deletenode = () =>{
        props.deleteitem(props.id);
    }
  return(
      <div className="main">
      <div className="notescontainer">
          <h2 className="hh">{props.title}</h2>
          <br/>
          <p className="pp">{props.content}</p>
          <button className="bbbtn" onClick={deletenode}>-</button>
      </div>
      </div>
  )
}
export default Notes