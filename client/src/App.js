import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Routes/Home/Home';
import { Classified } from './Routes/Classified/Classified';

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classified" element={<Classified />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
