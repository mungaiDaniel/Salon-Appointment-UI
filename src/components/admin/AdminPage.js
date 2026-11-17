import React from 'react';
import Bookings from './Bookings';
import './styles.css';

const AdminPage = () => {
  return (
    <div className="app">
      <div className="wizard">
        <Bookings />
      </div>
    </div>
  );
};

export default AdminPage;
