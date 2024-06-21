import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Components from './components/Components';
import Utill from './components/Utill';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/utill" element={<Utill />} />
    </Routes>
  );
}

export default App;
