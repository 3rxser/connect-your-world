
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-500 text-sm py-6">
      <p>© {year} • Connect with Me • All rights reserved</p>
    </footer>
  );
};

export default Footer;
