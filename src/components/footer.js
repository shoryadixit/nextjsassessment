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

function Footer() {
  return (
    <div className='relative px-[150px] py-8'>
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

        {/* Footer Sections */}
        <div className='flex'>
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
                  <p>About Us</p>
                  <p>FAQs</p>
                  <p>Blockchains We Audit</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className='text-white flex flex-col gap-1'>
                <h1 className='text-[17px] font-[400] font-jost flex flex-col w-fit'>
                  Contact Us:
                </h1>
                <div className='text-[15px] font-[400] font-jost flex w-fit flex-col gap-5'>
                  <div className='flex flex-col gap-1'>
                    <p className='relative flex items-center italic font-[300] underline text-[17px] gap-2'>
                      <Image
                        src={MailIcon}
                        alt='Mail Icon'
                        width={20}
                        height={20}
                      />
                      audits@quillhash.com
                    </p>
                    <p className='relative flex items-center italic font-[300] underline text-[17px] gap-2'>
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
            <div className='text-white flex w-full flex-col gap-4'>
              <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                Audit Services
                <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
              </h1>

              <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                <p>Ethereum Audit</p>
                <p>Polygon Audit</p>
                <p>BSC Audit</p>
                <p>Solana Audit</p>
                <p>NEAR Audit</p>
                <p>Algorand Audit</p>
                <p>Tezos Audit</p>
                <p>Hyperledger Fabric Audit</p>
                <p>L1 Audit</p>
                <p>Polkadot Audit</p>
                <p>Wallet Audit</p>
                <p>ZkSync Audit</p>
                <p>Starknet Audit</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className='flex w-full justify-between flex-col'>
            {/* Links */}
            <div className='flex justify-around w-full'>
              {/* Quill Ecosystem */}
              <div className='text-white flex flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Quill Ecosystem
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p>QuillAI</p>
                  <p>QuillCheck</p>
                  <p>QuillShield</p>
                  <p>QuillAcademy</p>
                  <p>QuillMonitor</p>
                  <p>Web3Suggest</p>
                  <p>Explore All Tools</p>
                </div>
              </div>

              {/* Other Services */}
              <div className='text-white flex flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Other Services
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p>Red Teaming</p>
                  <p>dApp Pentesting</p>
                  <p>DeFi Diligence</p>
                  <p>NFT Due Diligence</p>
                  <p>Rug Pull Due Diligence</p>
                  <p>Security Consultation</p>
                  <p>Blockchain Forensics</p>
                  <p>KYC (Know Your Customer)</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className='text-white flex flex-col gap-4'>
                <h1 className='text-[19px] font-[400] font-jost flex flex-col w-fit'>
                  Quick Links
                  <div className='bg-blue-500 flex w-full h-[2px] rounded-[18px]' />
                </h1>

                <div className='text-[15px] font-[400] font-jost flex flex-col gap-3'>
                  <p>Pricing</p>
                  <p>Audit Process</p>
                  <p>Our Audits</p>
                  <p>Testimonials</p>
                  <p>Security Synopsis</p>
                  <p>Blog</p>
                  <p>Clients</p>
                  <p>
                    Careers<span>Hiring</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-4'>
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
                    className='flex px-8 py-2 rounded-[4.5px] w-full whitespace-nowrap'
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

        <div className='flex mt-4 items-center justify-between'>
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
          <div className='flex w-full text-[28px] items-center gap-8 justify-end text-white'>
            <FaXTwitter className='text-[23px]' />
            <IoLogoLinkedin className='text-[23px]' />
            <Image
              src={TelegramIcon}
              alt='TelegramIcon'
              width={26}
              height={26}
            />
            <FaRedditAlien className='text-[25px]' />
            <SiMedium className='text-[25px]' />
            <FaDiscord className='text-[25px]' />
            <FaYoutube className='text-[25px]' />
          </div>
        </div>

        <div className='relative font-jost text-[13px] font-[300] flex justify-between text-white'>
          <div className='flex w-full absolute z-[1] -top-4 h-[2px] bg-white bg-opacity-10' />
          <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
