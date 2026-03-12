import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Assets from './pages/Assets';
import Allocated from './pages/Allocated';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-900 text-white py-6 px-10 flex gap-6">
          <Link to="/" className="hover:text-blue-400 font-bold text-2xl">Inventory</Link>
          <Link to="/allocated" className="hover:text-blue-400 font-bold text-2xl">My Workspace</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Assets />} />
          <Route path="/allocated" element={<Allocated />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}