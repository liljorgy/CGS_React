import './App.css';
import HomePage from "./components/HomePage";
import { Route, Routes } from 'react-router-dom';
import RecordList from './components/recordList';

function App() {
return (
    <div>
      <HomePage />
      <Routes>
        <Route exact path="/test" element={<RecordList />} />
      </Routes>
    </div>
  );
}

export default App;
