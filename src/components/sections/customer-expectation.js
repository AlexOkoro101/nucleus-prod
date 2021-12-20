import React from 'react'

function CustomerExpectation() {
    return (
        <div className="lg:px-40 px-8 lg:pt-28 lg:pb-52 pt-8 pb-8 text-center">
            <div className="header text-center mb-8">
                <p className="font-extrabold text-black text-3xl mb-6">We always try to understand <br /> customers expectation</p>
            </div>
            <div className="map-bg lg:px-52 px-0">
                <p className="font-medium expectation-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris <br /> elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur</p>
                <div className="flex justify-between mt-16 mb-5">
                    <div>
                        <p className="font-extrabold counter">1000+</p>
                        <p className="font-medium text-xs color-secondary">Happy clients</p>
                    </div>
                    <div>
                        <p className="font-extrabold counter">20k</p>
                        <p className="font-medium text-xs color-secondary">HMOs</p>
                    </div>
                    <div>
                        <p className="font-extrabold counter">500+</p>
                        <p className="font-medium text-xs color-secondary">Workers</p>
                    </div>
                    <div>
                        <p className="font-extrabold counter">10k</p>
                        <p className="font-medium text-xs color-secondary">Feedbacks</p>
                    </div>
                </div>
                <div className="question">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-black font-extrabold text-xl">Have any question about us?</p>
                            <p className="text-xs color-secondary font-medium text-left">Don’t hesitate tocontact us</p>
                        </div>
                        <button className="contact-get-started">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerExpectation
