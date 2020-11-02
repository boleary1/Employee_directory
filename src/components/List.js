import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Moment from 'react-moment';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;
function imageFormat(cell, row) {
  return (<img src= {row.image}></img>)
  };
const columns = [
  {
    dataField: 'image',
    text: 'Image',
    formatter: imageFormat,
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
    text: 'DOB',
    formatter: dateFormat
  },];
const employeeArray = [];
function dateFormat(birthdate) {
  return birthdate.substring(5, 7) + "/" + birthdate.substring(8, 10) + "/" + birthdate.substring(0, 4); 
  };

  function format(cell, row){
    console.log("in format")
    return '<img class="glyphicon glyphicon-usd"></img> ' + cell;
    
  }

const defaultSorted = [{
  dataField: 'email', // if dataField is not match to any column you defined, it will be ignored.
  order: 'asc' // desc or asc
}];
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  {
    props.employees.map(item => employeeArray.push(
      {
        image: item.picture.thumbnail,
        name: item.name.first + " " + item.name.last,
        phone: item.phone,
        email: item.email,
        birthdate: item.dob.date
            },
    ))
  }
  return (
    <div>
    <SearchBar { ...props.searchProps } />
    <BootstrapTable
      keyField='email'
      data={employeeArray}
      columns={columns}
      defaultSorted={ defaultSorted } 
      striped />
      </div>
  );
}
export default List;