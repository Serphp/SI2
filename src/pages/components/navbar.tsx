// Navbar.tsx

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const { data: sessionData } = useSession();
  return (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img className='logo' src="https://cdn.svgporn.com/logos/codesee-icon.svg" alt="logo" />
            </a>
            <ul id="nav-mobile" className="menu">
                <li className='nav-link'><Link href="/about">About</Link></li>
                <li className='nav-link'><Link href="badges.html">Components</Link></li>
                <li className='nav-link'><Link href="collapsible.html">JavaScript</Link></li>
                <li className='nav-link'> {
                sessionData && 
                <div className='navcon'>
                {sessionData.user?.name}
                <img className='navimg' src={sessionData.user?.image} alt="profile" />
                </div>
                } </li>
            </ul>
        </div>

    </nav>
  );
};

export default Navbar;
