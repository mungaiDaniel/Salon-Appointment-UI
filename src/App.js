import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Navdrower from './components/admin/Navdrower';
import Login from './components/auth/LoginInfo';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Book from './components/BookAppointment/Book';
import Signup from './components/auth/Signup';
import Users from './components/admin/Users';
import Servicesoffered from './components/admin/Servicesoffered';
import Bookings from './components/admin/Bookings';
import Employee from './components/admin/Employee';
import DemoBanner from './components/DemoBanner';
import { isDemoMode } from './demo';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <div className="App">
      {isDemoMode() && <DemoBanner />}
      {!isAdmin && <NavBar />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/book" element={<Book />} />
        <Route path="/admin" element={<Navdrower />} />
        <Route path="/employee" element={<Book />} />
        <Route path="/users" element={<Users />} />
        <Route path="/services" element={<Servicesoffered />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/assistance" element={<Employee />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <div className='footer'>
        {!isAdmin && <Footer />}
      </div>
    </div>
  );
}
export default App;
