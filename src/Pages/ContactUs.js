import React from 'react'

//image
import contactGirl from "../assets/contact girl.png"


const ContactUs = () => {
    return (
        <div className='relative top-[70px]'>
            <div className='flex lg:flex-row flex-col-reverse w-full justify-between items-center gap-[1rem] lg:px-[2rem] px-[1rem] '>
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-semibold mb-1">Got questions or need assistance?</h1>

                    <p className="mb-6"> --- We're here to help! Feel free to reach out to us using the contact information below:</p>

                    <div className="flex flex-wrap -mx-4">

                        {/* Booking Related Queries/Issues */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Booking Related Queries/Issues</h2>
                            <p>Call us at: <a href="tel:+917044292143" className="text-blue-500">+91 7044292143</a></p>
                            <p>Email us at: <a href="mailto:booking@snackbae.in" className="text-blue-500">booking@snackbae.in</a></p>
                        </div>

                        {/* Influencer Partnership Queries */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Influencer Partnership Queries</h2>
                            <p>Email us at: <a href="mailto:social@snackbae.in" className="text-blue-500">social@snackbae.in</a></p>
                        </div>

                        {/* Partners Related Queries/Issues */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Partners Related Queries/Issues</h2>
                            <p>Email us at: <a href="mailto:partners@snackbae.in" className="text-blue-500">partners@snackbae.in</a></p>
                        </div>

                        {/* Careers Openings */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Careers Openings</h2>
                            <p>Email us at: <a href="mailto:careers@snackbae.in" className="text-blue-500">careers@snackbae.in</a></p>
                        </div>

                    </div>

                    <p className="mt-3">Our dedicated team is committed to providing you with prompt and reliable support. Don't hesitate to get in touch – we're here to ensure your SnackBAE experience is nothing short of exceptional!</p>

                    {/* Office Address */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Office Address</h2>
                        <p>BL 11 Jyangra</p>
                        <p>Rabindrapally</p>
                        <p>Baguiati, Kolkata 700059</p>
                        <p>West Bengal</p>
                    </div>
                </div>
                <img src={contactGirl} alt='contactGirl' className='max-w-[500px] w-full aspect-square'/>
            </div>
        </div>
    )
}

export default ContactUs