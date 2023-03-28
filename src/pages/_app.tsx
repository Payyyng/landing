import '@/styles/globals.css'
import "aos/dist/aos.css";
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from 'aos'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}
