import React from 'react';
import './index.css'; // Make sure to create this CSS file

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-35 z-50">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
