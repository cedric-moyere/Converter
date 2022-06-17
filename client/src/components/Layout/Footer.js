import { React, useEffect, useState } from 'react';
const Footer = () => {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const checkSingleDigit = digit => {
    return ('0' + digit).slice(-2);
  };

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(() => checkSingleDigit(date.getHours()));
      setMin(() => checkSingleDigit(date.getMinutes()));
    }, 1000);
  });

  return (
    <nav className='navbar fixed-bottom navbar-dark bg-primary d-flex justify-content-end'>
      <div className='navbar-brand'>
        <small>{`${new Date().toLocaleDateString().slice(0, 10)} - ${hours}:${min}`}</small>
      </div>
    </nav>
  );
};
export default Footer;
