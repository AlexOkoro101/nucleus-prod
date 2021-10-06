import React from 'react'
import Banner from './shared/banner'
import user from '../../assets/img/vector.svg'

import './plans.css'

function SME() {
    const chooseImage = () => {
        document.getElementById('photo').click();  
        
    }

    return (
        <div>
            <Banner bannerHeader="SME"></Banner>

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

                                <div className="flex gap-x-8 items-center border-b border-gray-200 pb-14 mb-8">
                                    <div className="checkbox">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="enrollee-border">

                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">First Name:</p>
                                                <p className="text-black text-sm font-medium">Peter </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Last Name:</p>
                                                <p className="text-black text-sm font-medium">Parker</p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Address:</p>
                                                <p className="text-black text-sm font-medium">6, Ajala street, ikeja, Lagos state</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Gender:</p>
                                                <p className="text-black text-sm font-medium">Female </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Email:</p>
                                                <p className="text-black text-sm font-medium">name@example.com</p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Phone:</p>
                                                <p className="text-black text-sm font-medium">081xxxxxxx</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Hospital:</p>
                                                <p className="text-black text-sm font-medium">name@example.com </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Plan:</p>
                                                <p className="text-black text-sm font-medium">Starter Plan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg class="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </div>
                                </div>

                                <div className="flex gap-x-8 items-center border-b border-gray-200 pb-14 mb-8">
                                    <div className="checkbox">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="enrollee-border">

                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">First Name:</p>
                                                <p className="text-black text-sm font-medium">Peter </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Last Name:</p>
                                                <p className="text-black text-sm font-medium">Parker</p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Address:</p>
                                                <p className="text-black text-sm font-medium">6, Ajala street, ikeja, Lagos state</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Gender:</p>
                                                <p className="text-black text-sm font-medium">Female </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Email:</p>
                                                <p className="text-black text-sm font-medium">name@example.com</p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Phone:</p>
                                                <p className="text-black text-sm font-medium">081xxxxxxx</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Hospital:</p>
                                                <p className="text-black text-sm font-medium">name@example.com </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Plan:</p>
                                                <p className="text-black text-sm font-medium">Starter Plan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg class="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </div>
                                </div>

                                <div className="flex gap-x-8 items-center border-b border-gray-200 pb-14 mb-8">
                                    <div className="checkbox">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="enrollee-border">

                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">First Name:</p>
                                                <p className="text-black text-sm font-medium">Peter </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Last Name:</p>
                                                <p className="text-black text-sm font-medium">Parker</p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Address:</p>
                                                <p className="text-black text-sm font-medium">6, Ajala street, ikeja, Lagos state</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Gender:</p>
                                                <p className="text-black text-sm font-medium">Female </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Email:</p>
                                                <p className="text-black text-sm font-medium">name@example.com</p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Phone:</p>
                                                <p className="text-black text-sm font-medium">081xxxxxxx</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-9">
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Hospital:</p>
                                                <p className="text-black text-sm font-medium">name@example.com </p>
                                            </div>
                                            <div className="flex gap-x-1">
                                                <p className="color-faded text-sm font-medium">Plan:</p>
                                                <p className="text-black text-sm font-medium">Starter Plan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg class="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="add-enrollees flex justify-end">
                                <p className="color-primary text-base font-bold flex gap-x-2"><span><svg className="w-6 h-6" fill="none" stroke="#663391" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg></span>   <span>Add Enrollee</span> </p>
                            </div>

                            <div className="flex gap-x-4">
                                <div className="plan-price-box flex flex-col justify-center">
                                    <p className="text-sm text-white font-medium">Price</p>
                                    <p className="text-lg font-medium text-white">N19,900</p>
                                </div>
                                <div className="plan-price-box flex flex-col justify-center">
                                    <p className="text-sm text-white font-medium">Loan Tenor</p>
                                    <p className="text-lg font-medium text-white">3 Months</p>
                                </div>
                                <div className="plan-duration-box flex flex-col justify-center">
                                    <p className="text-sm text-white font-medium">Plan Duration</p>
                                    <p className="text-lg font-medium text-white">12 Months</p>
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

export default SME
