import { Route, Routes } from 'react-router-dom';
import './App.css';
import Resume from './Component/Resume';

function App() {
  return (
    <div className="App">
      <h1>Portfolio Loading</h1>
      <Routes>
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
