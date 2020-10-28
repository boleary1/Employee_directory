import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <ul className="list-group">
      {props.employeeArray.map(item => (
        <li className="list-group-item" key={item.id.value}>
          {item.name.first}
        </li>
      ))}
    </ul>
  );
}

export default List;
