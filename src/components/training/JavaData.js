import axios from "axios";
import { useState, useEffect } from 'react';

let JavaData = (props) => {
    const [empList, setEmpList] = useState([]); // from axios
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   
    const [emp, setEmp] = useState({
        id: 0,
        name: '',
        salary: 0
    }); // from axios 

    // initilize states to prevent undefined error, in case used these fields anywhere else in future 
    useEffect(
        () => {
        setParentEmp(props.parentEmp); // 4
        setParentEmpHke(props.parentEmpHike);
        setChildEmp({
            id: 301,
            name: 'Tonu',
            salary: 30.5
        }
        );
        // setEmp({
        //     id: 0,
        //     name: '',
        //     salary: 0
        // }
        // );

    }, []);

    const onTrigger = () => {
        props.parentCallback(childEmp);
    };

    const handleEmployee = (event) => {
        console.log(emp.id);
        setEmp({
            ...emp,
            [event.target.name]: event.target.value
        });
    };

    const submitAddEmployee = (event) => {
        console.log(event.target.salary.name);
        console.log(event.target.salary.value);
        axios.post(`/addEmployee`, emp)
            .then((response) => {
                console.log(response.data.name);
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
    }

    const submitGetAllEmployees = (e) => {
        console.log();
        axios.get(`/getAllEmployees`)
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
    }

    const submitGetEmployeById = (event) => {
        axios.get(`/getEmployee/${emp.id}`)
            .then(
                (response) => {
                    setEmp(response.data);
                    console.log(emp.id);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault(); // required in submit methods 
    }

    const submitUpdateEmployee = (event) => {
        axios.put(`/updateEmployee/`, emp)
            .then((response) => {
                console.log(response.data.name);
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
    }

    const submitDeleteEmployee = (event) => {
        const userInput = window.confirm("Are you sure to delete the employee?");
        if (userInput == true) { // ignore 
            axios.delete(`/deleteEmployee/${emp.id}`)
                .then((response) => {
                    console.log(response.data.name);
                }).catch((error) => {
                    console.log(error.message)
                });
        } else {
            console.log("You saved the employee!");

        }
        event.preventDefault();
    }

    return (
        <div>
            <p>JavaData Component</p>
            <p>axios {emp.name}</p>
            <p>child {parentEmp.name}</p>
            <p> child {parentEmpHike} </p>
            <button onClick={onTrigger}>Pass child emp to parent</button>
            <div>
                <p>Add new Employee</p>
                <form onSubmit={submitAddEmployee} className="form form-group">
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={emp.id}
                            placeholder="143" // add for other elements as well 
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={emp.name}
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={emp.salary}
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Employee</button>
                </form>
                <p> New employee added {emp.id} , {emp.name} , {emp.salary} </p>
            </div>

            <div>
                <p>Update an Employee</p>
                <form onSubmit={submitUpdateEmployee} className="form form-group">
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={emp.id}
                            placeholder="143" // add for other elements as well 
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={emp.name}
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={emp.salary}
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Update Employee</button>
                </form>
                <div>
                    <p> Employee Updated - {emp.id} , {emp.name} , {emp.salary} </p>
                </div>
            </div>

            <div>
                <p>Delete an Employee</p>
                <form onSubmit={submitDeleteEmployee} className="form form-group" >
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={emp.id}
                            placeholder="143" // add for other elements as well 
                            className="form-control mb-2"
                            onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Delete Employee</button>
                </form>
                <p>Employee deleted {emp.id}</p>

            </div>


            <div>
                <p>Get employee by id</p>
                <form onSubmit={submitGetEmployeById} className="form form-group">
                    <div>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={emp.id}
                            onChange={handleEmployee}
                            className="form-control mb-2"
                        // onChange={handleEmployee}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Get Employee By Id</button>
                </form>
                <div>
                    <p>Employee Data - {emp.id} , {emp.name} , {emp.salary} </p>
                </div>
                <div>
                    <p>Get all employees data </p>
                    <button type="submit" className="btn btn-primary" onClick={submitGetAllEmployees}>Get All Employees</button>
                    <p>All Employee Data</p>
                    <div> {empList.map(e => <p> {e.id}, {e.name} {e.salary} </p>)} </div>
                </div>

            </div>
        </div>
    )
}
export default JavaData;
