import Navbar from '@/components/navbar';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '@/components/footer';
import { UAParser } from 'ua-parser-js';
import determineDeviceType from '@/utils/determinDeviceType';

export async function getServerSideProps({ req }) {
  const userAgent = req.headers['user-agent'];
  const parser = new UAParser();
  const parsedUserAgent = parser.setUA(userAgent).getResult();
  const deviceType = determineDeviceType(parsedUserAgent);
  return {
    props: {
      deviceType,
    },
  };
}
function PageWrapper({ children, deviceType }) {
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
      <Footer deviceType={deviceType} />
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  deviceType: PropTypes.string.isRequired,
};

export default PageWrapper;
