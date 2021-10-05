import React from 'react'
import './buycover.css'
import buycover1 from '../../assets/img/buycover1.png';
import buycover2 from '../../assets/img/buycover2.png';
import buycover3 from '../../assets/img/buycover3.png';
import buycover4 from '../../assets/img/buycover4.png';
import lshs from '../../assets/img/lshs.png';
import oyo from '../../assets/img/oyo.png';
import ReadyTalk from '../../components/sections/ready-talk';

function BuyCover() {
    return (
        <div className="buy-cover mt-24 font-primary">
            <div className="text-center">
                <div className="header text-center mb-8">
                    <p className="font-bold text-2xl mb-6">Private health <br /> Insurance Packages</p>
                    <p className="font-medium insurance-caption">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                </div>
                <div className="flex justify-around gap-x-20 px-80 mb-44">
                    <div>
                        <img src={buycover1} alt="buycover" className="inline-block" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Young Professional</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="buycover-getstarted">Get Started</button>
                    </div>
                    <div>
                        <img src={buycover2} alt="buycover" className="inline-block" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Family</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="buycover-getstarted">Get Started</button>
                    </div>
                </div>
                <div className="flex justify-around gap-x-20 px-80 mb-14">
                    <div>
                        <img src={buycover3} alt="buycover" className="inline-block" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">SMEs</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="buycover-getstarted">Get Started</button>
                    </div>
                    <div>
                        <img src={buycover4} alt="buycover" className="inline-block" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Elderly</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="buycover-getstarted">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-56">
                <div className="header text-center mb-8">
                    <p className="font-bold text-2xl mb-6">Government health <br /> Insurance Packages</p>
                </div>
                <div className="flex justify-around gap-x-20 px-80 mb-44">
                    <div>
                        <img src={lshs} alt="buycover" className="inline-block w-40" />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Are you are residence of Lagos state?</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="buycover-getstarted">Get Started</button>
                    </div>
                    <div>
                        <img src={oyo} alt="buycover" className="inline-block w-36"  />
                        <p className="mt-6 text-black font-bold text-2xl mb-6">Are you a residence in Oyo state?</p>
                        <p className="color-secondary buycover-cap font-medium mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="buycover-getstarted">Get Started</button>
                    </div>
                </div>
            </div>
            <ReadyTalk></ReadyTalk>
        </div>
    )
}

export default BuyCover
