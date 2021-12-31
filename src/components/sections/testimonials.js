import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

function Testimonials() {



    return (
        <div className="lg:px-40 px-8 py-14 testimony">
            <div className="header text-center mb-8">
                <p className="font-extrabold text-black text-3xl mb-6">What customers say about Us</p>
                <p className="font-medium expectation-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris <br /> elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
            </div>

            <div>
                <Slider {...settings}>
                <div className="bg-white lg:px-32 px-4 pt-4 pb-4 testimony-container justify-between gap-x-6">
                    <div className="dp">
                        <div></div>
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">John Doe</p>
                        <p className="color-primary font-medium text-sm mb-5">Web Developer</p>

                        <p className="color-secondary font-medium text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                    </div>
                </div>
                <div className="bg-white lg:px-32 px-8 pt-11 pb-20 testimony-container justify-between gap-x-6">
                    <div className="dp">
                        <div></div>
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">John Doe</p>
                        <p className="color-primary font-medium text-sm mb-5">Web Developer</p>

                        <p className="color-secondary font-medium text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                    </div>
                </div>
                <div className="bg-white lg:px-32 px-8 pt-11 pb-20 testimony-container justify-between gap-x-6">
                    <div className="dp">
                        <div></div>
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">John Doe</p>
                        <p className="color-primary font-medium text-sm mb-5">Web Developer</p>

                        <p className="color-secondary font-medium text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                    </div>
                </div>
                <div className="bg-white lg:px-32 px-8 pt-11 pb-20 testimony-container justify-between gap-x-6">
                    <div className="dp">
                        <div></div>
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">John Doe</p>
                        <p className="color-primary font-medium text-sm mb-5">Web Developer</p>

                        <p className="color-secondary font-medium text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                    </div>
                </div>
                <div className="bg-white lg:px-32 px-8 pt-11 pb-20 testimony-container justify-between gap-x-6">
                    <div className="dp">
                        <div></div>
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">John Doe</p>
                        <p className="color-primary font-medium text-sm mb-5">Web Developer</p>

                        <p className="color-secondary font-medium text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                    </div>
                </div>
                <div className="bg-white lg:px-32 px-8 pt-11 pb-20 testimony-container justify-between gap-x-6">
                    <div className="dp">
                        <div></div>
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">John Doe</p>
                        <p className="color-primary font-medium text-sm mb-5">Web Developer</p>

                        <p className="color-secondary font-medium text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials
