import React, { useState , useEffect} from 'react';
import { AgGridReact } from '@ag-grid-community/react'; // React Grid Logic
import '@ag-grid-community/styles/ag-grid.css'; // Core CSS
import '@ag-grid-community/styles/ag-theme-alpine.css'; // Theme CSS
import './GridExample.css'; // Custom CSS for styling

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
ModuleRegistry.registerModules([ClientSideRowModelModule, SetFilterModule]);
 
const GridExample = () => {
  // const [rowData, setRowData] = useState([
  //   // { name: "Ram", age: 45, gender: "Male", fieldSize: 10, pincode: 504105, state: "Telangana", village: "Nirmal", yield: 5000, cropType: "Wheat", irrigationMethod: "Borewell", fertilizerUse: "Organic" },
  //   // { name: "Nirmala", age: 38, gender: "Female", fieldSize: 15, pincode: 522601, state: "Andhra Pradesh", village: "Narasaraopet", yield: 7000, cropType: "Rice", irrigationMethod: "Well", fertilizerUse: "Chemical" },
  //   // { name: "Sriram", age: 50, gender: "Male", fieldSize: 20, pincode: 560068, state: "Karnataka", village: "Bommanahalli", yield: 6000, cropType: "Corn", irrigationMethod: "River", fertilizerUse: "Bioinputs" },
  //   // { name: "Sita", age: 42, gender: "Female", fieldSize: 25, pincode: 688529, state: "Kerala", village: "Pattanakkad", yield: 8000, cropType: "Soybean", irrigationMethod: "Drip Irrigation", fertilizerUse: "Organic" },
  //   // { name: "Venkatesu", age: 60, gender: "Male", fieldSize: 5, pincode: 636001, state: "Tamil Nadu", village: "Salem", yield: 3000, cropType: "Barley", irrigationMethod: "Borewell", fertilizerUse: "Chemical" },
  //   // { name: "Lakshmi", age: 48, gender: "Female", fieldSize: 8, pincode: 501508, state: "Telangana", village: "Manchal", yield: 4500, cropType: "Wheat", irrigationMethod: "Well", fertilizerUse: "Bioinputs" },
  //   // { name: "Shivayya", age: 55, gender: "Male", fieldSize: 12, pincode: 522509, state: "Andhra Pradesh", village: "Peddakakani", yield: 6500, cropType: "Rice", irrigationMethod: "River", fertilizerUse: "Organic" },
  //   // { name: "Shivani", age: 35, gender: "Female", fieldSize: 18, pincode: 573201, state: "Karnataka", village: "Hassan", yield: 7200, cropType: "Corn", irrigationMethod: "Drip Irrigation", fertilizerUse: "Chemical" },
  //   // { name: "Prasad", age: 40, gender: "Male", fieldSize: 22, pincode: 683541, state: "Kerala", village: "Irapuram", yield: 8100, cropType: "Soybean", irrigationMethod: "Borewell", fertilizerUse: "Bioinputs" },
  //   // { name: "Vijaya", age: 37, gender: "Female", fieldSize: 7, pincode: 602003, state: "Tamil Nadu", village: "Thiruvallur", yield: 3200, cropType: "Barley", irrigationMethod: "Well", fertilizerUse: "Organic" }
  // ]);


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/visual/visualData' , {
          method: 'POST',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
}, [])

  const columnDefs = [
    { headerName: "Name", field: "name", filter: 'agSetColumnFilter' },
    { headerName: "Age", field: "age", filter: 'agNumberColumnFilter' },
    { headerName: "Gender", field: "gender", filter: 'agSetColumnFilter' },
    { headerName: "Field Size (acres)", field: "fieldSize", filter: 'agNumberColumnFilter' },
    { headerName: "Pincode", field: "pincode", filter: 'agNumberColumnFilter' },
    { headerName: "State", field: "state", filter: 'agSetColumnFilter' },
    { headerName: "Village", field: "village", filter: 'agSetColumnFilter' },
    { headerName: "Yield (kg)", field: "yield", filter: 'agNumberColumnFilter' },
    { headerName: "Crop Type", field: "cropType", filter: 'agSetColumnFilter' },
    { headerName: "Irrigation Method", field: "irrigationMethod", filter: 'agSetColumnFilter' },
    { headerName: "Fertilizer Use", field: "fertilizerUse", filter: 'agSetColumnFilter' }
  ];

  return (
    <div className="grid-example-container">
      <h1>FARMERS AND THEIR DETAILS</h1>
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            floatingFilter: true,
            resizable: true,
          }}
        />
      </div>
    </div>
  );
}

export default GridExample;
