import { useState } from 'react';
import './App.css';

function App() {
  const [fields, setFields] = useState([{ value: '' }]); // Initialize state for dynamic fields

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { value: '' }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from reloading
    alert("Form submitted");  // Check if this is logged when you submit
    setFields([{value: ''}])
  };
  
  

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="field-group">
            <input
              type="text"
              placeholder={`Field ${index + 1}`}
              value={field.value}
              onChange={(event) => handleChange(index, event)}
              required
            />
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
