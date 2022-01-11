import Banner from "../plans/shared/banner"
import phone from '../../assets/img/phone.svg'
import mail from '../../assets/img/mail.svg'
import location from '../../assets/img/location.svg'
import map from '../../assets/img/map.svg'
import './contact.css'

import client1 from '../../assets/img/client1.png';
import client2 from '../../assets/img/client2.png';
import client3 from '../../assets/img/client3.svg';
import client4 from '../../assets/img/client4.svg';
import client5 from '../../assets/img/client5.svg';

function Contact() {
    return (
        <div>
            <Banner bannerHeader="CONTACT US"></Banner>

            <div className="lg:px-40 px-8 relative">
                <div className="relative w-full h-44">
                    <div className="absolute -top-40 w-full bg-white flex flex-col lg:flex-row gap-x-32 px-16 py-14 rounded-lg shadow-xl mb-10">
                        <div className="flex flex-col gap-y-2 text-center lg:w-1/3">
                            <img src={phone} alt="" className="h-14" />
                            <p className="font-medium text-base text-black">Phone</p>
                            <p className="text-sm color-primary">+2348077326219</p>
                        </div>

                        <div className="flex flex-col gap-y-2 text-center lg:w-1/3">
                            <img src={mail} alt="" className="h-14" />
                            <p className="font-medium text-base text-black">Email</p>
                            <p className="text-sm color-primary">hello@nucleusis.io</p>
                        </div>

                        <div className="flex flex-col gap-y-2 text-center lg:w-1/3">
                            <img src={location} className="h-14" alt="" />
                            <p className="font-medium text-base text-black">Location</p>
                            <p className="text-sm color-primary">Olla’s Place, Millenium Estate, Lekki Phase 1, Lagos</p>
                        </div>
                    </div> 

                </div>

                <div className="px-24">
                    <div className="flex gap-x-2 items-center mb-11">
                        <div className="w-1 bg-primary h-20">

                        </div>
                        <h1 className="font-extrabold text-4xl text-black font">Have a message <br />  for us?</h1>
                    </div>

                    <div className="form flex flex-col gap-y-4 font">
                        <div className="flex lg:flex-row flex-col gap-x-12">
                            <input type="text" className="w-full contact-input" placeholder="Name" />
                            <input type="email" className="w-full contact-input" placeholder="Email" />
                        </div>
                        <div>
                            <input type="text" className="w-full contact-input" placeholder="Subject" />
                        </div>
                        <div>
                            <textarea className="w-full contact-input h-40" placeholder="How may we assist you?"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="cursor-pointer contact-btn mb-14 font" value="Send Message" />
                        </div>
                    </div>
                </div> 
            </div>

            <div className="w-full">
                <img src={map} className="w-full object-cover" alt="" />
            </div>


            <div className="lg:px-40 px-8 pb-16 bg-white relative w-full items-center">
                <div className="bg-white lg:px-10 px-2 py-8 flex justify-between contact-client">
                    <img src={client1} alt="client" />
                    <img src={client2} alt="client" />
                    <img src={client3} alt="client" />
                    <img src={client4} alt="client" />
                    <img src={client5} alt="client" />
                </div>

            </div>
            
        </div>
    )
}

export default Contact
