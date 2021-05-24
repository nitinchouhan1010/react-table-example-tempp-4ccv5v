import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const { SearchBar } = Search;

export default function App() {
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID'
    },
    {
      dataField: 'name',
      text: 'Product Name'
    },
    {
      dataField: 'price',
      text: 'Product Price'
    }
  ];

  var products = [
    {
      id: 1,
      name: 'type1',
      price: 123
    },
    {
      id: 9,
      name: 'asfd',
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
      price: 123
    },
    {
      id: 2,
      name: 'type2',
      price: 456
    }
  ];

  return (
    <div className="App container">
      <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {props => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}
