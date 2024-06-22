import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    village: '',
    state: '',
    pincode: '',
    aadharNumber: '',
    areaPloughed: '',
    fertilizersUsed: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/auth/signup', formData);
      console.log('Form submitted successfully', response.data);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <FormContainer>
      <h1>Edit Farmer's Information</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Pincode
          <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </label>
       
        <label>
          State
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
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
          Fertilizers Used
          <select name="fertilizersUsed" value={formData.fertilizersUsed} onChange={handleChange} required>
            <option value="">Select Fertilizer Type</option>
            <option value="Organic">Organic</option>
            <option value="Chemical">Chemical</option>
            <option value="Bioinputs">Bioinputs</option>
          </select>
        </label>
        <button className="button-71" type="submit">Submit</button>
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

const StyledForm = styled.form`
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

  .button-71 {
    background-color: #0078d0;
    border: 0;
    border-radius: 56px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-size: 18px;
    font-weight: 600;
    outline: 0;
    padding: 16px 21px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  @media (min-width: 768px) {
    .button-71 {
      padding: 16px 48px;
    }
  }
`;
