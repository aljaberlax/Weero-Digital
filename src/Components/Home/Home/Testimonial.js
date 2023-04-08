import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import testimonial1 from '../../../Assets/testimonials/photo-1500648767791-00dcc994a43e.webp'
import testimonial2 from '../../../Assets/testimonials/photo-1562788869-4ed32648eb72.webp'
import testimonial3 from '../../../Assets/testimonials/photo-1609436132311-e4b0c9370469.webp'


const Testimonial = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center pt-20 gap-5'>
                <div className='h-16 w-16 bg-slate-300 flex justify-center items-center rounded-full'>
                    <FaUserTie className='text-2xl text-[#f54c94] '></FaUserTie>
                </div>
                <p className='text-2xl font-bold text-[#f54c94]'>Testimonials</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-center text-4xl font-bold py-8'>
                    "Experience the Power of Our IT <br /> Solutions"
                </p>
                <p className='text-center text-xl text-[#475467] pb-5'>

                    We pride ourselves on providing highest quality IT services and customer <br /> satisfaction. Our customer testimonials prove that our commitment to <br /> excellence is at the core of our success.
                </p>

            </div>
            <div className='flex  mx-auto gap-5 py-10 justify-center items-center'>
                <div className='flex w-1/3 rounded-2xl hover:bg-pink-200 py-5 flex-col justify-center items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-2">
                            <img src={testimonial1} alt='' />
                        </div>

                    </div>
                    <div className='text-center py-5'>
                        <p className='text-2xl text-[#f54c94] '>Mr Hankok</p>
                        <p className='text-xl py-5'>Amazing service design that aligns with <br /> customer needs</p>
                    </div>
                </div>
                <div className='flex w-1/3 rounded-2xl hover:bg-pink-200 py-5 flex-col justify-center items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-2">
                            <img src={testimonial2} alt='' />
                        </div>

                    </div>
                    <div className='text-center py-5'>
                        <p className='text-2xl text-[#f54c94] '>Salman khan</p>
                        <p className='text-xl py-5'>Great technical support with <br /> quick response</p>
                    </div>
                </div>
                <div className='flex w-1/3 rounded-2xl hover:bg-pink-200 py-5 flex-col justify-center items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-2">
                            <img src={testimonial3} alt='' />
                        </div>

                    </div>
                    <div className='text-center py-5'>
                        <p className='text-2xl text-[#f54c94] '>Kathrin Farnaz</p>
                        <p className='text-xl py-5'>Comprehensive understanding of competitor's portfolio</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;