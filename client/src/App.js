import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Ngo from './Components/Ngo'
import Restaurants from './Components/Restaurant'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ngo' element={<Ngo />} />
          <Route path='/restro' element={<Restaurants />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
