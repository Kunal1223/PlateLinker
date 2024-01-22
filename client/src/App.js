import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Ngo from './Components/NGO/Ngo'
import RESState from './Components/context/RES/RESState';
import NGOState from './Components/context/NGO/NGOState';
import Restaurant from './Components/Restaurant/Restaurant';


function App() {
  return (
    <>

      <RESState>

      <NGOState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ngo' element={<Ngo />} />
          <Route path='/restro' element={<Restaurant/>} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </NGOState >
      </RESState >
    </>
  );
}

export default App;
