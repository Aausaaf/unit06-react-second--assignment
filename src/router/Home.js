import { useNavigate } from "react-router-dom"

export const Home = () => {
    let Navigate = useNavigate()
  return(
      <>
      <p>Home Page </p>
      <button onClick={()=> {
          Navigate('paceorder')

      }}>Place Order</button>
      </>
  )
}