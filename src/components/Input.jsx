import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = { 
            input: ''
        }
    }

    handelChange(event){
        const input = event.target.value;
        this.setState({input});
        console.log(input)
    }

    handelSubmit(event){
        event.preventDefault();
        this.props.handelInput(this.state.input)
    }

    render() { 
        return ( 
            <div className="acss">
            <div className="Wrapper">
                <form onSubmit={this.handelSubmit.bind(this)}>
                <label className="Title">Parking Syatem</label>
                <div >
                <input  className="Input" placeholder="Employee Name" type="text" onChange={this.handelChange.bind(this)}/>
                <label className="Input-label">Employee Name</label>

                </div>
                <button>Access</button>
                </form>
                </div>
            </div>
         );
    }
}
 
export default Input;