import Image from 'next/image';
import React from 'react';
import BannerImage from '/public/assets/BannerImage.webp';
import Box from '/public/assets/box.svg';
import BannerPill from '/public/assets/EBanner.webp';
import BannerPill2 from '/public/assets/EBannerBlack.webp';

function Banner() {
  return (
    <div className='relative flex flex-col items-center justify-end w-full h-[78vh]'>
      <Image
        src={BannerImage}
        alt='Banner Image'
        fill
        className=' object-cover'
      />
      <div className='z-[1] flex flex-col gap-10 max-w-[1250px]'>
        <div className='flex w-full z-[1] gap-8 px-20'>
          <div className='w-[95%] h-[480px] relative'>
            <Image
              src={Box}
              alt='Banner Image'
              fill
              className=' object-cover rounded-[8px]'
            />
            <div className='absolute flex flex-col gap-5 bottom-0 p-10'>
              <div className='relative px-6'>
                <Image
                  src={BannerPill}
                  alt='Banner Fill'
                  className='object-cover'
                />
              </div>
              <p className=' text-white text-[16px] font-[300] w-2/3'>
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>

            <div className='absolute rounded-md -right-24 top-10 flex items-center justify-center bg-white w-[180px] h-[80px]'>
              <Image
                src={BannerPill2}
                alt='Banner Fill'
                fill
                className='object-contain p-3'
              />
            </div>
          </div>
          <div className='text-white gap-8 w-full font-jost flex items-start flex-col justify-end pb-12'>
            <p className='text-[42px] font-[500] leading-[50px]'>
              Securing Trust : Boosting Security and Strengthening Trust at
              Carpe Diem Pension
            </p>
            <p className='font-poppins text-[20px] font-[300] leading-[30px]'>
              QuillAudits enhances Carpe Diem Pension by addressing 33
              vulnerabilities on the Pulse blockchain, boosting security and
              user trust in digital pensions.
            </p>
          </div>
        </div>

        <div className='z-[1] w-full flex gap-2 px-20 pb-2'>
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
