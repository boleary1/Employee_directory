import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';

const { SearchBar } = Search;


function imageFormat(cell, row) {
  console.log(cell , row)
  return `<img src= "https://randomuser.me/api/portraits/thumb/men/83.jpg" /> ${cell}`; 
  };

const columns = [
  {
    dataFormat: {imageFormat},
    dataField: 'image',
    text: 'Image',
  },
  {
    dataField: 'name',
    text: 'Name',
    sort: true,
  },
  {
    dataField: 'phone',
    text: 'Phone Number'
  }, {
    dataField: 'email',
    text: 'Email adress',
    sort: true,
  },
  {
    dataField: 'birthdate',
    text: 'DOB'
  },];

const employeeArray = [];
let searchValue = "";
const defaultSorted = [{
  dataField: 'email', // if dataField is not match to any column you defined, it will be ignored.
  order: 'asc' // desc or asc
}];



function dateFormat(date) {
return date.substring(5, 6) + "/" + date.substring(8, 9) + "/" + date.substring(0, 4); 
};
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  {
    props.employees.map(item => employeeArray.push(
      {
        image: item.picture.thumbnail,
        // image: `<img src= "${item.picture.thumbnail}" />,`,
        name: item.name.first + " " + item.name.last,
        phone: item.phone,
        email: item.email,
        birthdate: dateFormat(item.dob.date)
      },
    ))
  }

  return (
    <div>
      <h3>Input something at below input field:</h3>
      <img src= "https://randomuser.me/api/portraits/thumb/men/83.jpg" />,
      <SearchBar {...props.searchProps} />
      <BootstrapTable
        keyField='email'
        data={employeeArray}
        columns={columns}
        defaultSorted={defaultSorted}
        striped />
    </div>
  );
};

export default List;
