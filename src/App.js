import React, { useState } from 'react';
import './App.css';
import Header from "./components/header"
import EmployeeView from "./components/employee-view";
import InputContent from "./util/InputContent"

function App() {
  const [inputState, setInputState] = useState("")

  const handleInputChange = (event) => {
    let value = event.target.value;
    return setInputState(value)
  }

  return (
    <div>
      <InputContent.Provider value={{ inputState, handleInputChange }}>
        <Header />
        <EmployeeView />
      </InputContent.Provider>
    </div>
  )
}

export default App;
