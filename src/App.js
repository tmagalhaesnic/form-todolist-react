import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { TasksProvider } from './contexts/TasksContext';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/identificacao" element={<LoginForm />} />
            <Route
              path="/home"
              element={<PrivateRoute element={TaskList} />}
            />
            <Route path="/" element={<Navigate to="/identificacao" />} />
          </Routes>
        </Router>
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;
