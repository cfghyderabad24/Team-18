import React, { useState } from 'react';
import './NewVolunteer.css'; // Import CSS for styling

const NewVolunteer = ({ addVolunteer }) => {
  const initialFormState = {
    volunteerName: '',
    contactNumber: '',
    state: '',
    village: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVolunteer(formData);
    setFormData(initialFormState); // Reset form
  };

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <h2>Add New Volunteer</h2>
      <div className="form-group">
        <label htmlFor="volunteerName">Name of the Volunteer:</label>
        <input
          type="text"
          id="volunteerName"
          name="volunteerName"
          value={formData.volunteerName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="village">Village:</label>
        <input
          type="text"
          id="village"
          name="village"
          value={formData.village}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Volunteer</button>
    </form>
  );
};

export default NewVolunteer;
