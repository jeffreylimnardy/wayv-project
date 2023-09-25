'use client';

import React from 'react'
import '%styles/NavBar.modules.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBagShopping, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Dropdown from './Dropdown';


library.add(faUser, faBagShopping, faSignOut)

function NavBar() {
    const [dropdownToggle, setDropdownToggle] = useState(false);
    const [providers, setProviders] = useState(null);

    useEffect(()=>{
        const setUpProviders = async() => {
            const response = await getProviders();
            setProviders(response)
            console.log(response)
        }
        setUpProviders()
    },[])

  return (
    <nav>
        <div className="navigation-panel">
            <Image src="/wave-icon.png" alt="wayv logo" width={50} height={50}/>
            <span>wayv</span>
            <div className="routes">
                <Link href="/">
                    Home
                </Link>
                <Link href="/products">
                    Products
                </Link>
                <Link href="contact">
                    Contact us
                </Link>
            </div>
        </div>
        <div className="icons">
              {providers && (<FontAwesomeIcon className="icon" icon="user" onClick={() => setDropdownToggle(prevDropdownToggle => !prevDropdownToggle)} />)}

              {(providers && dropdownToggle) && <div className="dropdown"><Dropdown /></div>}
            <FontAwesomeIcon className="icon" icon="shopping-bag"/>
        </div>
    </nav>
  )
}

export default NavBar