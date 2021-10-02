import React from 'react';
import oyo from '../../assets/img/oyo-agency.png'

function OyoAgency() {
    return (
        <div className="oyo-agency pt-16 px-40 pb-24 flex justify-between  gap-x-32">
            <div className="flex-2">
                <img src={oyo} alt="Oyo Insurance Agency" />
            </div>
            <div className="flex-1">
                <p className="font-extrabold text-3xl text-black mb-14">Are you a residence <br /> in Oyo state<br /> state?</p>
                <p className="font-medium text-xs color-secondary mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur ultrices dignissim nisl, adipiscing amet, feugiat quis. Sem bibendum bibendum quis suspendisse odio commodo commodo. Mattis nunc magnis aliquam laoreet </p>
                <p className="read-more">Read more...</p>
            </div>
        </div>
    )
}

export default OyoAgency
