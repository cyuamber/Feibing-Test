import React, { Component } from 'react';
import FilterWithSearch from './components/FilterWithSearch';
import EditableTable from './components/EditableTable';

export default class Table extends Component {
  static displayName = 'Table';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="table-page">
        <FilterWithSearch />
        <EditableTable />
      </div>
    );
  }
}
