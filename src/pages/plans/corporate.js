import React from 'react'
import Banner from './shared/banner'
import user from '../../assets/img/vector.svg'
import './plans.css'

function Corporate() {
    const chooseImage = () => {
        document.getElementById('photo').click();  
        
    }

    return (
        <div>
            <Banner bannerHeader="Corporate Plan"></Banner>

            <div className="px-52 font-primary">
                <div className="form">
                    <form>

                        <h1 className="header mt-9 mb-10">Corporate Details</h1>

                        <div className="flex flex-col gap-y-6">
                            <div className="flex justify-between gap-x-3">
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="company-name">Company Name</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="company-name" id="company-name" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="rc-number">RC Number</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="rc-number" id="rc-number" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="company-email">Company Email</label>
                                    <input className="input-primary px-6 focus:outline-none" type="email" name="company-email" id="company-email" />
                                </div>
                            </div>

                            <div className="flex justify-between gap-x-3">
                                <div className="flex flex-col w-4/12">
                                    <label htmlFor="company-phone">Company Phone No.</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="company-phone" id="company-phone" />
                                </div>
                                <div className="flex flex-col flex-auto">
                                    <label htmlFor="industry">Industry</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="industry" id="industry" />
                                </div>
                                
                            </div>

                            <div className="flex  justify-between gap-x-3">
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="company-address">Company Address</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="company-address" id="company-address" />
                                </div>
                               
                            </div>

                            <div className="enrollees">

                                <h1 className="header mt-9 mb-10">Enrollees</h1>

                                <div className="mb-10">
                                    <label htmlFor="photo"></label>
                                    <input className="input-primary px-6" type="file" name="photo" id="photo" className="hidden" />
                                    <div className="flex gap-x-2 w-2/6 cursor-pointer items-center" onClick={() => {chooseImage()}}>
                                        <img src={user} alt="db" width="68px" />
                                        <p className="text-sm font-medium">Tap to upload image</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-6">
                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="first-name">First Name</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="first-name" id="first-name" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="last-name">Last Name</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="last-name" id="last-name" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="email">Email</label>
                                            <input className="input-primary px-6 focus:outline-none" type="email" name="email" id="email" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col w-4/12">
                                            <label htmlFor="enrollee-company-phone">Company Phone No.</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="enrollee-company-phone" id="enrollee-company-phone" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="dob">D.O.B</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="dob" id="dob" />
                                        </div>
                                    </div>

                                    <div className="flex  justify-between gap-x-3">
                                        
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="address">Address</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="address" id="address" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col w-4/12">
                                            <label htmlFor="gender">Gender</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="gender" id="gender" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="plan">Plan</label>
                                            <input className="input-primary px-6 focus:outline-none" type="text" name="plan" id="plan" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hospital-details">
                                <h1 className="header mt-9 mb-10">Hospital Details</h1>

                                <div className="flex justify-between gap-x-3">
                                    <div className="flex flex-col flex-1">
                                        <label htmlFor="hospital-state">State</label>
                                        <input className="input-primary px-6 focus:outline-none" type="text" name="hospital-state" id="hospital-state" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <label htmlFor="hospital-name">Hospital</label>
                                        <input className="input-primary px-6 focus:outline-none" type="text" name="hospital-name" id="hospital-name" />
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="add-enrollees flex justify-end">
                                <p className="color-primary text-base font-bold flex gap-x-2"><span><svg className="w-6 h-6" fill="none" stroke="#663391" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg></span>   <span>Add Enrollee</span> </p>
                            </div>

                            <div className="flex gap-x-16">
                                <div className="w-72 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:flex md:flex-col">
                                    <div className="w-full flex-grow">
                                        <h2 className="text-center font-bold uppercase mb-4">Plan Name</h2>
                                        <h3 className="text-center font-bold text-4xl md:text-5xl mb-4">N19,900<span className="text-lg">/yr</span></h3>
                                        
                                        <ul className="text-sm mb-8 plan-detail">
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#00B252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>General Consultation</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#00B252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Glasses Specialist</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#00B252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Consultation</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#00B252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Paediatrics</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#00B252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Mental Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#00B252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Admission</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#f00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> <span>Fertility Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#f00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> <span>Antenatal Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#f00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> <span>Optical Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke="#f00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> <span>Dental Care</span> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">First Name</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Last Name</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Address</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Gender</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Email</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Phone</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Hospital</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                    <div className="flex gap-x-1 mb-4">
                                        <p className="text-sm font-medium color-faded">Plan</p> {":"} 
                                        <p>{""}</p>
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className="flex gap-x-2 mb-3 mt-14 items-center">
                            <input type="checkbox" name="terms" id="terms" />
                            <p className="text-black font-bold text-base">Agree to our<span className="color-primary"> Terms and conditions</span></p>
                        </div>

                        <div>
                            <button type="submit" className="individual-btn mb-14 uppercase">Proceed</button>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Corporate
