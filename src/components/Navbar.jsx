import React, { useEffect } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

    const[mobileOpen, setMobileOpen] = useState(false)
    const[scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 10)
        };
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll)

    },[])




  return (
    <>
    <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-300 ${scrolled ? ' bg-white/70 backdrop-blur-md' : 'bg-transparent'} `}>
        <div className=' flex items-center justify-between font-medium py-4 mx-auto max-w-7xl'>
            <a href="/">
            <img className=' w-30 h-30' src="/assets/logo2.png" alt="logo" />

            </a>
            {/* navigation links */}
            <div className=' hidden md:flex items-center gap-10'>
                { navLinks.map((link)=>(
                    <a key={link.name} href={link.href} className=' font-bold hover:text-zinc-600'>
                        {link.name}
                    </a>

                ))}
            </div>
             <a href="#booking-process" className=' hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition'>
            Book a table

            </a>
            <button onClick={()=> setMobileOpen(true)} className=' md:hidden bg-orange-400 text-white p-2 rounded-md aspect-square'>
                <MenuIcon/>
            </button>

        </div>

    </nav>
    {/* mobile navigation */}
    <div className= {`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform duration-300 ${mobileOpen ? 'translate-x-0' :' translate-x-full'} `} >
        <div className=' flex flex-col items-center space-y-6 font-bold  '>
            {navLinks.map((link)=>(
                <a key={link.name} href={link.href} className=' text-2xl text-zinc-800 hover:text-orange-400 transition'
                onClick={()=> setMobileOpen(false)}
                >
                    {link.name}
                </a>

            ))}

            <button onClick={()=> setMobileOpen(false)} className=' bg-orange-400 text-white p-2 rounded-md aspect-square'>
                <XIcon/>
            </button>

        </div>
    </div>
      
    </>
  )
}

export default Navbar
