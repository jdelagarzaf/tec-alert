import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Jugar from './pages/Jugar';
import IniciarSesion from './pages/IniciarSesion';
import Registrar from './pages/Registrar';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/jugar" element={<Jugar />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTopButton />
      </AuthProvider>
    </Router>
  );
}

export default App;
