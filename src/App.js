import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Table, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const { SearchBar } = Search;

export default function App() {
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
      headerStyle: {
        backgroundColor: '#565082cc',
        color: '#fff'
      }
    },
    {
      dataField: 'name',
      text: 'Product Name',
      headerStyle: {
        backgroundColor: '#565082cc',
        color: '#fff'
      }
    },
    {
      dataField: 'price',
      text: 'Product Price',
      headerStyle: {
        backgroundColor: '#565082cc',
        color: '#fff'
      }
    }
  ];

  var products = [
    {
      id: 9,
      name: '',
      price: 55
    },
    {
      id: 2,
      name: 'type2',
      price: 456
    },
    {
      id: 1,
      name: 'type1',
      price: 123
    },
    {
      id: 2,
      name: 'type2',
      price: 456
    },
    {
      id: 1,
      name: 'type1',
      price: ''
    },
    {
      id: 2,
      name: 'type2',
      price: 456
    },
    {
      id: 1,
      name: 'type1',
      price: 123
    },
    {
      id: 2,
      name: 'type2',
      price: ''
    }
  ];

  return (
    <div className="App container">
      <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {props => (
          <div>
            {console.log(props)}
            <SearchBar {...props.searchProps} />
            <hr />
            <Table className="broker-table">
              <thead>
                <tr>
                  {props.baseProps.columns.map(header => (
                    <th> {header.text}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {props.baseProps.data.map(data => (
                  <tr>
                    <td>
                      {data.id == '' ? (
                        <Input type="text" size="sm" name="fname" />
                      ) : (
                        data.id
                      )}
                    </td>
                    <td>
                      {data.name == '' ? (
                        <Input type="text" size="sm" name="fname" />
                      ) : (
                        data.name
                      )}
                    </td>
                    <td>
                      {data.price == '' ? (
                        <Input type="text" size="sm" name="fname" />
                      ) : (
                        data.price
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </ToolkitProvider>

      <Table className="broker-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr className="light-red">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
