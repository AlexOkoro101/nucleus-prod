import Banner from "../plans/shared/banner"
import './about.css'
import drugs from  '../../assets/img/drugs.svg'
import ReadyTalk from "../../components/sections/ready-talk"

function About() {
    return (
        <div>
            <Banner bannerHeader="ABOUT US"></Banner>

            <div className="lg:px-40 px-8">
                <div className="who-we-are justify-between flex flex-col lg:flex-row lg:gap-x-16 gap-x-0 gap-y-5 lg:gap-y-0 mb-20">
                    <div className="flex gap-x-2 items-center">
                        <div className="w-1 bg-primary h-20">

                        </div>
                        <h1 className="font-extrabold text-4xl text-black font">Know about <br /> Who we are</h1>
                    </div>
                    <p className="lg:w-3/5 w-full text-sm font">
                        We are a team of world-class entrepreneurs, services technologists & health care experts working together to connect Africa to the Global Health Care standards whilst rewarding our stakeholders. <br /><br /> 
                        We have developed a technology ecosystem consisting of Web Portal, Mobile App and USSD shortcode to enable HMOs monitor Providers and Policy holders across touchpoints in the Healthcare value chain.
                    </p>
                </div>

                <div className="font">
                    <h1 className="relative offer-header font font-extrabold text-4xl text-black text-center">What we offer</h1>

                    <div className="flex lg:flex-row flex-col lg:gap-x-28 gap-x-0 gap-y-8 lg:gap-y-0">
                        <div className="lg:w-1/2 w-full">
                            <h1 className="text-2xl font-semibold color-primary mb-6">HMOs (Health Insurers)</h1>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Birds eye view of Care details across hospitals (Drugs administered, Amount invoiced etc).</p>
                            </div>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Analytics & Reporting</p>
                            </div>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Significant reduction in over invoicing as Policy Holders must electronically validate & approve Care Costs.</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl font-semibold color-primary mb-6">Care Providers (Hospitals)</h1>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Seamless validation for Policy Details.</p>
                            </div>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Cloud Storage for Health Records.</p>
                            </div>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Stress free reconciliation of Care Costs between Hospitals & HMOs</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:gap-x-28 gap-x-0 gap-y-8 lg:gap-y-0 lg:items-center mb-24">
                        <div className="lg:w-1/2 w-full">
                            <h1 className="text-2xl font-semibold color-primary mb-6">Enrollment Agents</h1>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">Mobile App for instant enrollment including image capture</p>
                            </div>
                            <div className="flex gap-x-5 items-center mb-6">
                                <div className="bg-primary p-px">
                                    <svg className="w-3 h-3" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p className="text-sm">POS devices for capturing payments</p>
                            </div>
                        </div>
                        <div>
                            <img src={drugs} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            {/* Ready to talk */}
            <ReadyTalk></ReadyTalk>
        </div>
    )
}

export default About
