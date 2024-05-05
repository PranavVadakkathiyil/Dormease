import React from 'react';

const AddProperty = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg">
        <h1 className="text-2xl mb-4">Connect Your Website to Add Property</h1>
        <div className="mb-4">
          <p className="text-lg">
            To integrate your  property with our Website follow these steps:
          </p>
        </div>
        <ol className="list-decimal pl-4 mb-4">
          <li className="text-lg">Email Your Details about Your Propery</li>
          <p>Like Images Location etc...</p>
          <li className="text-lg">checked by special team from our part</li>
          <li className="text-lg">After Visiting The Site We Provide Permission to access our Admin Dashboard </li>
          <li className="text-lg">Then You Can Add Your Property To Our Website</li>
        </ol>
        <p className="text-lg">
          If you encounter any issues during the integration process, don't hesitate to contact our support team for assistance.
        </p>
        
        <a href='tel:555-666-7777'>Call tO : 555-666-7777</a>
        <br />
        <a href="mailto:Dormease@gmail.com">Email : Dormease@gmail.com</a>
      </div>
    </div>
  );
};

export default AddProperty;
