import React, { useState } from "react";
import "./youtubeclone.css"
const Homecontainer = () => {
    let api_key = "a0c4f6ef";
 let [dta,change] = useState([])
 let [one,ch] = useState(0)

    async function getData()
    {
        try
        {
          let res = await fetch(`https://fakestoreapi.com/products`)
          let data =  await res.json()
         // console.log(data)
         // console.log(c++)
         change(data)
        
      
       
        }
        catch(error)
        {
            console.log(error)
        }

    }
    
        getData()
        
    
   
  
    function display (data)
    {
        console.log(data)
    }
 
    return (
        <>
   
            
    
   <div className="mains">
         {
            dta.map(ele => {
              return(<>
               <div className="div">
                   <img src={ele.image} alt="" srcset="" />
                <p className="p">{ele.title}</p>
            
              </div>
              </>
               
              
              )  
            })
        }
          </div>
           
        
        </>
    )
}
export default Homecontainer