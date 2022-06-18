import React from 'react';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";
import CompsRecords from "./components/Comps/CompsRecords";

function App() {
return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CompsRecords/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
