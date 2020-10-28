import React from "react";
import List from "./components/List";
import employees from "./employees.json";

const employeeArray = [
employees
];

function App() {
  return <List employees={employeeArray} />;
}

export default App;
