import axios from "axios";
import React from "react";



class EmployeeService extends React.Component {

    http = axios.create({
        baseURL: "/",
        headers: {
            "Content-type": "application/json"
        }
    })

    async getHello() {
        return await this.http.get("/hello");
    }
    // getAllEmployee() {
    //     return http.get("/Employee");
    // }

    // getEmployeeById(id) {
    //     return http.get(`/Employee/${id}`);
    // }

    // createEmployee(data) {
    //     return http.post("/Employee", data);
    // }

    // updateEmployee(data) {
    //     return http.put(`/Employee`, data);
    // }
}

export default EmployeeService;