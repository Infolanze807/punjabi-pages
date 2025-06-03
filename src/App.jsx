import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Navbar/Header';
import {Footer} from './components/Footer/Footer';  
import {Login} from './components/Auth/Login';
import {SignUp} from './components/Auth/SignUp';

function App() {
  return (
   <>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </>
  );
}

export default App;
