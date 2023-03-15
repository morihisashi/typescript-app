import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Listpage } from './pages/Listpage';
import { Aboutpage } from './pages/Aboutpage';
import { Practicalpage } from './pages/Practicalpage';
import { PracticalList } from './pages/Practicallist';
import { Notpage } from './pages/Notpage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<Listpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/practical" element={<Practicalpage />} />
        <Route path="/practicallist" element={<PracticalList/>} />
        <Route path="*" element={<Notpage title="ページが見つかりません"/>} />
      </Routes>
    </div>
  );
}

