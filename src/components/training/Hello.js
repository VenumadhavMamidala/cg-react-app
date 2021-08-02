import React from 'react';

import axios from 'axios';


// axios gives methods for HTTP requests - GET OOST PUT DELETE  

export default class Hello extends React.Component {

    state = {
        employee: []
    }

    componentDidMount() {

        // set @CrossOrigin(origins = "*") in controllers in spring boot app 
        // ! hardcoded url, see pom.xml "proxy" 
        // axios.get('http://localhost:8084/Employee')
        axios.get('/Employee')
            .then(
                (response) => {
                    let employee = response.data;

                    this.setState({employee});
                }
            );


        // axios.get(`http://localhost:8084/Employee`)
        //     .then(res => {
        //         const employee = res.data;
        //         this.setState({ employee });
        //     })
    }

    render() {
        return (
            <div>
                <p> {this.state.employee.map( (emp) => { return  <p>{emp.id}</p> } ) } </p>
                <p> {this.state.employee.map( (emp) => { return  <p>{emp.name}</p> } ) } </p>
                <p> {this.state.employee.map( (emp) => { return  <p>{emp.salary}</p> } ) } </p>

                <ul>
                    {this.state.employee.map(employee => { return <p>{employee.name + ' ' + employee.id + ' ' + employee.salary}</p> })}
                </ul>
            </div>
        )
    }
    // state = {
    //     message: ''
    // }

    // componentDidMount() {
    //     axios.get(`https://localhost:8084/hello`)
    //         .then(res => {
    //             const message = res.data;
    //             this.setState({ message });
    //         })
    // }

    // render() {
    //     return (
    //         <div>

    //             {this.state.message.map(message => <li>{message}</li>)}

    //         </div>
    //     )
    // }
}
