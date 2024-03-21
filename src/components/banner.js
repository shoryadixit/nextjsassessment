import Image from 'next/image';
import React from 'react';
import BannerImage from '/public/assets/BannerImage.webp';
import Box from '/public/assets/box.svg';
import BannerPill from '/public/assets/EBanner.webp';
import BannerPill2 from '/public/assets/EBannerBlack.webp';

function Banner() {
  return (
    <div className='relative flex flex-col items-center justify-center lg:justify-end top-0 w-full pt-14 pb-2 lg:h-[80vh]'>
      <Image
        src={BannerImage}
        alt='Banner Image'
        fill
        className=' object-cover'
      />
      {/* Banner */}
      <div className='z-[1] flex flex-col gap-8 lg:gap-10 lg:max-w-[1250px]'>
        <div className='flex flex-col sm:flex-row w-full z-[1] gap-14 sm:gap-8 sm:px-14 lg:px-20'>
          <div className='flex w-full flex-col gap-4'>
            <div className='px-4 flex sm:hidden w-fit font-jost text-[17px] font-[400] text-white'>
              <p className='flex w-fit flex-col'>
                Case Studies
                <span className='bg-blue-500 flex w-[85%] h-[2.6px] rounded-[18px]' />
              </p>
            </div>
            {/* Box Section */}
            <div className='w-[100%] h-[280px] sm:w-[95%] sm:h-[360px] lg:h-[480px] relative flex items-center sm:items-start'>
              <Image
                src={Box}
                alt='Banner Image'
                fill
                className=' object-cover sm:rounded-[8px]'
              />
              <div className='absolute flex flex-col gap-5 sm:bottom-0 p-8 lg:p-10'>
                <div className='relative px-2 lg:px-6'>
                  <Image
                    src={BannerPill}
                    alt='Banner Fill'
                    className='object-cover'
                  />
                </div>
                <p className='hidden sm:flex font-poppins text-white text-[14px] lg:text-[15px] font-[300] lg:w-[70%]'>
                  Carpe Diem Pension, a blockchain-based retirement fund, offers
                  permanent payouts through CDP deposits, with a 4.32% annual
                  inflation claimable by depositors.
                </p>
              </div>

              <div className='absolute rounded-md -bottom-5 right-8 sm:-right-24 sm:top-8 lg:top-10 flex items-center justify-center bg-white w-[120px] h-[50px] sm:w-[140px] sm:h-[60px] lg:w-[180px] lg:h-[80px]'>
                <Image
                  src={BannerPill2}
                  alt='Banner Fill'
                  fill
                  className='object-contain p-2 lg:p-3'
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className='text-white px-10 sm:px-0 gap-8 sm:gap-4 lg:gap-8 w-full font-jost flex items-start flex-col justify-end pb-12'>
            <p className='text-[35px] sm:text-[26px] leading-tight lg:text-[42px] font-[500] lg:leading-[50px]'>
              Securing Trust : Boosting Security and Strengthening Trust at
              Carpe Diem Pension
            </p>
            <p className='font-poppins text-[18px] sm:text-[14px] lg:text-[20px] font-[300] leading-normal tracking-wide sm:leading-tight lg:leading-[30px]'>
              QuillAudits enhances Carpe Diem Pension by addressing 33
              vulnerabilities on the Pulse blockchain, boosting security and
              user trust in digital pensions.
            </p>
          </div>
        </div>

        <div className='z-[1] text-[15px] font-jost w-full flex gap-2 px-10 sm:px-14 lg:px-20 pb-2'>
          <p className='text-white opacity-40'>QuillAudits</p>
          <span className='text-white opacity-40'>{`-->`}</span>
          <p className='text-white opacity-40'>Resources</p>
          <span className='text-white opacity-40'>{`-->`}</span>
          <p className='text-white opacity-100'>Case Studies</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
