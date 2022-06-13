import { NavLink,Link } from "react-router-dom"

export const Ravbar = () => {
    const act = ({isActive}) => {
        return {
            marginLeft : '10vw',
            backgroundColor:'#cecece',
            fontWeight:isActive?'bold':'normal',
            textDecoration: isActive?'none':'underline'
        }
    }
  return(
      <>
       <nav>

       <NavLink style={act} to="/">Home</NavLink>
       <NavLink to="/product">Product</NavLink>
       <NavLink style={act}  to="/about" >About</NavLink>
       </nav>
      </>
  )
}