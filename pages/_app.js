import Header from '../components/header'
import '../styles/globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={mulish.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
