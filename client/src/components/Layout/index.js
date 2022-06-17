import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div style={{ height: 'auto', overflow: 'auto' }}>
    <div className='fixed-top'>
      <Nav />
    </div>
    {children}
    <div className='fixed-bottom'>
      <Footer />
    </div>
  </div>
);
export default Layout;
