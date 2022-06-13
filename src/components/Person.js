import React, { Component } from "react";
import Count from "./count.js";
class Person extends Component {
 constructor(props) {
     super(props)
  //   this.props = props;
     this.state = {
         pesrons: [
             {
                 name: "Aausaf",
                 age: 13,

             },
             {
                name: "Shabaz",
                age: 12,

            },
            {
                name: "Shabaz",
                age: 12,

            },
         ],
     };
    
 }
 chenges()
 {
     
 }
 
    render() {
       let pesron;
       pesron = this.state.pesrons.map((p)=> {
           return (
              <Count name={p.name} age={p.age} />

            )
       });
       return (
        <div className="App">
        <h3 >
         a.ljnejf {this.state.pesrons[0].age}  sqdkjbekh
        </h3>
     
       <h2>
        {pesron}
       </h2>
       <button onClick={()=> this.chenges()}>click me</button>
        </div>

    );
       
    }
}

export default Person