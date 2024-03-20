import Image from 'next/image';
import React from 'react';
import BannerImage from '/public/assets/BannerImage.webp';
import Box from '/public/assets/box.svg';

function Banner() {
  return (
    <div className='relative flex items-center justify-center w-full h-[80vh]'>
      <Image
        src={BannerImage}
        alt='Banner Image'
        fill
        className=' object-cover'
      />

      <div className='w-[500px] h-[500px] relative rounded-[8px]'>
        <Image src={Box} alt='Banner Image' fill className=' object-cover' />
      </div>
    </div>
  );
}

export default Banner;
