import React, { useState } from "react"

function Input(props) {
    const [search, getSearch] = useState("");
    const handleInputChange = (event) => {
        let value = event.target.value;
        getSearch(value)
    }
    return (
        <div>
            <input className="input" type="text" value={search} onChange={handleInputChange}></input>
            <button className="search">Search</button>
        </div>
    )
}

export default Input;