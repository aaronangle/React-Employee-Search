import React, { useContext, useState } from "react";
import InputContent from "../util/InputContent";

const Input = () => {
    const { inputState, handleInputChange } = useContext(InputContent);

    return (
        <div>
            <input className="input" type="text" value={inputState} onChange={handleInputChange}></input>
            <button className="search">Search</button>
        </div>
    )
}

export default Input;