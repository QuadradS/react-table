import React, { Component } from 'react';
import ItemsTable from './components/ItemTable/ItemsTable';
import './assets/css/core-style.css'

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
