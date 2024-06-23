import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './DataCharts.css';

function DataCharts() {
    const farmersData = [
        { name: "Ram", age: 45, gender: "Male", fieldSize: 10, pincode: 504105, state: "Telangana", village: "Nirmal", yield: 5000, cropType: "Wheat", irrigationMethod: "Borewell", fertilizerUse: "Organic" },
        { name: "Nirmala", age: 38, gender: "Female", fieldSize: 15, pincode: 522601, state: "AndhraPradesh", village: "Narasaraopet", yield: 7000, cropType: "Rice", irrigationMethod: "Well", fertilizerUse: "Chemical" },
        { name: "Sriram", age: 50, gender: "Male", fieldSize: 20, pincode: 560068, state: "Karnataka", village: "Bommanahalli", yield: 6000, cropType: "Corn", irrigationMethod: "River", fertilizerUse: "Bioinputs" },
        { name: "Sita", age: 42, gender: "Female", fieldSize: 25, pincode: 688529, state: "Kerala", village: "Pattanakkad", yield: 8000, cropType: "Soybean", irrigationMethod: "Drip Irrigation", fertilizerUse: "Organic" },
        { name: "Venkatesu", age: 60, gender: "Male", fieldSize: 5, pincode: 636001, state: "TamilNadu", village: "Salem", yield: 3000, cropType: "Barley", irrigationMethod: "Borewell", fertilizerUse: "Chemical" },
        { name: "Lakshmi", age: 48, gender: "Female", fieldSize: 8, pincode: 501508, state: "Telangana", village: "Manchal", yield: 4500, cropType: "Wheat", irrigationMethod: "Well", fertilizerUse: "Bioinputs" },
        { name: "Shivayya", age: 55, gender: "Male", fieldSize: 12, pincode: 522509, state: "AndhraPradesh", village: "Peddakakani", yield: 6500, cropType: "Rice", irrigationMethod: "River", fertilizerUse: "Organic" },
        { name: "Shivani", age: 35, gender: "Female", fieldSize: 18, pincode: 573201, state: "Karnataka", village: "Hassan", yield: 7200, cropType: "Corn", irrigationMethod: "Drip Irrigation", fertilizerUse: "Chemical" },
        { name: "Prasad", age: 40, gender: "Male", fieldSize: 22, pincode: 683541, state: "Kerala", village: "Irapuram", yield: 8100, cropType: "Soybean", irrigationMethod: "Borewell", fertilizerUse: "Bioinputs" },
        { name: "Vijaya", age: 37, gender: "Female", fieldSize: 7, pincode: 602003, state: "TamilNadu", village: "Thiruvallur", yield: 3200, cropType: "Barley", irrigationMethod: "Well", fertilizerUse: "Organic" }
    ];

    const [selectedField, setSelectedField] = useState("irrigationMethod");
    const [selectedXAxis, setSelectedXAxis] = useState("cropType");
    const [selectedYAxis, setSelectedYAxis] = useState("yield");

    const getPieData = (field) => {
        const groupedData = farmersData.reduce((acc, farmer) => {
            const key = farmer[field];
            if (!acc[key]) {
                acc[key] = 0;
            }
            acc[key] += farmer.yield;
            return acc;
        }, {});

        return Object.keys(groupedData).map(key => ({
            name: key,
            value: groupedData[key]
        }));
    };

    const getBarData = (xField, yField) => {
        const groupedData = farmersData.reduce((acc, farmer) => {
            const key = farmer[xField];
            if (!acc[key]) {
                acc[key] = { name: key, value: 0 };
            }
            acc[key].value += farmer[yField];
            return acc;
        }, {});

        return Object.values(groupedData);
    };

    const pieData = getPieData(selectedField);
    const barData = getBarData(selectedXAxis, selectedYAxis);

    return (
        <>
            <div className="unique">
                <h1 style={{ color: "#32c36c" }}>Visualization through Charts</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '500px', width: '100%' }}>
                    <div style={{ width: '50%' }}>
                        <label htmlFor="fieldSelector">Select Field for Pie Chart: </label>
                        <select id="fieldSelector" value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
                            <option value="fieldSize">Field Size</option>
                            <option value="irrigationMethod">Irrigation Method</option>
                            <option value="fertilizerUse">Fertilizer Use</option>
                        </select>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={true}
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#32c36c"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={{ width: '50%' }}>
                        <div>
                            <label htmlFor="xAxisSelector">Select X Axis: </label>
                            <select id="xAxisSelector" value={selectedXAxis} onChange={(e) => setSelectedXAxis(e.target.value)}>
                                <option value="cropType">Crop Type</option>
                                <option value="state">State</option>
                                <option value="village">Village</option>
                            </select>
                            <label htmlFor="yAxisSelector">Select Y Axis: </label>
                            <select id="yAxisSelector" value={selectedYAxis} onChange={(e) => setSelectedYAxis(e.target.value)}>
                                <option value="yield">Yield</option>
                                <option value="fieldSize">Field Size</option>
                            </select>
                        </div>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={barData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }}  />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#32c36c" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataCharts;