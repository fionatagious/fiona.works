// These styles apply to every route in the application
import '/styles/global.css'
import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}