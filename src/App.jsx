import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Identificacao from './components/Identificacao';
import ToDoList from './components/ToDoList';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Identificacao />} />
          <Route path="/home" element={<ProtectedRoute element={<ToDoList />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
