import './App.css';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./home"
import Thankyou from './component/thankyou';



function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </HashRouter>


    </>
  );
}

export default App;
