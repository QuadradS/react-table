import React, { Component } from 'react';
import ItemsTable from './containers/Table/ItemTable';
import './assets/css/core-style.css'
import { fetchData } from './server/index'
class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <ItemsTable />
      </div>
    );
  }
}

export default App;
