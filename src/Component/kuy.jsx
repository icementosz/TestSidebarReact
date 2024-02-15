import React from 'react';
import './kuy.css'; // Assuming your styles are here

function Kuy({ isSidebarActive }) {

  return (
    <div className='kuyza'>
      <div className={`kuy-container ${!isSidebarActive ? 'kuy-container-full-page' : ''}`}>
        kuy content
      </div>
    </div>
  );
}

export default Kuy;
