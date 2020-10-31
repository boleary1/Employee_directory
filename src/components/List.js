import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Moment from 'react-moment';

const columns = [
  {
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

function imageFormat(headshot) {
  console.log(headshot)
  return `<img src= ${headshot} /> `; 
  };

function dateFormat(date) {
  return date.substring(5, 7) + "/" + date.substring(8, 10) + "/" + date.substring(0, 4); 
  };

const defaultSorted = [{
  dataField: 'email', // if dataField is not match to any column you defined, it will be ignored.
  order: 'asc' // desc or asc
}];

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  {
    props.employees.map(item => employeeArray.push(
      {
        image: imageFormat(item.picture.thumbnail),
        // image: "<image src=" + item.picture.thumbnail + "/>,",
        name: item.name.first + " " + item.name.last,
        phone: item.phone,
        email: item.email,
        birthdate: dateFormat(item.dob.date)
            },
    ))
  }

  return (

    <BootstrapTable
      keyField='email'
      data={employeeArray}
      columns={columns}
      defaultSorted={ defaultSorted } 
      striped />
  );
}

export default List;
