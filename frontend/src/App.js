import React, { useEffect, useState } from 'react';

function App() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/aimodels/')
      .then(response => response.json())
      .then(data => setModels(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to AIMart, Shreyas!</h1>
      <ul>
        {models.map(model => (
          <li key={model.id}>
            <strong>{model.name}</strong> - {model.category} - ${model.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
