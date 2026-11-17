import React, { useState } from 'react';
import Bookings from './Bookings';
import Users from './Users';
import Employee from './Employee';
import Servicesoffered from './Servicesoffered';

const Navdrower = () => {
  const [currentPage, setCurrentPage] = useState("users");

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Salon Gerente
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none ${currentPage === 'users' ? 'active fw-bold' : ''}`}
                  onClick={() => setCurrentPage("users")}
                >
                  Users
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none ${currentPage === 'bookings' ? 'active fw-bold' : ''}`}
                  onClick={() => setCurrentPage("bookings")}
                >
                  Bookings
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none ${currentPage === 'assistance' ? 'active fw-bold' : ''}`}
                  onClick={() => setCurrentPage("assistance")}
                >
                  Assistance
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none ${currentPage === 'services' ? 'active fw-bold' : ''}`}
                  onClick={() => setCurrentPage("services")}
                >
                  Services
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {currentPage === "users" && <Users />}
        {currentPage === "bookings" && <Bookings />}
        {currentPage === "assistance" && <Employee />}
        {currentPage === "services" && <Servicesoffered />}
      </div>
    </div>
  );
};

export default Navdrower;
