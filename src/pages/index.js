import React from 'react';
import { Layout } from '@components';
import { Hero, Skills } from '@components/homeSections';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const location = useRouter();

  return (
    <Layout location={location}>
      <main className="fillHeight">
        <Hero />
        <Skills />
      </main>
    </Layout>
  );
};

export default IndexPage;
