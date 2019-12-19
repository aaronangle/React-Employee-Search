import React, { useState, useEffect } from "react";
import API from "../util/API"
import "./Table/table.css"

function EmployeeView() {
    const [employees, getEmployee] = useState([])

    useEffect(() => {
        API.getUsers()
            .then(data => {
                getEmployee(data.data.results)
            });
    }, [])

    function niceDate(date) {

        return new Date(date).toLocaleString().split(",", 1)
    }

    function filterName(first) {
        if (first === "Leon") {
            return first
        }
    }

    return (

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(item =>
                        <tr key={item.login.uuid}>
                            <td ><img src={item.picture.thumbnail} alt="Profile-Pic"></img></td>
                            <td>{item.name.first} {item.name.last}{filterName(item.name.first)}</td>
                            <td>{item.email}</td>
                            <td>{niceDate(item.dob.date)}</td>
                            <td>{item.cell}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default EmployeeView;