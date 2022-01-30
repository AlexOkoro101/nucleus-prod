import React from 'react'
import { useHistory } from 'react-router-dom';
import client1 from '../../assets/img/client1.png';
import client2 from '../../assets/img/client2.png';
import client3 from '../../assets/img/client3.svg';
import client4 from '../../assets/img/client4.svg';
import client5 from '../../assets/img/client5.svg';

function ReadyTalk() {
    const history = useHistory()

    return (
        <>
            {/* <div className="lg:px-40 px-8 bg-primary font-primary">
                <div className="text-center">
                    <div className="header pb-20">
                        <p className="pt-9 font-extrabold text-3xl mb-1 text-white">Ready to Talk?</p>
                        <p className="font-medium text-xs text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>

                        <button onClick={() => history.push('/contact')} className="contact-us-btn">Contact Us</button>

                        <p className="text-xl font-medium contact-stats">More that 1.5 million individuals use NucleusIS</p>

                    </div>
                </div>
            </div> */}
            <div className="lg:px-40 px-8 bg-white relative h-24 w-full">
                <div className="absolute bg-white lg:px-10 px-2 py-8 flex justify-between clients">
                    <img src={client1} alt="client" />
                    <img src={client2} alt="client" />
                    <img src={client3} alt="client" />
                    <img src={client4} alt="client" />
                    <img src={client5} alt="client" />
                </div>

            </div>

        </>
    )
}

export default ReadyTalk
