import "./Header.css"
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import './Header.css'
import eyeOpen from '../../assets/logo/eyeOpen.png'
import eyeClosed from '../../assets/logo/eyeClose.png'

function Header() {
  const [navOpaque, setNavOpaque] = useState(false);
  useEffect(() =>{
    document.querySelector('.logo-open')?.classList.add('logo-eye-open')
    document.querySelector('.logo-close')?.classList.add('logo-eye-close')

    const handleScroll = () =>{
      if(window.scrollY > 20){
        setNavOpaque(true)
      }else{
        setNavOpaque(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <header className={clsx("fixed  w-full h-18 mx-auto left-0 right-0 z-50 flex items-center transition-all duration-750", {"bg-white/90 top-0 py-17 ":navOpaque, "bg-transparent top-8":!navOpaque })}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="relative">
            <img src={eyeOpen} alt="logo" className='logo-open w-50'/>
            <img src={eyeClosed} alt='logo' className='logo-close w-50 absolute top-0'/>
            </div>
            <nav className={clsx("hidden md:flex  bg-white/20 rounded-sm text-slate-900 duration-200  backdrop-blur-2xl place-items-center",{"shadow-none": navOpaque, "shadow-2xl": !navOpaque})}>
              <a href="#" className="px-4 py-2 border-r-1 border-slate-300 hover:text-slate-400 underline pb-2 transition duration-300 text-center hover:skew-6 hover:scale-3d">Home</a>
              <a href="#" className="px-4 py-2 text-center border-r-1 border-slate-300 hover:text-slate-400 transition duration-300 hover:skew-4 ">Services</a>
              <a href="#" className="px-4 py-2 text-center border-r-1 border-slate-300 hover:text-slate-400  transition duration-300 hover:skew-6 ">About</a>
              <a href="#" className="px-4 py-2  place-items-center hover:text-slate-300  transition duration-300 hover:skew-4 ">Contact</a>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header