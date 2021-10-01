import React from 'react'
import InsurancePackage from '../../components/sections/insurance-package'
import './home.css'

function Home() {
    return (
        <div className="home font-primary">
            <div className="banner">
                <div className="banner-content p-40 bg-black bg-opacity-50">
                    <h1 className="text-white text-6xl font-extrabold mb-8">Buy the health insurance that works for you and your family</h1>
                    <p className="text-white text-sm mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi atque harum. Modi sed sit minus obcaecati, debitis tenetur deserunt perspiciatis, provident, dignissimos nostrum vero!</p>

                    <div className="home-buttons flex mb-5 gap-x-5">
                        <button className="buy-cover-button">Buy Cover</button>
                        <button className="transparent-button">Renew Cover</button>
                    </div>
                    <button className="main-button">Buy cover with loan</button>
                </div>
            </div>

            {/* insurance info section */}
            <InsurancePackage></InsurancePackage>
        </div>
    )
}

export default Home
