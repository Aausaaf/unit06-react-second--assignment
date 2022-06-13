import React, { Component } from "react";

class Greet extends Component {
    constructor(props){
        super(props)
        this.props = props
       
    }
    render()
    {
        return <div  className="container card p-4 mt-4 regitered text-center">
            <h3 className="from-group mt-4">
              {this.props.name} <br/>  <br/> Thanku for giving information to me

            </h3>
            <h4 className="from-group mt-4">
                Verification sent to this email {this.props.email}
            </h4>

        </div>
    }
}

export default Greet
