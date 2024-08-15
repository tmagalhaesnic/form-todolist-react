import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

function Identificacao() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate();

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    if (input.trim() !== '') {
      login(input);
      navigate('/todos');
    } else {
      setError('Por favor, insira seu nome ou e-mail.');
    }
  }

  return (
    <div className="identification">
      <h1>Identifique-se</h1>
      <input
        type="text"
        placeholder="Insira seu nome ou e-mail..."
        value={input}
        onChange={handleChange}
      />
      <button className='submit-buttons' onClick={handleSubmit}>Entrar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Identificacao;
