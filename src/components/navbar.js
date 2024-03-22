import Image from 'next/image';
import React from 'react';
import logo from '/public/assets/logo.svg';
import MobileLogo from '/public/assets/mobileLogo.svg';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { FaChevronDown } from 'react-icons/fa6';
import { LuMenu } from 'react-icons/lu';
import Link from 'next/link';

function Navbar({ NavTabs }) {
  return (
    <div
      className='relative flex w-full items-center justify-center'
      style={{
        background:
          'linear-gradient(90.3deg, #2B4D93 -10.68%, #0E205B 27.98%, #162867 55.94%, #323A87 103.52%)',
      }}
    >
      <div className='flex py-3 px-4 sm:px-10 items-center static z-[1] lg:max-w-[1350px] justify-between w-full gap-20'>
        <div className='relative hidden lg:flex w-[300px] h-14'>
          <Link href={'/'}><Image src={logo} fill alt='Logo' className='cursor-pointer object-contain' /></Link>
        </div>

        <div className='relative flex lg:hidden w-[35px] sm:w-[50px] h-14'>
          <Image src={MobileLogo} fill alt='Logo' className='cursor-pointer object-contain' />
        </div>

        <div className='hidden lg:flex items-center justify-between w-full gap-6'>
          {Array.isArray(NavTabs) &&
            NavTabs.map((item) => (
              <div
                key={get(item, 'key', 0)}
                className='cursor-pointer flex items-center justify-center gap-2'
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
        
        <div className='cursor-pointer flex bg-gradient-to-br from-blue-500 via-blue-600 px-5 py-2 rounded-[8px] to-purple-700 w-fit whitespace-nowrap'>
          <button className='font-jost font-[400] text-[14px] sm:text-[20px] text-white'>
            Request An Audit
          </button>
        </div>

        <LuMenu color='#fff' className='flex lg:hidden text-[25px]' />
      </div>
      <div className='hidden sm:flex w-full absolute z-[1] top-20 h-[2px] max-w-[1350px] bg-white bg-opacity-10' />
    </div>
  );
}

Navbar.propTypes = {
  NavTabs: PropTypes.array.isRequired,
};

export default Navbar;
