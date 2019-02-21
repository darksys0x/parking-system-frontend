import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver_name: props.data ? props.data.driver_name: '',
            type_car: props.data ? props.data.type_car: '',
            plate_number: props.data ? props.data.plate_number: '',
            image: props.data ? props.data.image: '',
            employee_id: props.data.employee_id,
            date_in: props.data ? props.data.date_in: '',
            date_out: props.data ? props.data.date_out: '',
            id: props.data ? props.data.id : null
        }
    };

    handleChange(event){
        const data = {}; 
        data[ event.target.name] =  event.target.value
        this.setState(data)
        console.log(data)
    }

    handelSubmit(event){
        event.preventDefault();
        if(this.props.active === 'Update'){
        this.props.updateData(this.state)
        } else {
        this.props.createParking(this.state);
        }
    }

    render() {
        console.log(this.state) 
        return ( 
            <div>
                            <div className="form">

                <form onSubmit={this.handelSubmit.bind(this)}>
                        <label>Driver Name:</label><input className="Input"  type="text" value={this.state.driver_name} name="driver_name" onChange={this.handleChange.bind(this)} /><br />
                        <label>Type Car:</label><input className="Input"  type="text" value={this.state.type_car} name="type_car" onChange={this.handleChange.bind(this)} /><br />
                        <label>Plate Number:</label><input className="Input"  type="text" value={this.state.plate_number} name="plate_number" onChange={this.handleChange.bind(this)} /><br />
                        <label>Date in:</label><input className="Input"  type="text" value={this.state.date_in} name="date_in" onChange={this.handleChange.bind(this)} /><br />
                        <label>Date out:</label><input className="Input"  type="text" value={this.state.date_out} name="date_out" onChange={this.handleChange.bind(this)} /><br />
                        <label>Image:</label><input className="Input"  type="text" value={this.state.image} name="image" onChange={this.handleChange.bind(this)} /><br />
                        <button>Submit</button>
                    </form>
                    </div>
            </div>
         );
    }
}
 
export default EditForm;