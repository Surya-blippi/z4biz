import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Z4BIZLanding from '@/components/Z4BIZLanding';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Z4BIZ - Transform Your Business & Technology</title>
        <meta 
          name="description" 
          content="Empowering businesses with cutting-edge technology solutions and innovative digital transformation strategies." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/z4biz-logo.png" />
      </Head>

      <main>
        <Z4BIZLanding />
      </main>
    </>
  );
};

export default Home;