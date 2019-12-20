import React, { useState, useEffect, useContext } from "react";
import API from "../util/API"
import "./Table/table.css"
import InputContent from "../util/InputContent"

function EmployeeView() {
    const { inputState } = useContext(InputContent);
    console.log(inputState)

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
                    employees.filter(item => {
                        let input = inputState.toLowerCase();
                        let name = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase()
                        const reg = new RegExp(input, "g");

                        if (inputState === "") {
                            return item
                        }
                        if (reg.test(name)) {
                            return item
                        }

                    })
                        .map(item =>
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