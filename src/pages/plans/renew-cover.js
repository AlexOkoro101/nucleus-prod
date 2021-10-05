import React, { useState } from 'react'
import Banner from './shared/banner'
import user from '../../assets/img/vector.svg'
import './plans.css'
import Individual from './individual'

function RenewCover() {
    const [individualTab, setindividualTab] = useState(true)
    const changeTab = (tab) => {
        if(tab === 'individual') {
            setindividualTab(true)
        } else {
            setindividualTab(false)
        }
    }
    const chooseImage = () => {
        document.getElementById('photo').click();  
        
    }

    return (
        <div>
            <Banner bannerHeader="Renew Cover"></Banner>

            <div className="px-52 font-primary mb-40">
                <div className="form text-center px-5">
                    <div className="tabs">
                        <ul>
                            <li className={individualTab ? "active cursor-pointer" : " cursor-pointer"} onClick={() => changeTab('individual')}>Individual</li>
                            <li className={!individualTab ? "active cursor-pointer" : " cursor-pointer"} onClick={() => changeTab('SME')}>SME</li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        {individualTab ? (
                            <>
                                <div className="w-full text-left">
                                    <input className="renew-cover-input" type="text" placeholder="Enter Phone number or Policy Number" />
                                    <button className="renew-cover-button">Proceed</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full text-left">
                                    <input className="renew-cover-input" type="text" placeholder="Enter company name or Rc number" />
                                    <button className="renew-cover-button">Proceed</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default RenewCover
