import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; // Importa ChakraProvider desde Chakra UI
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Tareas from './pages/Tareas';
import './App.css';

function App() {
  return (
    <ChakraProvider> 
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
