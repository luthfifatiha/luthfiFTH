'use client'
import Image from "next/image";

import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        // Navbar Fixed
        const handleScroll = () => {
          const header = document.querySelector('header');
          const fixedNav = header.offsetTop;
          const toTop = document.getElementById('to-top');
    
          if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
          } else {
            header.classList.remove('navbar-fixed');
            toTop.classList.remove('flex');
            toTop.classList.add('hidden');
          }
        };
    
        window.onscroll = handleScroll;
    
        // Hamburger
        const hamburger = document.querySelector('#hamburger');
        const navMenu = document.querySelector('#nav-menu');
    
        const handleHamburgerClick = () => {
          hamburger.classList.toggle('hamburger-active');
          navMenu.classList.toggle('hidden');
        };
    
        hamburger.addEventListener('click', handleHamburgerClick);
    
        // Hidden Hamburger
        const handleClickOutside = (e) => {
          if (e.target !== hamburger && e.target !== navMenu) {
            hamburger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
          }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        // Dark mode toggle
        const darkToggle = document.querySelector('#mode-toggle');
        const html = document.querySelector('html');
    
        const handleDarkToggle = () => {
          if (darkToggle.checked) {
            html.classList.add('dark');
            localStorage.theme = 'dark';
          } else {
            html.classList.remove('dark');
            localStorage.theme = 'light';
          }
        };
    
        darkToggle.addEventListener('click', handleDarkToggle);
    
        if (
          localStorage.theme === 'dark' || 
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          darkToggle.checked = true;
          html.classList.add('dark');
        } else {
          darkToggle.checked = false;
          html.classList.remove('dark');
        }
    
        // Clean up event listeners on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('click', handleClickOutside);
          hamburger.removeEventListener('click', handleHamburgerClick);
          darkToggle.removeEventListener('click', handleDarkToggle);
        };
      }, []);
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-2xl lg:text-4xl text-primary block py-6">Luthfi Fatiha</a>
                </div>
                <div className="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>

                    <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-wir dark:shadow-slate-800 lg:dark:bg-transparent">
                        <ul className="block lg:flex">
                            <li className="group">
                                <a href="#home" className="text-base text-wir py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-200">Home</a>
                            </li>
                            <li className="group">
                                <a href="#about" className="text-base text-wir py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-200">About</a>
                            </li>
                            <li className="group">
                                <a href="#portofolio" className="text-base text-wir py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-200">Portofolio</a>
                            </li>
                            <li className="group">
                                <a href="#clients" className="text-base text-wir py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-200">Clients</a>
                            </li>
                            <li className="group">
                                <a href="#blog" className="text-base text-wir py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-200">Blog</a>
                            </li>
                            <li className="group">
                                <a href="#contact" className="text-base text-wir py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-200">Contact</a>
                            </li>
                            <li className="mt-3 flex items-center pl-8 lg:mt-0">
                                <div className="flex">
                                    <span className="mr-2 text-base text-wir dark:text-white">Light</span>
                                    <input type="checkbox" className="hidden" id="mode-toggle" />
                                    <label for="mode-toggle">
                                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                            <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out">
                                            </div>
                                        </div>
                                    </label>
                                    <span className="ml-2 text-base text-wir dark:text-white">Dark</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
