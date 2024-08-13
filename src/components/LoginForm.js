import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [input, setInput] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      login(input);
      navigate('/home');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Identifique-se</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Digite seu nome ou e-mail"
        />
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
