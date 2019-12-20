import React, { useState, useEffect, useContext } from "react";
import API from "../util/API"
import "./Table/table.css"
import InputContent from "../util/InputContent"

function EmployeeView() {
    const { inputState } = useContext(InputContent);

    const [employees, getEmployee] = useState([])
    const [letters, getLetters] = useState("A-Z")
    console.log(employees)
    useEffect(() => {
        API.getUsers()
            .then(data => {
                return getEmployee(data.data.results)
            });
    }, [])
    function niceDate(date) {
        return new Date(date).toLocaleString().split(",", 1)
    }

    function sort() {
        if (letters === "A-Z") {
            const array = [...employees]
            array.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            getEmployee(array)
            getLetters("Z-A")
        } else {
            const array = [...employees]
            array.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
            getEmployee(array)
            getLetters("A-Z")
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name <button onClick={sort} className="search sort">Sort {letters}</button></th>
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
                                <td>{item.name.first} {item.name.last}</td>
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