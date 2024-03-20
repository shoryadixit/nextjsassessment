import Image from 'next/image';
import React from 'react';
import logo from '/public/assets/logo.svg';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { FaChevronDown } from 'react-icons/fa6';

function Navbar({ NavTabs }) {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <div className='flex items-center fixed top-2 z-[1] justify-between w-full max-w-[1350px] gap-20'>
        <div className='relative flex w-[300px] h-14'>
          <Image src={logo} fill alt='Logo' className='object-contain' />
        </div>
        <div className='flex items-center justify-between w-full gap-6'>
          {Array.isArray(NavTabs) &&
            NavTabs.map((item) => (
              <div
                key={get(item, 'key', 0)}
                className='flex items-center justify-center gap-2'
              >
                <p className='font-jost font-[300] text-[20px] text-white'>
                  {get(item, 'label', '')}
                </p>
                {get(item, 'children', false) ? (
                  <FaChevronDown color='#fff' />
                ) : (
                  <></>
                )}
              </div>
            ))}
        </div>
        <div className='flex bg-gradient-to-br from-blue-500 via-blue-600 px-5 py-2 rounded-[8px] to-purple-700 w-fit whitespace-nowrap'>
          <button className='font-jost font-[400] text-[20px] text-white'>
            Request An Audit
          </button>
        </div>
      </div>
      <div className='flex w-full absolute z-[1] top-20 h-[2px] max-w-[1350px] bg-white bg-opacity-10' />
    </div>
  );
}

Navbar.propTypes = {
  NavTabs: PropTypes.array.isRequired,
};

export default Navbar;
