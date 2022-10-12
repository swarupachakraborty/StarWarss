import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Screen01 from './Components/Screen/Screen01';
import Screen02 from './Components/Screen/Screen02';

function App() {

  return (
    <div className="App">
     <h1>Star Wars</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Screen01/>} />
          <Route path='/charDetails' element={<Screen02/>} />
          <Route path=':charId' element={<Screen02/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
