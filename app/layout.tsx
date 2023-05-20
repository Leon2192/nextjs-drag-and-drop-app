import './globals.css'

import { Button } from './components/Button';
import { Delius } from 'next/font/google';
import Link from 'next/link';
import { SideBar } from './components/SideBar';
import { TopBar } from './components/TopBar';

const delius = Delius({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <title>Drag and drop app</title>
      </head>
      <body className='min-w-full min-h-screen bg-blue-100'>
        <TopBar />
        {/*<SideBar /> */}
        <main className={delius.className}>
          {children}
          <Link href='/'>
            <Button />
          </Link>
        </main>
      </body>
    </html>
  )
}
