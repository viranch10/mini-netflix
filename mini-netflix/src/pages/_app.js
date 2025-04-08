import '../app/global.scss';
import Head from 'next/head';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mini Netflix</title>
        <link rel='icon' href='/clapboard.png' />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}