import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './shared/banner'
import user from '../../assets/img/vector.svg'
import './plans.css'
import Individual from './individual'
import { enviroment } from '../../components/shared/enviroment'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
var Spinner = require('react-spinkit');

function RenewCover() {
    const [individualTab, setindividualTab] = useState(true)
    const [phonePolicy, setphonePolicy] = useState("")
    const [companyRC, setcompanyRC] = useState("")
    const [customerDetail, setcustomerDetail] = useState(null)

    const [isloading, setisloading] = useState(false)
    const [error, seterror] = useState(null)

    //Routing
    const history = useHistory();


    //Notif
    const paymentSuccess = () => toast.success('Renewal Successfull', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toastify"
        });
    
    const changeTab = (tab) => {
        if(tab === 'individual') {
            setindividualTab(true)
        } else {
            setindividualTab(false)
        }
    }
    const chooseImage = () => {
        document.getElementById('photo').click();  
        
    }

    const RenewIndividual = () => {
        setisloading(true)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${enviroment.API_KEY}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + `buy-plan/renew?data=${phonePolicy}&type=individual`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.status == false) {
                setdetail(result.data)
            }
        })
        .catch(error => console.log('error', error));
            
            
    }

    const RenewSME = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${enviroment.API_KEY}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + `buy-plan/renew?data=${companyRC}&type=sme`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.status == false) {
                setdetail(result.data)
            }
        })
        .catch(error => console.log('error', error));
            
            
    }
        
    const setdetail = (data) => {
            setcustomerDetail(data)
            if(!customerDetail) {
                setcustomerDetail(data)
                console.log("Dont call")
                return
            } else {
                setisloading(false)
                handleFlutterPayment({
                    callback: (response) => {
                        console.log(response);
                        paymentSuccess()
                        setTimeout(() => {
                            // history.push('/')
                            window.location.assign('/')
                        }, 2000)
                        closePaymentModal() // this will close the modal programmatically
                    },
                    onClose: () => {},
                });
            }
            
    }

    

    const individualConfig = {
        public_key: 'FLWPUBK_TEST-89028cc12049cee2cb9302ca366395d5-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: customerDetail?.entity[0].entity_email,
          phonenumber: customerDetail?.entity[0].entity_phone,
          name: `${customerDetail?.entity[0].entity_firstname} ${customerDetail?.entity[0].entity_lastname} `,
        },
        customizations: {
          title: 'Renew Plan',
          description: 'Payment for subscription renewal',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }   
    const handleFlutterPayment = useFlutterwave(individualConfig); 

    const smeConfig = {
        public_key: 'FLWPUBK_TEST-89028cc12049cee2cb9302ca366395d5-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: customerDetail?.entity[0].entity_email,
          phonenumber: customerDetail?.entity[0].entity_phone,
          name: `${customerDetail?.entity[0].entity_firstname} ${customerDetail?.entity[0].entity_lastname} `,
        },
        customizations: {
          title: 'Renew Plan',
          description: 'Payment for subscription renewal',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }   
    const handleSMEFlutterPayment = useFlutterwave(smeConfig); 

    
    return (
        <div>
            <ToastContainer />
            <Banner bannerHeader="Renew Cover"></Banner>

            <div className="px-52 font-primary mb-40">
                <div className="form text-center px-5">
                    <div className="tabs">
                        <ul>
                            <li className={individualTab ? "active cursor-pointer" : " cursor-pointer"} onClick={() => changeTab('individual')}>Individual</li>
                            <li className={!individualTab ? "active cursor-pointer" : " cursor-pointer"} onClick={() => changeTab('SME')}>SME</li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        {individualTab ? (
                            <>
                                <div className="w-full text-left">
                                    <input className="renew-cover-input" type="text" placeholder="Enter Phone number or Policy Number" value={phonePolicy} onChange={(e) => setphonePolicy(e.target.value)} />
                                    <button onClick={RenewIndividual} type='button' className="renew-cover-button">{isloading ? (
                                        <Spinner name="circle" fadeIn='none' color='#fff'/>
                                    ) : (
                                        "Proceed"
                                    )} </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full text-left">
                                    <input className="renew-cover-input" type="text" placeholder="Enter company name or Rc number" value={companyRC} onChange={(e) => setcompanyRC(e.target.value)} />
                                    <button onClick={RenewSME} type="button" className="renew-cover-button">Proceed</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default RenewCover
