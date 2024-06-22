import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    pincode: '',
    aadharNumber: '',
    contactNumber: '',
    state: '',
    village: '',
    age: '',
    gender: '',
    areaPloughed: '',
    season: '',
    cropGrown: '',
    seedsUsed: '',
    varietyUsed: '',
    quantityUsed: '',
    dateOfSeedSown: '',
    transplanting: '',
    irrigationMethod: '',
    fertilizersUsed: '',
    dateOfHarvesting: '',
    yield: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/form', formData);
      console.log('Form submitted successfully', response.data);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <FormContainer className="colorgradient">
      <h1>Edit Farmer's Information</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Farmer's Name
          <input type="text" name="farmerName" value={formData.farmerName} onChange={handleChange} required />
        </label>
        <label>
          Pincode
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </label>
        <label>
          Aadhar Number
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
        </label>
        <label>
          Contact Number
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </label>
        <label>
          State
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </label>
        <label>
          Village
          <input type="text" name="village" value={formData.village} onChange={handleChange} required />
        </label>
        <label>
          Age
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <label>
          Gender
          <div>
            <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} required />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} required />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} required />
            <label htmlFor="other">Other</label>
          </div>
        </label>
        <label>
          Area Ploughed (acres)
          <input type="number" name="areaPloughed" step="0.01" value={formData.areaPloughed} onChange={handleChange} required />
        </label>
        <label>
          Season
          <input type="text" name="season" value={formData.season} onChange={handleChange} required />
        </label>
        <label>
          Crop Grown
          <input type="text" name="cropGrown" value={formData.cropGrown} onChange={handleChange} required />
        </label>
        <label>
          Seeds Used
          <select name="seedsUsed" value={formData.seedsUsed} onChange={handleChange} required>
            <option value="">Select Seed Source</option>
            <option value="Own">Own</option>
            <option value="Given by IFTR">Given by IFTR</option>
            <option value="Purchased from Outside">Purchased from Outside</option>
          </select>
          <input type="text" name="varietyUsed" placeholder="Variety Used" value={formData.varietyUsed} onChange={handleChange} required />
          <input type="number" name="quantityUsed" placeholder="Quantity Used" value={formData.quantityUsed} onChange={handleChange} required />
        </label>
        <label>
          Date of Seed Sown
          <input type="date" name="dateOfSeedSown" value={formData.dateOfSeedSown} onChange={handleChange} required />
        </label>
        <label>
          Transplanting
          <select name="transplanting" value={formData.transplanting} onChange={handleChange} required>
            <option value="">Select Transplanting Method</option>
            <option value="Manual">Manual</option>
            <option value="Machine">Machine</option>
          </select>
        </label>
        <label>
          Irrigation Method
          <select name="irrigationMethod" value={formData.irrigationMethod} onChange={handleChange} required>
            <option value="">Select Irrigation Method</option>
            <option value="Borewell">Borewell</option>
            <option value="Well">Well</option>
            <option value="River">River</option>
            <option value="Drip Irrigation">Drip Irrigation</option>
          </select>
        </label>
        <label>
          Fertilizers Used
          <select name="fertilizersUsed" value={formData.fertilizersUsed} onChange={handleChange} required>
            <option value="">Select Fertilizer Type</option>
            <option value="Organic">Organic</option>
            <option value="Chemical">Chemical</option>
            <option value="Bioinputs">Bioinputs</option>
          </select>
        </label>
        <label>
          Date of Harvesting
          <input type="date" name="dateOfHarvesting" value={formData.dateOfHarvesting} onChange={handleChange} required />
        </label>
        <label>
          Yield (kg)
          <input type="number" name="yield" step="0.01" value={formData.yield} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
    </FormContainer>
  );
};

export default App;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const

 StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    text-align: center;
    color: #333;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 5px;
    }
  }

  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
  }

  button {
    padding: 10px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background: #45a049;
    }
  }
`;