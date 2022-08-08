import './App.css';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./home"
import Thankyou from './component/thankyou';
import Testtest from './testtest';



function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/test" element={<Testtest />} />
        </Routes>
      </HashRouter>


    </>
  );
}

export default App;
