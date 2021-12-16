import React, { useEffect, useState } from 'react'
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Banner from './shared/banner'
import user from '../../assets/img/vector.svg'
import './plans.css'
import { enviroment } from '../../components/shared/enviroment'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from 'react-router-dom';
var Spinner = require('react-spinkit');


function Individual() {
    //Routing
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    // const [indexes, setIndexes] = React.useState([]);
    // const [counter, setCounter] = React.useState(0);
    const { control, register, handleSubmit } = useForm();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "dependants", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
      });
    
    


    //Notif
    const paymentSuccess = () => toast.success('Payment Successfull', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toastify"
        });

    //Hooks
    const [submit, setsubmit] = useState(false)
    const [planDetails, setplanDetails] = useState(null)
    const [initialPageName, setinitialPageName] = useState("Individual Plan")


    const [isloading, setisloading] = useState(false)
    const [isloadingPayment, setisloadingPayment] = useState(false)
    const [error, seterror] = useState(null)

    //Form values
    const [imgData, setimgData] = useState('')
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [mname, setmname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [gender, setgender] = useState("")
    const [dob, setdob] = useState("")
    const [address, setaddress] = useState("")
    const [hospital, sethospital] = useState("")
    const [hospitalAddress, sethospitalAddress] = useState("")
    const [exisitingCondition, setexisitingCondition] = useState(false)
    const [healthCondition, sethealthCondition] = useState("")
    const [conditionDuration, setconditionDuration] = useState("")
    const [conditionMedication, setconditionMedication] = useState("")

    const [dependentArray, setdependentArray] = useState([])



    useEffect(() => {
        getPlanDetails()
        return () => {
            getPlanDetails()
        }
    }, [])
    //End of Hooks


    //Functions
    const chooseImage = () => {
        document.getElementById('photo').click();  
        
    }
    
    function encodeImageFileAsURL() {

        var filesSelected = document.getElementById("photo").files;
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
    
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            setimgData(fileLoadedEvent.target.result); // <--- data: base64
            // console.log(imgData)
    
            // var newImage = document.createElement('img');
            // newImage.src = srcData;
    
            // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
          }
          fileReader.readAsDataURL(fileToLoad);
        }
    }

    const transformData = (data) => {
        const trfObj = {};
        return data.map((obj) => {
            Object.keys(obj).forEach((key) => {
                const {name, value} = obj[key];
                trfObj[name] = value;
            })
            return trfObj;
        })
    }

    const submitForm = (data) => {
        // e.preventDefault()
        console.log(data?.dependants)
        setdependentArray(data?.dependants.map(person => ({ 
            dependantFirstName: person.dependantFirstName,
            dependantLastName: person.dependantLastName,
            dependantEmail: person.dependantEmail,
            dependantPhoneNumber: person.dependantPhoneNumber,
            dependantGender: person.dependantGender,
            dependantDob: person.dependantDob,
            dependantAddress: person.dependantAddress,
            dependantHospital: person.dependantHospital,
            dependantExistingConditions: person.existingCondition,
            dependantCondition: {
                healthCondition: person.healthCondition,
                healthConditionDuration: person.conditionDuration,
                healthConditionMedication: person.conditionMedication
            }

        })))
        // setdependentArray(data.dependants.map())

        setinitialPageName("Confirm Details")
        setsubmit(true)
    

    }

    const getPlanDetails = () => {
        setisloading(true)
        seterror(false)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${enviroment.API_KEY}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + "plans/7", requestOptions)
        .then(response => response.json())
        .then(result => {
            setisloading(false)
            console.log(result)
            setplanDetails(result.data)
        })
        .catch(error => {
            console.log('error', error)
            seterror(error)
        });
    }

    // const addDependants = () => {
    //     setdependants([...dependants, dependatObj]);
    //     console.log(dependants)
    // }

    // const removeDependant = (index) => {
    //     console.log(index)
    //     const newArray = dependants.filter((dependant, id) => {
    //         return id !== index
    //     })
    //     setdependants(newArray)
    // }

    // const setFirstName = (e, id) => {
    //     // console.log(e.target?.getAttribute("name"))
    //     // // console.log(index)

    //     // dependants[index].firstName.value = e.target.value
    //     var obj = dependants.map((dependant, index) => {
    //         if(index == id) {
    //             dependant.firstName.value = e.target.value
    //         }
    //         return dependant;
            
    //     })
    //     setdependants(obj)
        
    // }

    const buyPlan = () => {
        setisloadingPayment(true)
        seterror(null)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${enviroment.API_KEY}`);

        const obj = {
            plan: 7,
            entity: {
                "firstname": fname,
                "lastname": lname,
                "email": email,
                "phone": phone,
                "gender": gender,
                "dob": dob,
                "address": address,
                "hospital": hospital,
                "photo": `${imgData}`,
                "agreement": true,
                "existingConditions": exisitingCondition,
                "condition": {
                "healthCondition": healthCondition,
                "healthConditionDuration": conditionDuration,
                "healthConditionMedication": conditionMedication
                }
            },
            dependants: dependentArray

        }

        if(!dependentArray.length) {
            delete obj.dependants
        }

        console.log(obj)

    

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(obj),
        redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + "buy-plan", requestOptions)
        .then(response => response.json())
        .then(result => {
            setisloadingPayment(false)
            console.log(result)
            if(result.status) {
                generateLink(result.data)
            }

        })
        .catch(error => console.log('error', error));
    }


    const generateLink = (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${enviroment.API_KEY}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "orderReference": data.orderRef
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + "buy-plan/payment", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.status) {
                window.open(result.data.link)
            }
        })
        .catch(error => console.log('error', error));
    }

    


    //End of Functions

    return (
        <div>
            <ToastContainer />
            <Banner bannerHeader={initialPageName}></Banner>
            
            {isloading ? (
                <div className='px-40 h-screen text-center'>
                    <Spinner className='loader' name='circle' fadeIn='none' color='#8e2b8d' />

                </div>
            ) : (
                <div className="px-40 font-primary">
                    <div className="form">
                        {!submit ? (
                            <form onSubmit={handleSubmit(submitForm)}>
                                <h1 className="header mb-3">Plan Details</h1>
                                <div>
                                    <div className="flex input-primary w-2/3 px-6 outline-none focus:outline-none items-center">
                                        {planDetails?.plan.planName}
                                    </div>
                                </div>

                                <div className="mt-10 flex gap-x-4">
                                    <div className="plan-price-box flex flex-col justify-center">
                                        <p className="text-sm text-white font-medium">Price</p>
                                        <p className="text-lg font-medium text-white">N{planDetails?.plan.planAmount.amount}</p>
                                    </div>
                                    <div className="plan-price-box flex flex-col justify-center">
                                        <p className="text-sm text-white font-medium">Loan Tenor</p>
                                        <p className="text-lg font-medium text-white">{planDetails?.plan.planTenure}</p>
                                    </div>
                                    <div className="plan-duration-box flex flex-col justify-center">
                                        <p className="text-sm text-white font-medium">Plan Duration</p>
                                        <p className="text-lg font-medium text-white">{planDetails?.plan.planTenure}</p>
                                    </div>
                                </div>

                                <div className="mt-10 w-72 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:flex md:flex-col">
                                    <div className="w-full flex-grow">
                                        <h2 className="text-center font-bold uppercase mb-4">Plan Benefits</h2>
                                        {/* <h3 className="text-center font-bold text-4xl md:text-5xl mb-4">N19,900<span className="text-lg">/yr</span></h3> */}
                                        
                                        <ul className="text-sm mb-8 plan-detail">
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.general_consultation ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.general_consultation ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>General Consultation</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.glasses ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.glasses ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Glasses Specialist</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.specialist_consultation ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.specialist_consultation ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Consultation</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.paedetrics ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.paedetrics ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Paediatrics</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.mental_care ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.mental_care ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Mental Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.admission ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.admission ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Admission</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.fertility_care ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.fertility_care ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Fertility Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.antenatal_care ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.antenatal_care ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Antenatal Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.optical_care ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.optical_care ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Optical Care</span> </li>
                                            <li className="leading-tight flex mb-2 gap-x-4"><svg className="w-6 h-6" fill="none" stroke={planDetails?.plan.planBenefits.dental_care ? "#00B252" : "#f00"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={planDetails?.plan.planBenefits.dental_care ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg> <span>Dental Care</span> </li>
                                        </ul>
                                    </div>
                                </div>

                                <h1 className="header mt-9 mb-10">Personal Details</h1>

                                <div className="mb-10">
                                    <label htmlFor="photo"></label>
                                    <input className="input-primary px-6" type="file" onChange={() => encodeImageFileAsURL()} name="photo" id="photo" className="hidden" />
                                    <div className="flex gap-x-2 w-2/6 cursor-pointer items-center" onClick={() => {chooseImage()}}>
                                        <img src={imgData ? imgData : user} alt="db" width="68px" height="68px"/>
                                        <p className="text-sm font-medium">Tap to upload image</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-6 mb-10">
                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="first-name">First Name</label>
                                            <input value={fname} onChange={(e) => setfname(e.target.value)} className="input-primary px-6 focus:outline-none" type="text" name="first-name" id="first-name" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="last-name">Last Name</label>
                                            <input value={lname} onChange={(e) => setlname(e.target.value)}  className="input-primary px-6 focus:outline-none" type="text" name="last-name" id="last-name" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="middle-name">Middle Name</label>
                                            <input value={mname} onChange={(e) => setmname(e.target.value)}  className="input-primary px-6 focus:outline-none" type="text" name="middle-name" id="middle-name" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="gender">Gender</label>
                                            <select name="gender" id="gender" className="input-primary px-6 focus:outline-none" value={gender} onChange={(e) => setgender(e.target.value)}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="dob">D.O.B</label>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="entity-dob" />
                                            {/* <input value={dob} onChange={(e) => setdob(e.target.value)} className="input-primary px-6 focus:outline-none" type="text" name="dob" id="dob" /> */}
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="email">Email</label>
                                            <input value={email} onChange={(e) => setemail(e.target.value)}  className="input-primary px-6 focus:outline-none" type="email" name="email" id="email" />
                                        </div>
                                    </div>

                                    <div className="flex  justify-between gap-x-3">
                                        <div className="flex flex-col w-4/12">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input value={phone} onChange={(e) => setphone(e.target.value)}  className="input-primary px-6 focus:outline-none" type="tel" name="phone" id="phone" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="address">Address</label>
                                            <input value={address} onChange={(e) => setaddress(e.target.value)}  className="input-primary px-6 focus:outline-none" type="text" name="address" id="address" />
                                        </div>
                                    </div>

                                    <h1 className="header">Hospital Details</h1>

                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col w-4/12">
                                            <label htmlFor="location">Name</label>
                                            <input value={hospital} onChange={(e) => sethospital(e.target.value)}  className="input-primary px-6 focus:outline-none" type="text" name="location" id="location" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="hospital">Address</label>
                                            <input value={hospitalAddress} onChange={(e) => sethospitalAddress(e.target.value)}   className="input-primary px-6 focus:outline-none" type="text" name="hospital" id="hospital" />
                                        </div>
                                    </div>

                                    <h1 className="header">Condition </h1>

                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col  w-4/12">
                                            <label htmlFor="exisiting-condition">Existing Condition</label>
                                            <select name="exisiting-condition" id="exisiting-condition" className="input-primary px-6 focus:outline-none" value={exisitingCondition} onChange={(e) => setexisitingCondition(e.target.value)}>
                                                <option value={true}>True</option>
                                                <option value={false}>False</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="health-condition">Health Condition</label>
                                            <input value={healthCondition} onChange={(e) => sethealthCondition(e.target.value)}   className="input-primary px-6 focus:outline-none" type="text" name="health-condition" id="health-condition" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-x-3">
                                        <div className="flex flex-col  w-4/12">
                                            <label htmlFor="condition-duration">Condition Duration</label>
                                            <input name="condition-duration" id="condition-duration" className="input-primary px-6 focus:outline-none" value={conditionDuration} onChange={(e) => setconditionDuration(e.target.value)} />
                                                
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label htmlFor="condition-medication">Condition Medication</label>
                                            <input value={conditionMedication} onChange={(e) => setconditionMedication(e.target.value)}   className="input-primary px-6 focus:outline-none" type="text" name="condition-medication" id="condition-medication" />
                                        </div>
                                    </div>


                                </div>
                                

                                <hr />


                                {fields.map(({id}, index) => {
                                    return (
                                    <div key={index} className="mb-20">
                                        <h1 className="header mt-9 mb-10">Dependant Details {`- ${index + 1}`}</h1>
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex justify-between gap-x-3">
                                                <div className="flex flex-col flex-1">
                                                    <label>First Name</label>
                                                    <input {...register(`dependants.${index}.dependantFirstName`)} className="input-primary px-6 focus:outline-none" type="text"  />
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label>Last Name</label>
                                                    <input {...register(`dependants.${index}.dependantLastName`)} className="input-primary px-6 focus:outline-none" type="text" />
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label>Middle Name</label>
                                                    <input  {...register(`dependants.${index}.dependantMiddleName`)} className="input-primary px-6 focus:outline-none" type="text"  />
                                                </div>
                                            </div>

                                            <div className="flex justify-between gap-x-3">
                                                <div className="flex flex-col flex-1">
                                                    <label>Gender</label>
                                                    <select {...register(`dependants.${index}.dependantGender`)} className="input-primary px-6 focus:outline-none" >
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label>D.O.B</label>
                                                    <input {...register(`dependants.${index}.dependantDob`)} className="input-primary px-6 focus:outline-none" type="text" />
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label>Email</label>
                                                    <input {...register(`dependants.${index}.dependantEmail`)} className="input-primary px-6 focus:outline-none" type="email" />
                                                </div>
                                            </div>

                                            <div className="flex  justify-between gap-x-3">
                                                <div className="flex flex-col w-4/12">
                                                    <label>Phone Number</label>
                                                    <input {...register(`dependants.${index}.dependantPhoneNumber`)} className="input-primary px-6 focus:outline-none" type="tel" />
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label>Address</label>
                                                    <input {...register(`dependants.${index}.dependantAddress`)} className="input-primary px-6 focus:outline-none" type="text" />
                                                </div>
                                            </div>

                                            <h1 className="header">Dependant {`${index + 1}`} Hospital Details</h1>

                                            <div className="flex justify-between gap-x-3">
                                                <div className="flex flex-col w-4/12">
                                                    <label>Name</label>
                                                    <input {...register(`dependants.${index}.dependantHospital`)} className="input-primary px-6 focus:outline-none" type="text" />
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label>Address</label>
                                                    <input {...register(`dependants.${index}.dependantHospitalAddress`)} className="input-primary px-6 focus:outline-none" type="text" />
                                                </div>
                                            </div>

                                            <h1 className="header">Dependant {`${index + 1}`} Condition </h1>

                                            <div className="flex justify-between gap-x-3">
                                                <div className="flex flex-col  w-4/12">
                                                    <label htmlFor="exisiting-condition">Existing Condition</label>
                                                    <select name="existing-condition" id="existing-condition" className="input-primary px-6 focus:outline-none" {...register(`dependants.${index}.existingCondition`)}>
                                                        <option value={true}>True</option>
                                                        <option value={false}>False</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label htmlFor="health-condition">Health Condition</label>
                                                    <input  className="input-primary px-6 focus:outline-none" name="health-condition" id="health-condition" {...register(`dependants.${index}.healthCondition`)} />
                                                </div>
                                            </div>

                                            <div className="flex justify-between gap-x-3">
                                                <div className="flex flex-col  w-4/12">
                                                    <label htmlFor="condition-duration">Condition Duration</label>
                                                    <input name="condition-duration" id="condition-duration" className="input-primary px-6 focus:outline-none" {...register(`dependants.${index}.conditionDuration`)} />
                                                        
                                                </div>
                                                <div className="flex flex-col flex-1">
                                                    <label htmlFor="condition-medication">Condition Medication</label>
                                                    <input  className="input-primary px-6 focus:outline-none" name="condition-medication" id="condition-medication" {...register(`dependants.${index}.conditionMedication`)}  />
                                                </div>
                                            </div>

                                            
                                            <div>
                                                <p onClick={() => remove(index)} className="cursor-pointer text-red-600 text-xs font-bold flex gap-x-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> <span>Remove Dependant</span> </p>
                                            </div>

                                        

                                        </div>
                                    </div>
                                )})}


                                <div className="add-enrollees flex mt-10">
                                    <p onClick={() => append({})} className="cursor-pointer color-primary text-base font-bold flex gap-x-2"><span><svg className="w-6 h-6" fill="none" stroke="#663391" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg></span>   <span>Add Dependants</span> </p>
                                </div>

                                <div>
                                    <input type="submit" className="cursor-pointer individual-btn mt-14 mb-14 uppercase" />
                                </div>
                                
                            </form>

                        ) : (
                            <div className="confirm-cover-details">
                                <div>
                                    <h1 className="header mb-3">Plan Details</h1>
                                    <div>
                                        <p>{planDetails?.plan.planName}</p>
                                    </div>

                                    <h1 className="header mt-9 mb-10">Personal Details</h1>

                                    <div className="mb-10">
                                        <label htmlFor="photo"></label>
                                        <div className="flex gap-x-2 w-2/6 cursor-pointer items-center">
                                            <img src={imgData} alt="db" width="68px" height="68px"/>
                                        </div>
                                    </div>

                                    <table className="table-fixed w-full">
                                        <tbody>
                                            <tr className="">
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">First Name</span>  <br /> <span className="text-black font-medium text-lg">{fname}</span>  </td>
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">Last Name</span>  <br /> <span className="text-black font-medium text-lg">{lname}</span> </td>
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">Middle Name</span>  <br /> <span className="text-black font-medium text-lg">{mname}</span> </td>
                                            </tr>
                                            <tr className="">
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">Gender</span>  <br /> <span className="text-black font-medium text-lg">{gender}</span> </td>
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">D.O.B</span>  <br /> <span className="text-black font-medium text-lg">{dob}</span> </td>
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">Email</span>  <br /> <span className="text-black font-medium text-lg">{email}</span> </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">Phone Number</span>  <br /> <span className="text-black font-medium text-lg">{phone}</span> </td>
                                                <td className="p-4 border border-gray-200" colSpan="2"><span className="color-primary font-semibold text-lg">Address</span>  <br /> <span className="text-black font-medium text-lg">{address}</span> </td>
                                            </tr>
                                            <tr className="bg-gray-300">
                                                <td className="p-3 font-semibold text-lg" colSpan="3">Hospital Details</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-gray-200"><span className="color-primary font-semibold text-lg">Location</span>  <br /> <span className="text-black font-medium text-lg">{hospitalAddress}</span> </td>
                                                <td className="p-4 border border-gray-200" colSpan="2"><span className="color-primary font-semibold text-lg">Hospital</span>  <br /> <span className="text-black font-medium text-lg">{hospital}</span> </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-gray-200" colSpan="3"><span className="color-primary font-semibold text-lg">Price</span>  <br /> <span className="text-black font-medium text-lg">N{planDetails?.plan.planAmount.amount}</span> </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div>
                                        <button 
                                        onClick={() => {
                                        buyPlan()
                                        
                                        }}
                                         type="button" className="individual-btn mt-14 mb-14 uppercase">{isloadingPayment ? (<Spinner name="circle" color='#fff' fadeIn='none' />) : ("Make Payment")}</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            )}

        </div>
    )
}

export default Individual
