import React, { Component } from 'react';
import ParkingData from './ParkingData';
import EditForm from './EditForm';
class Show extends Component {
    constructor() {
        super();
        this.state = {
            editForm: null,
            activeShow: 'Show'
        }
    };

    parkingShow() {
        const parking = this.props.employee.map(el => {
            return <ParkingData parkingData={el} key={el.id} handelEdit={this.handelEdit.bind(this)} deleteShow={this.deleteShow.bind(this)} />
        })
        return parking;
    }


    updateData(data) {
        console.log(data, 'edit')
        const url = `http://localhost:3000/parking/${data.employee_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                const parkingData = this.state.parkingData.map(el => {
                    return el.id === data.id ? data : el
                })

                this.setState({ parkingData })
            })
            .catch(error => {
                console.log(error);
            })
    };

    deleteShow(id) {
        console.log(id, 'delete')
        const url = `http://localhost:3000/parking/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                const parkingData = this.state.parkingData.filter(el => el.id !== id)
                this.setState({ parkingData })
            })
            .catch(error => {
                console.log(error);
            })
    };

    createParking(data) {
        const url = 'http://localhost:3000/parking/'
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.log(error);
            })
    };

    handelEdit(editForm) {
        this.setState({ editForm, activeShow: 'Edit' })
    }

    handelCreate(event) {
        event.preventDefault();
        this.setState({ activeShow: 'Create' })
    }

    ShowCreate() {
        const employee_id = { employee_id: this.props.employee[0].employee_id };
        console.log(employee_id)
        return <EditForm data={employee_id} createParking={this.createParking.bind(this)} active={'Create'} />
    }
    render() {
        console.log(this.props)
        return (
            <div className="info">
                <div className="row">
                    <div className="column left">
                        <img alt="" className="proimg" src="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" />
                        <h2>Employee Name: {this.props.employee[0].name}</h2>
                        <button onClick={this.handelCreate.bind(this)}>Create Parking</button>
                    </div>
                    <div className="column right">
                        <div className="shows">

                                {this.state.activeShow === 'Show' ? this.parkingShow() : ''}
                        </div>
                        {this.state.activeShow === "Edit" && this.state.editForm ? <EditForm data={this.state.editForm} updateData={this.updateData.bind(this)} active={'Update'} /> : ''}

                        {this.state.activeShow === 'Create' ? this.ShowCreate() : null}

                    </div>
                </div>

            </div>
        );
    }
}

export default Show;