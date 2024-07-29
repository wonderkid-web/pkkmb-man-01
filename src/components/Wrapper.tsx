"use client"

import { SessionProvider } from 'next-auth/react'

function Wrapper({children}: {children:React.ReactNode}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Wrapper