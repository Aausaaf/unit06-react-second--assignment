import React, { Component } from "react";

 class From extends Component {
     constructor(props)
     {
         super(props)
         this.props = props
         this.state = {
               name:null,
               country:null,
         }
     }
    //  namechange = (event) => {
    //      console.log( "name:" + event.target.value)
    //  } 
    //  selectchange = (event) => {
    //     console.log("select:" + event.target.value)
    // } 
    submithand = (event) => {
        event.preventDefault();
            console.log(this.state)
            const name = event.target.name.value;
            const country = event.target.country.value;
            this.setState({name,country}, () =>{
                console.log(this.state)
                event.target.name.value = "";
                event.target.country.value = "";

            })

         } 

     render()
     {
       return <div className="App">
         <form onSubmit={this.submithand}>
             <label htmlFor="">Name:</label>
         <input type="text" name="name" /> <br/>
         <label htmlFor="">Country:</label>
         <select name="country" >
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             
         </select><br/>
         <button type="submit">submit</button>
         
         </form>

       </div>
     }
 }
 export default From;