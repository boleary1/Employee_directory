import React from "react";
import List from "./components/List";
import employees from "./employees.json";
import Header from "./components/Header";


const employeeArray = employees;

function App() {
  return(

  <div>
    <Header />
    <List employees={employeeArray} />;
    </div>
  );
}

export default App;


