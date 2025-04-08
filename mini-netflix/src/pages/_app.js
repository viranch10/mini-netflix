import '../app/global.scss';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}