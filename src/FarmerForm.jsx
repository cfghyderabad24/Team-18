import React, { useState } from 'react';
import './FarmerForm.css'; // Import CSS for styling

const FarmerForm = ({ addFarmer }) => {
  const initialFormState = {
    name: '',
    age: '',
    gender: '',
    fieldSize: '',
    pincode: '',
    state: '',
    village: '',
    yield: '',
    cropType: '',
    irrigationMethod: '',
    fertilizerUse: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFarmer(formData);
    setFormData(initialFormState); // Reset form
  };

  return (
    <form className="farmer-form" onSubmit={handleSubmit}>
      <h2>Add New Farmer</h2>
      {Object.keys(initialFormState).map((key) => (
        <div className="form-group" key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type="text"
            id={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Add Farmer</button>
    </form>
  );
};

export default FarmerForm;
