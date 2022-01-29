import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/img/nucleus-logo.png';
import './navbar.css';


function Navbar() {
    const history = useHistory();


    const toggleNav = () => {
        const menu = document.getElementById('menu');
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    }

    return (
        <div className="font-primary flex justify-between navbar sticky border-b border-gray-200 top-0 bg-white h-16 md:h-24 md:px-40 px-8 items-center z-50">
            <div className="flex">
                <img onClick={() => history.push('/')} src={logo} alt="Nucleus Logo" className="w-24 md:w-36 cursor-pointer" />
            </div>
            <div className="md:hidden cursor-pointer" onClick={() => toggleNav()}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <ul className="flex justify-end w-full -ml-8 md:w-72 p-4 md:p-0 hidden absolute top-16 md:relative md:top-0 gap-y-2 md:gap-y-0 md:gap-x-2  md:flex transition ease-in-out duration-1000 bg-white"  id="menu">
                <li className="h-9 md:h-auto border-b border-gray-200 md:border-none"><a className="py-2.5 md:py-2 md:px-4 bg-primary rounded-md text-white" href="https://nucleusis.io/">Home</a></li>
                {/* <li className="h-9 md:h-auto border-b border-gray-200 md:border-none"><Link className="py-2.5 md:py-0" to="/about">About</Link></li> */}
                {/* <li className="h-9 md:h-auto border-b border-gray-200 md:border-none"><Link className="py-2.5 md:py-0" to="/contact">Contact</Link></li> */}
                {/* <li className="h-9 md:h-auto border-b border-gray-200 md:border-none"><Link className="py-2.5 md:py-0" to="/services">Our Services</Link></li> */}
            </ul>
        </div>
    )
}

export default Navbar
