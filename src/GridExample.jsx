import React, { useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react'; // React Grid Logic
import '@ag-grid-community/styles/ag-grid.css'; // Core CSS
import '@ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import './App.css'; // Custom CSS for styling

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
ModuleRegistry.registerModules([ClientSideRowModelModule, SetFilterModule]);

import Form from './Form';
import CarGrid from './CarGrid';

const GridExample = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Tesla", model: "Model 3", price: 42990, electric: true },
    { make: "Tesla", model: "Model S", price: 89990, electric: true },
    { make: "Tesla", model: "Model X", price: 99990, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Ford", model: "Mustang", price: 55940, electric: false },
    { make: "Ford", model: "Explorer", price: 45870, electric: false },
    { make: "Ford", model: "Mach-E", price: 42995, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Camry", price: 25000, electric: false },
    { make: "Toyota", model: "Prius", price: 24325, electric: true },
    { make: "Toyota", model: "Highlander", price: 34985, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Mercedes", model: "A-Class", price: 33450, electric: false },
    { make: "Mercedes", model: "C-Class", price: 41100, electric: false },
    { make: "Mercedes", model: "EQC", price: 67900, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Fiat", model: "Panda", price: 14000, electric: false }, 
    { make: "Fiat", model: "Tipo", price: 20475, electric: false },
    { make: "Fiat", model: "500 Electric", price: 29900, electric: true },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Nissan", model: "Qashqai", price: 27300, electric: false },
    { make: "Nissan", model: "Leaf", price: 31900, electric: true },
    { make: "Nissan", model: "Ariya", price: 46600, electric: true },
    { make: "Tesla", model: "Roadster", price: 200000, electric: true },
    { make: "Ford", model: "Ranger", price: 27500, electric: false },
    { make: "Toyota", model: "RAV4", price: 26750, electric: false },
    { make: "Mercedes", model: "GLE", price: 55900, electric: false },
    { make: "Fiat", model: "Doblo", price: 21000, electric: false },
    { make: "Nissan", model: "Murano", price: 32700, electric: false },
  ]);

  return (
    <div className="grid-example-container">
      <Form setRowData={setRowData} />
      <CarGrid rowData={rowData} />
    </div>
  );
}

export default GridExample;
