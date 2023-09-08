import Head from 'next/head';
import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderTwo from '../components/Layout/Header/HeaderTwo/HeaderTwo';


export default function HomeTwo() {

  return (
    <>
      <Head>
        <title>Certificate Verification Portal</title>
        <meta name="description" content="Certificate Verification Portal" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
       
       <HeaderTwo />
      <HomeTwoMain />
      <Footer />
    </>
  )
}
