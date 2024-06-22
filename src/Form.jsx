import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ setRowData }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [electric, setElectric] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRow = {
      make,
      model,
      price: parseFloat(price),
      electric,
    };
    setRowData(prevRows => [...prevRows, newRow]);
    setMake('');
    setModel('');
    setPrice('');
    setElectric(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          Make:
          <input type="text" value={make} onChange={(e) => setMake(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Model:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Electric:
          <input
            type="checkbox"
            checked={electric}
            onChange={(e) => setElectric(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit" className="add-button">Add Entry</button>
    </form>
  );
};

Form.propTypes = {
  setRowData: PropTypes.func.isRequired,
};

export default Form;
