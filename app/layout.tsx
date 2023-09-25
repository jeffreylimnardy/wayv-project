import React from 'react';
import '%styles/globals.css';
import NavBar from '%components/NavBar';
import { NextAuthProvider } from '%components/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <head>
          <script src="https://kit.fontawesome.com/1f63cda935.js" crossOrigin="anonymous"></script>
        </head>
        <body>
          <main>
            <NavBar />
          </main>
          {children}
        </body>
      </html>
    </NextAuthProvider>
  )
}