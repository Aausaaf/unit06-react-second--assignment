import React,{ useSate } from "react";

const List = (props) => {

    return (
        <>
        <div className="todostyle">
         <li>
             {props.text}
         </li>
         <button className="cutbuttom"  onClick={() =>{
             props.onSelect(props.id)
         }}>-</button>


        </div>
        </>
    )
}
export default List
