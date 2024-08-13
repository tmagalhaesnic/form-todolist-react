import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/identificacao');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="text-white">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
