import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Home from "./pages/Home";
import { Header } from "./components/Navbar/Header";
import { Footer } from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import SearchDetails from "./components/BusinessDetails/SearchDetails";
import BusinessDetailData from "./components/BusinessDetails/BusinessDetailData";
import Dashboard from "./pages/Dashboard";
import { Login } from "./components/Auth/Login";
import { SignUp } from "./components/Auth/SignUp";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Public Routes without Auth Check */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/business-details" element={<SearchDetails />} />
            <Route
              path="/business-details-data"
              element={<BusinessDetailData />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
