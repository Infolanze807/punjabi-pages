import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Navbar/Header';
import {Footer} from './components/Footer/Footer';  
import {Login} from './components/Auth/Login';
import {SignUp} from './components/Auth/SignUp';
import Contact from './pages/Contact';
import About from './pages/About';
import Categories from './pages/Categories';

function App() {
  return (
   <>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/categories' element={<Categories />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </>
  );
}

export default App;
