import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container  p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Careers</li>
            <li className="mb-2">Press</li>
            <li className="mb-2">Policies</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">Discover</h4>
          <ul>
            <li className="mb-2">Trust & Safety</li>
            <li className="mb-2">Travel Credit</li>
            <li className="mb-2">Gift Cards</li>
            <li className="mb-2">Dormease Citizen</li>
            <li className="mb-2">Business Travel</li>
            <li className="mb-2">Guidebooks</li>
            <li>Dormease Magazine</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">Hosting</h4>
          <ul>
            <li className="mb-2">Host your home</li>
            <li className="mb-2">Host an Experience</li>
            <li className="mb-2">Responsible Hosting</li>
            <li className="mb-2">Open Homes</li>
            <li>Community Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-4">Community</h4>
          <ul>
            <li className="mb-2">Diversity & Belonging</li>
            <li className="mb-2">Accessibility</li>
            <li className="mb-2">Dormease Associates</li>
            <li className="mb-2">Frontline Stays</li>
            <li>Invite Friends</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Airbnb, Inc. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
