import React, { useEffect, useState } from 'react'
import './buycover.css'
import buycover1 from '../../assets/img/buycover1.png';
import buycover2 from '../../assets/img/buycover2.png';
import buycover3 from '../../assets/img/buycover3.png';
import buycover4 from '../../assets/img/buycover4.png';
import lshs from '../../assets/img/lshs.png';
import oyo from '../../assets/img/oyo.png';
import Ready from '../../components/sections/ready';
import { useHistory, Link } from 'react-router-dom';

function BuyCover() {
    const history = useHistory()
    const [type, settype] = useState(null)

    useEffect(() => {
        const type = localStorage.getItem('type')
        if(type) {
            settype(type)
        }
    }, [])

    return (
        <div className="buy-cover mt-24 font-primary">
            <div className="text-center">
                <div className="header text-center mb-16">
                    <p className="font-bold text-2xl mb-6">Private health <br /> Insurance Packages</p>
                    <p className="font-medium insurance-caption">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-around lg:gap-20 gap-10 lg:px-80 px-8 lg:mb-44 mb-14">
                    <div>
                        <img src={buycover1} alt="buycover"  className="inline-block w-auto lg:w-full" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Young Professional</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {type == 'loan' ? (
                            <Link to='/buy-cover/individual-loan' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        ) : (
                            <Link to='/buy-cover/individual' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        )}
                    </div>
                    <div>
                        <img src={buycover2} alt="buycover" className="inline-block lg:w-full w-auto" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Family</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        
                        {type == 'loan' ? (
                            <Link to='/buy-cover/family-loan' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        ) : (
                            <Link to='/buy-cover/family' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        )}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-around lg:gap-20 gap-10 lg:px-80 px-8 mb-14">
                    <div>
                        <img src={buycover3} alt="buycover" className="inline-block lg:w-full w-auto" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">SMEs</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {type == 'loan' ? (
                            <Link to='/buy-cover/sme-loan' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        ) : (
                            <Link to='/buy-cover/sme' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        )}
                    </div>
                    <div>
                        <img src={buycover4} alt="buycover" className="inline-block lg:w-full w-auto" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Elderly</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {type == 'loan' ? (
                            <Link to='/buy-cover/elderly-loan' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        ) : (
                            <Link to='/buy-cover/elderly' className="individual-btn mt-14 mb-14 uppercase">Get Started</Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-center lg:mt-56 mt-24">
                <div className="header text-center mb-8">
                    <p className="font-bold text-2xl mb-6">Government health <br /> Insurance Packages</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-around lg:gap-x-20 gap-x-4 lg:px-80 px-8 lg:mb-44 mb-24">
                    <div className="p-2 lg:p-14 xl:p-5">
                        <img src={lshs} alt="buycover" className="inline-block w-40" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Are you a residence of Lagos state?</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">The Lagos state health management agency have specially tailored health plans for all residents at affordable prices.</p>
                        <button className="individual-btn mt-14 mb-14 uppercase">Get Started</button>
                    </div>
                    <div className="p-2 lg:p-14 xl:p-5">
                        <img src={oyo} alt="buycover" className="inline-block w-36"  />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Are you a residence in Oyo state?</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">The Oyo state health  insurance agency have specially tailored health plans for all residents of Oyo state at affordable prices. </p>
                        <button className="individual-btn mt-14 mb-14 uppercase">Get Started</button>
                    </div>
                </div>
            </div>
            <Ready></Ready>
        </div>
    )
}

export default BuyCover
