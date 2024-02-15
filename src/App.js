import Sidebar from "./Component/sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Kuy from './Component/kuy'
import Parent from './Component/parent'
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/kuy" element={<Parent />} />
      </Routes>
    </Router>
  );
}

export default App;
