import React from 'react';

const ContactOutput = ({ fName, lName, number }) => {
  return (
    <div>
      <h1>
        Thanks {fName} {lName} for Your interest for providing your number{' '}
        {number}
      </h1>
    </div>
  );
};

export default ContactOutput;
