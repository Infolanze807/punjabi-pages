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
import SearchDetails from './components/BusinessDetails/SearchDetails';
import BusinessDetailData from './components/BusinessDetails/BusinessDetailData';

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
            <Route path='/business-details' element={<SearchDetails />} />
            <Route path='/business-details-data' element={<BusinessDetailData />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </>
  );
}

export default App;
