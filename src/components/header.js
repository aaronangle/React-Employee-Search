import React from "react";
import Input from "./input"

function Header() {
    return (
        <div>
            <div className="header" onClick={e => {
                alert("hi")
            }}>
                <Input />
            </div>
            <div className="bar">

            </div>

        </div>
    )
}

export default Header;