import React, { Component } from "react";

 class Controlcom extends Component {
     constructor(props)
     {
         super(props)
         this.props = props
         this.state = {
               name:"read only",
            
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
         typeonly = (event) => {
             const name = event.target.value;
             this.setState({name} ,() => {
                 console.log(this.state)
             })
         }

     render()
     {
       return <div className="App">
         <form onSubmit={this.submithand}>
             <label htmlFor="">Name:</label>
         <input type="text" name="name" value={this.state.name} onChange={this.typeonly} /> <br/>
    
         <button type="submit">submit</button>
         
         </form>

       </div>
     }
 }
 export default Controlcom;