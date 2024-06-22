import React from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';

const CarGrid = ({ rowData }) => {
  const columnDefs = [
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price', filter: 'agNumberColumnFilter' },
    { field: 'electric', cellRenderer: 'booleanCellRenderer', filter: 'agSetColumnFilter' },
  ];

  const defaultColDef = {
    flex: 1,
    filter: true,
  };

  const frameworkComponents = {
    booleanCellRenderer: BooleanCellRenderer,
  };

  return (
    <div className="ag-theme-quartz car-grid" style={{ height: '500px', width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        frameworkComponents={frameworkComponents}
      />
    </div>
  );
};

const BooleanCellRenderer = ({ value }) => {
  return value ? 'Yes' : 'No';
};

CarGrid.propTypes = {
  rowData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarGrid;
