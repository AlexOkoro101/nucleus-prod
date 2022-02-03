import React from 'react'
import './banner.css'

function Banner({bannerHeader}) {
    return (
        <div className="banner font-primary bg-cover">
            <div className="banner-opacity ">
                <h1 className="font-extrabold text-4xl text-white">{bannerHeader}</h1>
            </div>
        </div>
    )
}

export default Banner
