import Banner from '@/components/banner';
import PageWrapper from '@/layout';
import React from 'react';

export default function Home() {
  return (
    <PageWrapper>
      <div className='font-jost'>
        <Banner />
      </div>
    </PageWrapper>
  );
}
