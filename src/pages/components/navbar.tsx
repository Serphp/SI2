
// Navbar.tsx

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
//import { api } from '~/utils/api';


const Navbar = () => {


  const { data: sessionData } = useSession();
  //console.log(sessionData);

    
  return (
    <>
<section data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

<nav id="scrollspy" className="navbar navbar-expand-lg" data-spy="affix" data-offset-top="20">
    <div className="container">
        <a className="navbar-brand" href="#">
            
            <img src="https://cdn.svgporn.com/logos/linear-icon.svg" alt="" width={30} className="brand-img" /></a>
            
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/Temas">Temas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact</Link>
                </li>
                
                
                {
                sessionData ? "" : <Link className='navbtn ml-0 ml-lg-4' href="/api/auth/signin">Sign in</Link>
                }

                <li className='nav-item '> {
                sessionData && 
                <div className='navcon'>
                  <Link className="nav-link" href={`/user/${sessionData.user?.id}`}>{sessionData.user?.name}</Link>
                
                <img className='navimg' src={sessionData.user?.image ?? ''} alt="profile" />
                <button onClick={sessionData ? () => void signOut() : () => void signIn()}>
                {
                sessionData ? "Sign out" : "Sign in"}
                </button>
                {
                    sessionData &&
                    <Link className="nav-link" href={`/user/edit/${sessionData.user?.id}`}>Edit</Link>
                }
                </div>
                } 
                </li>
            </ul>
        </div>
    </div>
</nav>

</section>

<div className='espacio'></div>


    </>
  );
};

export default Navbar;
