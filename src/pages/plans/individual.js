import React from 'react'
import Banner from './shared/banner'
import user from '../../assets/img/vector.svg'
import './plans.css'

function Individual() {
    const chooseImage = () => {
        document.getElementById('photo').click();  
        
    }

    return (
        <div>
            <Banner bannerHeader="Individual Plan"></Banner>

            <div className="px-52 font-primary">
                <div className="form">
                    <form>
                        <h1 className="header mb-3">Plan Details</h1>
                        <div>
                            <select className="input-primary w-2/3 px-6 outline-none focus:outline-none" name="plan-detail" id="plan-detail">
                                <option value="Life Started">Life Starter</option>
                                <option value="Standard">Standard Plan</option>
                            </select>
                        </div>

                        <h1 className="header mt-9 mb-10">Personal Details</h1>

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
                                    <label htmlFor="middle-name">Middle Name</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="middle-name" id="middle-name" />
                                </div>
                            </div>

                            <div className="flex justify-between gap-x-3">
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="gender">Gender</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="gender" id="gender" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="dob">D.O.B</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="dob" id="dob" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="email">Email</label>
                                    <input className="input-primary px-6 focus:outline-none" type="email" name="email" id="email" />
                                </div>
                            </div>

                            <div className="flex  justify-between gap-x-3">
                                <div className="flex flex-col">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="phone" id="phone" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="address">Address</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="address" id="address" />
                                </div>
                            </div>

                            <h1 className="header">Hospital Details</h1>

                            <div className="flex justify-between gap-x-3">
                                <div className="flex flex-col">
                                    <label htmlFor="location">Location</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="location" id="location" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="hospital">Address</label>
                                    <input className="input-primary px-6 focus:outline-none" type="text" name="hospital" id="hospital" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="individual-btn mt-14 mb-14">Submit</button>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Individual
