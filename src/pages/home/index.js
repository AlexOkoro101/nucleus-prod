import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import CustomerExpectation from '../../components/sections/customer-expectation'
import InsurancePackage from '../../components/sections/insurance-package'
import OyoAgency from '../../components/sections/oyo-agency'
import ReadyTalk from '../../components/sections/ready-talk'
import Testimonials from '../../components/sections/testimonials'
import './home.css'

function Home() {
    const history = useHistory()


    return (
        <div className="home font-primary">
            <div className="home-banner h-screen">
                <div className="banner-content h-full flex flex-col justify-center lg:p-40 p-8 bg-black bg-opacity-50">
                    <h1 className="text-white lg:text-6xl text-4xl font-extrabold mb-8">Buy the health insurance that works for you and your family</h1>
                    <p className="text-white text-sm mb-6">Get affordable health insurance products across Africa for YOU, YOUR FAMILY, YOUR DEPENDANTS and YOUR EMPLOYEES</p>

                    <div className="home-buttons flex mb-5 gap-x-5">
                        <Link onClick={() => localStorage.setItem('type', 'default')} to='/buy-cover' className="buy-cover-button">Buy Cover</Link>
                        <Link to='/buy-cover/renew' className="transparent-button">Renew Cover</Link>
                    </div>
                    <Link onClick={() => localStorage.setItem('type', 'loan')} to="/buy-cover" className="main-button lg:w-3/12 md:w-9/12 w-full text-center md:text-left">Buy cover with loan</Link>
                </div>
            </div>

            {/* insurance info section */}
            <InsurancePackage></InsurancePackage>

            {/* Oyo insurance agency */}
            <OyoAgency></OyoAgency>

            {/* Customer Expectation */}
            <CustomerExpectation></CustomerExpectation>

            {/* Testimonies */}
            <Testimonials></Testimonials>

            {/* Ready to talk */}
            <ReadyTalk></ReadyTalk>
        </div>
    )
}

export default Home
