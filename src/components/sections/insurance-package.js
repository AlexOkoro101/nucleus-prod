import React from 'react';
import { Link } from 'react-router-dom';
import lshs from '../../assets/img/lshs.png';

function InsurancePackage() {
    return (
        <div className="p-8 lg:p-40 font-primary">
            <div className="text-center mb-8">
                <p className="font-bold text-2xl mb-6">Government health <br /> Insurance Packages</p>
                <p className="font-medium insurance-caption">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
            </div>

            <div className="flex justify-between lg:gap-x-32 gap-x-0 lg:flex-row flex-col">
                <div className="flex-1">
                    <p className="font-extrabold text-3xl text-black mb-14">Are you a <br /> resident of Lagos <br /> state?</p>
                    <p className="font-medium text-xs color-secondary mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum sit aliquet gravida rhoncus gravida. Volutpat consectetur ultrices dignissim nisl, adipiscing amet, feugiat quis. Sem bibendum bibendum quis suspendisse odio commodo commodo. Mattis nunc magnis aliquam laoreet </p>
                    <Link to='/buy-cover' className="new-button2 rounded-xl text-sm inline-block">Buy Cover</Link>
                </div>
                <div className="flex-2">
                    <img src={lshs} alt="lshs" />
                </div>
            </div>
        </div>
    )
}

export default InsurancePackage
