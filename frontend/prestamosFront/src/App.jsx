import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Importa tus componentes de página
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router>
      <div>
        {/* Links de navegación */}
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        {/* Definición de rutas */}
        <Routes>
        <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          
                
          {/* Ruta por defecto o 'fallback' */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
