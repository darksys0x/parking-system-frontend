import React, { Component } from 'react';

class ParkingData extends Component {
    deleteShow(event) {
        event.preventDefault();
        this.props.deleteShow(this.props.parkingData.id);
    };

    handelEdit(event) {
        event.preventDefault();
        this.props.handelEdit(this.props.parkingData)
    }

    render() {
        return (
            <div>
                                            <div className="cars">

                <img src={this.props.image} alt="" />
                <h2>Driver Name: {this.props.parkingData.driver_name}</h2>
                <h2>Type Car: {this.props.parkingData.type_car}</h2>
                <h2>Plate Number: {this.props.parkingData.plate_number}</h2>
                <h2>Date in: {this.props.parkingData.date_in}</h2>
                <h2>Date out: {this.props.parkingData.date_out}</h2>
                <div className="bt">
                
                <button onClick={this.deleteShow.bind(this)}>Delete</button>
                <button onClick={this.handelEdit.bind(this)}>Edit</button>
                </div>
                </div>
                
            </div>
        );
    }
}

export default ParkingData;