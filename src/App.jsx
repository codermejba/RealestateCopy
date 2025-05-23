//https://hously-react.vercel.app/index-six

/* import slider styles */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<h1>404</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
