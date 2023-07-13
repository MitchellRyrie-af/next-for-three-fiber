import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import '@/styles/globals.css'
import '@/styles/index.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function App({ Component, pageProps, }: AppProps) {
  const router = useRouter();
  // console.log(router);
  return (
    <>
      {/* <Html lang="en">
      <Head>
        <Header />
      </Head>
      <body>
        <Main {...pageProps} >
          

        </Main>
        <Footer />
        <NextScript />
      </body>
    </Html> */}
      <Component {...pageProps} />
    </>
  )
}
