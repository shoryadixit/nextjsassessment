import Image from 'next/image';
import React from 'react';
import FooterLogo from '/public/assets/footerLogo.svg';
import BannerImage from '/public/assets/BannerImage.webp';
import MailIcon from '/public/assets/mail.svg';
import TelegramIcon from '/public/assets/telegram.svg';
import LocationIcon from '/public/assets/location.svg';
import FooterBottomLogo1 from '/public/assets/FooterBottomLogo.webp';
import FooterBottomLogo2 from '/public/assets/FooterBottomLogo2.webp';
import {
  FaXTwitter,
  FaRedditAlien,
  FaDiscord,
  FaYoutube,
} from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { SiMedium } from 'react-icons/si';
import PropTypes from 'prop-types';

function Footer({ deviceType }) {
  return (
    <div className='relative px-8 sm:px-20 lg:px-[150px] py-8'>
      <Image
        src={BannerImage}
        alt='Banner Image'
        fill
        className='-z-[1] object-cover'
      />

      <div className='flex flex-col gap-10'>
        {/* Logo Div */}
        <div className='bg-redd-500'>
          <Image
            src={FooterLogo}
            alt='Footer Logo'
            width={250}
            height={100}
            className='object-cover'
          />
        </div>

        {/* Buttons */}
        <div className='flex lg:hidden gap-4'>
          <div className='grid grid-cols-2 sm:flex w-full justify-between gap-4'>
            {[
              'Refer-Earn-Secure',
              'WAGSI Grants',
              'Ambassador Program',
              'Partnership Program',
            ].map((item, index) => (
              <div
                key={index}
                className='cursor-pointer flex px-3 lg:px-8 py-2 rounded-[4.5px] w-full whitespace-nowrap'
                style={{
                  background:
                    'linear-gradient(267.25deg, #7184FD 20%, #3F7AF0 50%, #4F37EE 100%)',
                }}
              >
                <button className='font-jost w-full flex justify-center text-center font-[300] lg:text-[16px] text-white'>
                  <p className='lg:text-[16px] text-[14px] tracking-wide'>
                    {item}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Sections */}
        <div className='flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row'>
          {/* More About Section */}
          <div className='flex justify-between w-full gap-20'>
            {/* More About Section */}
            <div className='flex flex-col w-full gap-8'>
              <div className='text-white flex flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  More About Quill{' '}
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>
                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p className='cursor-pointer'>About Us</p>
                  <p className='cursor-pointer'>FAQs</p>
                  <p className='cursor-pointer'>Blockchains We Audit</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className='text-white flex flex-col gap-1'>
                <h1 className='text-[17px] font-[400] font-jost flex flex-col w-fit'>
                  Contact Us:
                </h1>
                <div className='text-[15px] font-[400] font-jost flex w-fit flex-col gap-5'>
                  <div className='flex flex-col gap-1'>
                    <p className='cursor-pointer relative flex items-center italic font-[300] underline text-[17px] gap-2'>
                      <Image
                        src={MailIcon}
                        alt='Mail Icon'
                        width={20}
                        height={20}
                      />
                      audits@quillhash.com
                    </p>
                    <p className='cursor-pointer relative flex items-center italic font-[300] underline text-[17px] gap-2'>
                      <Image
                        src={TelegramIcon}
                        alt='Telegram Icon'
                        width={20}
                        height={20}
                      />
                      t.me/quillaudits
                    </p>
                  </div>
                  <p className='flex flex-col gap-2'>
                    <span className='flex items-center font-[400] text-[18px] gap-2'>
                      <Image
                        src={LocationIcon}
                        width={16}
                        height={16}
                        alt='Location Icon'
                      />
                      Our Location:
                    </span>
                    <span className='flex font-[300] text-[17px]'>
                      Office 104/105 Level 1, Emaar Square, Building 4 Sheikh
                      Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab
                      Emirates P.O box: 416654
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Audit Services */}
            <div className='text-white hidden lg:flex w-full flex-col gap-4'>
              <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                Audit Services
                <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
              </h1>

              <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                <p className='cursor-pointer'>Ethereum Audit</p>
                <p className='cursor-pointer'>Polygon Audit</p>
                <p className='cursor-pointer'>BSC Audit</p>
                <p className='cursor-pointer'>Solana Audit</p>
                <p className='cursor-pointer'>NEAR Audit</p>
                <p className='cursor-pointer'>Algorand Audit</p>
                <p className='cursor-pointer'>Tezos Audit</p>
                <p className='cursor-pointer'>Hyperledger Fabric Audit</p>
                <p className='cursor-pointer'>L1 Audit</p>
                <p className='cursor-pointer'>Polkadot Audit</p>
                <p className='cursor-pointer'>Wallet Audit</p>
                <p className='cursor-pointer'>ZkSync Audit</p>
                <p className='cursor-pointer'>Starknet Audit</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className='text-white w-full hidden sm:flex lg:hidden flex-col gap-4'>
              <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                Quick Links
                <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
              </h1>

              <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                <p className='cursor-pointer'>Pricing</p>
                <p className='cursor-pointer'>Audit Process</p>
                <p className='cursor-pointer'>Our Audits</p>
                <p className='cursor-pointer'>Testimonials</p>
                <p className='cursor-pointer'>Security Synopsis</p>
                <p className='cursor-pointer'>Blog</p>
                <p className='cursor-pointer'>Clients</p>
                <p className='cursor-pointer'>
                  Careers<span>Hiring</span>
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className='flex w-full justify-between flex-col'>
            {/* Links */}
            <div className='flex justify-between flex-wrap lg:justify-around w-full'>
              {/* Audit Services */}
              <div className='text-white flex lg:hidden flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Audit Services
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p className='cursor-pointer'>Ethereum Audit</p>
                  <p className='cursor-pointer'>Polygon Audit</p>
                  <p className='cursor-pointer'>BSC Audit</p>
                  <p className='cursor-pointer'>Solana Audit</p>
                  <p className='cursor-pointer'>NEAR Audit</p>
                  <p className='cursor-pointer'>Algorand Audit</p>
                  <p className='cursor-pointer'>Tezos Audit</p>
                  <p className='cursor-pointer'>Hyperledger Fabric Audit</p>
                  <p className='cursor-pointer'>L1 Audit</p>
                  <p className='cursor-pointer'>Polkadot Audit</p>
                  <p className='cursor-pointer'>Wallet Audit</p>
                  <p className='cursor-pointer'>ZkSync Audit</p>
                  <p className='cursor-pointer'>Starknet Audit</p>
                </div>
              </div>
              {/* Quill Ecosystem */}
              <div className='text-white flex flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Quill Ecosystem
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p className='cursor-pointer'>QuillAI</p>
                  <p className='cursor-pointer'>QuillCheck</p>
                  <p className='cursor-pointer'>QuillShield</p>
                  <p className='cursor-pointer'>QuillAcademy</p>
                  <p className='cursor-pointer'>QuillMonitor</p>
                  <p className='cursor-pointer'>Web3Suggest</p>
                  <p className='cursor-pointer'>Explore All Tools</p>
                </div>
              </div>

              {/* Other Services */}
              <div className='text-white flex flex-col gap-4 pt-14 sm:pt-0'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Other Services
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p className='cursor-pointer'>Red Teaming</p>
                  <p className='cursor-pointer'>dApp Pentesting</p>
                  <p className='cursor-pointer'>DeFi Diligence</p>
                  <p className='cursor-pointer'>NFT Due Diligence</p>
                  <p className='cursor-pointer'>Rug Pull Due Diligence</p>
                  <p className='cursor-pointer'>Security Consultation</p>
                  <p className='cursor-pointer'>Blockchain Forensics</p>
                  <p className='cursor-pointer'>KYC (Know Your Customer)</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className='text-white flex sm:hidden lg:flex flex-col gap-4 pt-14 sm:pt-0'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Quick Links
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p className='cursor-pointer'>Pricing</p>
                  <p className='cursor-pointer'>Audit Process</p>
                  <p className='cursor-pointer'>Our Audits</p>
                  <p className='cursor-pointer'>Testimonials</p>
                  <p className='cursor-pointer'>Security Synopsis</p>
                  <p className='cursor-pointer'>Blog</p>
                  <p className='cursor-pointer'>Clients</p>
                  <p className='cursor-pointer'>
                    Careers<span>Hiring</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='hidden lg:flex flex-col gap-4'>
              <div className='text-white flex flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Our Programmes
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>
              </div>

              <div className='flex w-full justify-between gap-4'>
                {[
                  'Refer-Earn-Secure',
                  'WAGSI Grants',
                  'Ambassador Program',
                  'Partnership Program',
                ].map((item, index) => (
                  <div
                    key={index}
                    className='cursor-pointer flex px-8 py-2 rounded-[4.5px] w-full whitespace-nowrap'
                    style={{
                      background:
                        'linear-gradient(267.25deg, #7184FD 20%, #3F7AF0 50%, #4F37EE 100%)',
                    }}
                  >
                    <button className='font-jost font-[300] text-[16px] text-white'>
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex mt-4 ${
            deviceType === 'mobile' && 'mb-2'
          } gap-8 flex-col sm:flex-row items-center justify-between`}
        >
          {/* Images */}
          <div className='flex items-center w-full gap-4'>
            <Image
              src={FooterBottomLogo1}
              alt='Footer Bottom Logo'
              width={200}
              height={60}
            />
            <Image
              src={FooterBottomLogo2}
              alt='Footer Bottom Logo'
              width={200}
              height={60}
            />
          </div>

          {/* Logos */}
          <div className='flex w-full text-[28px] items-center gap-4 lg:gap-8 justify-between sm:justify-end text-white'>
            <FaXTwitter className='cursor-pointer text-[26px] sm:text-[23px]' />
            <IoLogoLinkedin className='cursor-pointer text-[26px] sm:text-[23px]' />
            <Image
              src={TelegramIcon}
              alt='TelegramIcon'
              width={26}
              height={26}
              style={{
                cursor: 'pointer',
                zIndex: 2,
              }}
            />
            <FaRedditAlien className='cursor-pointer text-[28px] sm:text-[25px]' />
            <SiMedium className='cursor-pointer text-[28px] sm:text-[25px]' />
            <FaDiscord className='cursor-pointer text-[28px] sm:text-[25px]' />
            <FaYoutube className='cursor-pointer text-[28px] sm:text-[25px]' />
          </div>
        </div>

        <div className='relative font-jost text-[13px] font-[400] sm:font-[300] flex-col-reverse sm:flex-row flex items-center justify-center sm:justify-between gap-4 text-white'>
          <div className='flex w-full absolute z-[1] -top-4 h-[2px] bg-white bg-opacity-10' />
          <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  deviceType: PropTypes.string,
};

export default Footer;
