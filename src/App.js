import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Jinapps from './jin-apps';
import TypeCalculator from './type-calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/pokemon" />} />
            <Route path="/jinapp/*" element={<Jinapps/>} />
            <Route path="/pokemon/*" element={<TypeCalculator/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
