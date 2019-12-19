import React from 'react';
import './App.css';
import Header from "./components/header"
import EmployeeView from "./components/employee-view";
import InputContent from "./util/InputContent"

function App() {
  return (
    <div>
      <InputContent.provider value={}>
        <Header />
        <EmployeeView />
      </InputContent.provider>
    </div>
  )
}

export default App;
