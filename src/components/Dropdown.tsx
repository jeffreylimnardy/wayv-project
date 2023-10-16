'use client'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import '%styles/Dropdown.modules.css'
import { useSession } from 'next-auth/react'

function Dropdown(className) {
  const {data:session} = useSession();
  return (
    <div className={className}>
      <Link className="dropdown-button" href="/profile">Profile</Link>
        {!session?.user && <button type="button" className="dropdown-button" onClick={() => signIn("google")} >Sign In</button>}
      {session?.user &&<button type="button" className="dropdown-button" onClick={() => signOut()}>Sign Out</button>}
    </div>
  )
}

export default Dropdown