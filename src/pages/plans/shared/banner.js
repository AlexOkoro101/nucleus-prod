import React from 'react'
import './banner.css'

function Banner({bannerHeader}) {
    return (
        <div className="banner font-primary mb-28 bg-cover">
            <div className="banner-opacity ">
                <p className="font-extrabold text-4xl text-white">{bannerHeader}</p>
            </div>
        </div>
    )
}

export default Banner
