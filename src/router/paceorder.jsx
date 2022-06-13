import { useNavigate } from "react-router-dom"

export const Order = () =>
{
    let Navigate = useNavigate()
   return(
       <>
       <div className="p">order</div>
       <button onClick={()=> {
           Navigate(-1)
       }}>Back</button>
       </>
   )
}