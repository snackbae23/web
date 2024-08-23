

import { MuiOtpInput } from 'mui-one-time-password-input'
import React, { useState, useRef, useCallback } from 'react';
import { useNavigate, useParams, useLocation, } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { baseUrl } from '../main';

//image
import Palmrecognition from '../assets/Palm recognition.png';


interface FormData {
    name: string;
    gender: string;
    phone: string;
    orderId: string;
}

interface LocationState {
    formData: FormData;
}
// interface OTPOptions {
//     transport: string[]
// }

// interface CredentialRequestOptions {
//     otp: OTPOptions
//     signal: AbortSignal
// }

export default function App() {
    const location = useLocation();
    const { formData } = location.state as LocationState || {};
    const { id: newId, tableNo } = useParams<{ id: string, tableNo: string }>();
    const navigate = useNavigate();
    const [otp, setOtp] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [seconds, setSeconds] = useState<number>(60);
    const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    // console.log(otp);


    const startTimer = useCallback(() => {
        timerRef.current = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(timerRef.current!);
                    setIsResendDisabled(false);
                    return 0;
                }
            });
        }, 1000);
    }, []);

    const addUser = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/api/addUser`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

                localStorage.setItem('user', JSON.stringify(response.data.user))
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const otpVerify = async () => {
        try {
            let data = JSON.stringify({
                "phoneNumber": `91${formData.phone}`,
                "orderId": formData.orderId,
                // "otp": otp.join(''),
                "otp": otp,
                "clientId": "8TPPGON8VH9R9HTCCQNN5LLGZTZAHZ2N",
                "clientSecret": "13l19zkrepn7ru1lg9sbqxjnzzumu9vj"
            });

            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseUrl}/api/otp`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));

                    if (response.data.data.isOTPVerified) {
                        toast.success('Login successful')


                        let config = {
                            method: 'get',
                            maxBodyLength: Infinity,
                            url: `${baseUrl}/api/checkContactExists/${formData?.phone}`,
                            headers: {}
                        };

                        axios.request(config)
                            .then((response) => {
                                console.log(JSON.stringify(response.data));

                                if (response?.data?.data != null && response.data?.data?.length != 0) {
                                    localStorage.setItem('user', JSON.stringify(response?.data?.data))
                                } else {
                                    addUser();
                                }
                                setTimeout(() => {
                                    setLoading(false);
                                    navigate('/restaurant/' + newId + '/' + tableNo);
                                }, 1000)
                            })
                            .catch((error) => {
                                console.log(error);
                            });


                    } else {
                        toast.error('OTP is not valid')
                    }

                })
                .catch((error) => {
                    console.log(error);
                    toast.error(error.message);
                    setLoading(false);
                });



        } catch (error) {
            console.log(error);
            toast.error((error as Error).message);
        }
    };

    const handleChange = (otp: string) => {
        setOtp(otp)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        otpVerify();

    };

    const handleResend = async () => {
        try {

            let data = JSON.stringify({
                "phoneNumber": "91" + formData.phone,
                "otpLength": 6,
                "channel": "SMS",
                "expiry": 60,
                "clientId": "8TPPGON8VH9R9HTCCQNN5LLGZTZAHZ2N",
                "clientSecret": "13l19zkrepn7ru1lg9sbqxjnzzumu9vj"
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/api/otp`,
                headers: {
                    'clientId': 'I11NELHRNXTHQQEUGNVLQXS41T2L7UDZ',
                    'clientSecret': '68g5e567j63kv3h7ahz976xj2sk7k46j',
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log((response.data));
                    toast.success('OTP sent successfully');
                    formData.orderId = response.data.data.orderId;
                    setSeconds(60);
                    setIsResendDisabled(true);
                    startTimer();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        catch (err) {
            console.log(err);
        }
    };

    if (!timerRef.current) {
        startTimer();
    }

    // useEffect(() => {
    //     if ("OTPCredential" in window) {
    //         const ac = new AbortController();
    
    //         navigator.credentials
    //             .get({
    //                 otp: { transport: ["sms"] },
    //                 signal: ac.signal,
    //             } as CredentialRequestOptions)
    //             .then((otp: any) => {
    //                 // Use the OTP code
    //                 // const otpCode = otp.code;
    //                 const otpMessage = otp.code;
    //                 const otpCode = otpMessage.match(/\b\d{6}\b/)[0]; 
    //                 console.log("OTP received:", otpCode);
    //                 handleChange(otpCode); // Handle the OTP code
    
    //                 // Optional: Submit the form or verify the OTP
    //                 // if (document.forms[0]) document.forms[0].submit();
    //                 // otpVerify();
    //             })
    //             .catch((err) => {
    //                 console.error("Error:", err);
    //             });
    
    //         // Abort the request after 3 seconds
    //         setTimeout(() => {
    //             ac.abort();
    //         }, 3000);
    //     }
    // }, []);
    






    return (
        <>
            <div className='w-full h-[160px] bg-[#FFD600] flex items-end justify-between px-[1rem] py-[1rem]'>
                <div className='py-[1rem]'>
                    <p className=' font-[600] font-inter text-[21px] leading-[27.3px]'>Verify Details</p>
                    <p className='text-[#5C5C5C] font-[600] font-inter text-[12px] leading-[15.6px]'>OTP SENT TO +91 {formData.phone}</p>
                </div>
                <img src={Palmrecognition} alt="Palmrecognition" className='w-[40%] aspect-auto' />
            </div>
            <div className='w-full h-fit px-[.5rem]'>
                <p className=' font-[600] font-inter text-[18px] leading-[23.4px] mt-[1rem] uppercase'>Enter OTP</p>




                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-[1rem]">
                    {/* <div className='w-full flex flex-row justify-evenly gap-[.5rem] mt-[1rem]'>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="number"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                ref={(el) => (inputsRef.current[index] = el)}
                                className="w-12 h-12 text-center border-b-2 border-blue-500 text-xl focus:border-blue-700 focus:outline-none"
                            />
                        ))}
                    </div> */}
                    <div className='w-full h-fit flex flex-wrap justify-center items-center'>
                        <MuiOtpInput
                            value={otp}
                            onChange={handleChange}
                            length={6}
                            autoFocus
                        />
                    </div>

                    <div className='w-full flex flex-row flex-wrap gap-[.7rem] mt-[1rem]'>
                        <p>Didn't receive OTP? <span>{isResendDisabled ? `Resend in 00:${seconds < 10 ? `0${seconds}` : seconds}` : <button type="button" onClick={() => {
                            handleResend();
                        }} disabled={isResendDisabled} className="text-blue-500">Resend OTP</button>}</span></p>
                    </div>
                    <button
                        type="submit"
                        className='w-full h-[54px] mx-auto bg-[#FFD600] my-[1rem] rounded-md font-Roboto font-[500] leading-[30px] text-[20px]'
                    >
                        {
                            loading ? 'Loading...' : 'Continue'
                        }
                    </button>
                </form>
            </div>
        </>
    );
}