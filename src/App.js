import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Show from './components/Show';


class App extends Component {
constructor(){
  super()
  this.state = {
    ActiveShow: 'Input',
    employee: null,
    input: '',
    employeeId: null
  }
}

  componentDidMount(){
    this.fetchEmployee();
  }

  fetchEmployee(){
    fetch('http://localhost:3000/employee')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          employee: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  };

  handelInput(input){
    console.log(input)
    this.setState({input, ActiveShow: 'Show'})

  };

  employeeFilter(dataEmployee){
    const employeeId = dataEmployee.filter(el => el.name === this.state.input );
    console.log(employeeId);
    return <Show employee={employeeId} /> 
  };

  render() {
    return (
      <div className="App">
        <div className="inp">{this.state.ActiveShow === 'Input' ? <Input handelInput={this.handelInput.bind(this)}/> : ''} 
        {this.state.input ? this.employeeFilter(this.state.employee): null}
        </div>
      </div>
    );
  }
}

export default App;
