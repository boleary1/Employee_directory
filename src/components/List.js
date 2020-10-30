import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const columns2 = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const columns = [{
  dataField: 'image',
  text: 'Image'
}, 
{
  dataField: 'name',
  text: 'Name'
}, 
{
  dataField: 'phone',
  text: 'Phone Number'
}, {
  dataField: 'email',
  text: 'Email adress'
},
{
  dataField: 'birthdate',
  text: 'DOB'
}, ];
const employees = [{
  image: "1",
  name: "fddsf",
  phone: "2152",
  email: "dfvgfv",
  birthdate: "sdfs"
},];


const products = [{
  id: "1",
  name: "fddsf",
  price: "2152"
},
{
  id: "2",
  name: "fddxfvsf",
  price: "21752"
},
{
  id: "3",
  name: "fddfdvfdbsf",
  price: "215552"
},
{
  id: "4",
  name: "fddfgvfdvdfdsf",
  price: "21542"
},];

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (

    <ul className="list-group">
      {props.employees.map(item => (
        <li className="list-group-item" key={item.id.value}>
          {item.name.first}
        </li>
      ))}
    </ul>
  );
}

// export default List;
export default () =>
<BootstrapTable keyField='email' data={ employees } columns={ columns } />;
<BootstrapTable keyField='id' data={ products } columns={ columns2 } />;


