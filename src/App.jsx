import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import SearchDetails from "./components/BusinessDetails/SearchDetails";
import BusinessDetailData from "./components/BusinessDetails/BusinessDetailData";
import Dashboard from "./pages/Dashboard";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import Registration from "./components/Registration/Registration";
import { Business } from "./pages/Business";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProfile from "./components/Dashboard/AddProfile";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import DeleteAccountPage from "./components/Dashboard/DeleteAccountPage";
import FeatureViewAllBusiness from "./components/BusinessDetails/FeatureViewAllBusiness";

// ✅ Wrapper for handling scroll-to-top on route change
function ScrollToTopWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, [location.pathname]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/business-details" element={<SearchDetails />} />
        <Route path="/business" element={<Business />} />
        <Route path="/business-details-data" element={<BusinessDetailData />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/featured-businesses" element={<FeatureViewAllBusiness />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addProfile" element={<AddProfile />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Route>
    </Routes>
  );
}

// ✅ Main App component
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ScrollToTopWrapper />
        </BrowserRouter>
      </PersistGate>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  );
}

export default App;
