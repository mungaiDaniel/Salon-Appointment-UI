import React from 'react';
import { useState } from 'react';
import Bookings from './Bookings';
import Users from './Users';
import Employee from './Employee';
import Servicesoffered from './Servicesoffered';



const Navdrower = () => {

  const [currentPage, setCurrentPage] = useState("users")

    return (
      <div  >
        <nav class="navbar navbar-expand-md navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Salon Gerente</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=> setCurrentPage("users")} href="#">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=> setCurrentPage("bookings")}>Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=> setCurrentPage("assisstance")}>Assisstance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" onClick={()=> setCurrentPage("services")} aria-disabled="true">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {currentPage === "users" && <Users />}
      {currentPage === "bookings" && <Bookings/>}
      {currentPage === "assisstance" && <Employee />}
      {currentPage === "services" && <Servicesoffered/>}
      </div>
    );
  }
  
export default Navdrower
