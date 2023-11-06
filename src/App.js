import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
//import <APP NAME> from './wherever it actually is';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        test text
      </header>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/jinapp" />} />
            {/* <Route path="/jinapp/*" element={< />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
