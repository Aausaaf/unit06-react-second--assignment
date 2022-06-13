import React, { Component } from "react";
import Styled from "styled-components";
class Register extends Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {

        }
        
       
    }
    
    render()
    {
        let btnstyle;
        let btntext , passwordbox;
        var classarray = ["btn","mt-3"]
        btnstyle = {
            backgroundColor:"green",
            color:"white",
        }
        if(this.props.showpas===true)
        {
            btnstyle.backgroundColor = "red"
            btntext = "Hide password"
            passwordbox = "text"
            classarray.push("btn-danger")
            
        }
        else{
            btntext = "show password"
            passwordbox = "Password"
            classarray.push("btn-success")
        }
        const StyledButton = Styled.button`
        background-color:${(props) => props.color};
        margin-top:4vh;
        width:100%;
        `;
        const StyledContainer = Styled.div`
        width:50vw !important;
        &:hover {
            box-shadow:0px 0px 5px grey; 
        }
        @media (min-width:100px) and (max-width:500px)
        {
            display:none;
        }
        `;
       
        console.log(classarray)

        return <StyledContainer className="container card p-4 mt-4 regitered">
            <h2 className="text-center">Registration Form</h2>
            <form onSubmit={this.props.submit}>
              <div className="form-group">
              <label htmlFor="name">Name:</label>
                <input type="text" name="name" required className="form-control  mt-2"/>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required className="form-control  mt-2"/></div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type={passwordbox} name="password" required className="form-control mt-2"/></div>
              </div>
              <button type="submit" className="btn btn-success m-2 mt-4">Register</button>
              <button type="submit" className={classarray.join(" ")} style={btnstyle} onClick={this.props.click}>{btntext}</button>
              <br/>
              <StyledButton color="orange">Login</StyledButton>
              <StyledButton color="yellow">Login with google</StyledButton>
            </form>
          
        </StyledContainer>
    }
}

export default Register