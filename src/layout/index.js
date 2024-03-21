import Navbar from '@/components/navbar';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '@/components/footer';

function PageWrapper({ children }) {
  const navData = [
    { key: 1, label: 'Services', children: true },
    { key: 2, label: 'Pricing', children: false },
    { key: 3, label: 'Our Audits', children: false },
    { key: 4, label: 'Tools', children: true },
    { key: 5, label: 'Resources', children: true },
    { key: 6, label: 'Refer-Earn-Secure', children: false },
  ];
  return (
    <>
      <Navbar NavTabs={navData} />
      {children}
      <Footer />
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PageWrapper;
