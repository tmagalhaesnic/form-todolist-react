import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Identificacao from './components/identificacao';
import ToDoList from './components/ToDoList';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Identificacao />} />
          <Route path="/todos" element={<ToDoList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
