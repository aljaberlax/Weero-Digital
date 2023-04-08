import React from 'react';
import { FaUsers } from 'react-icons/fa';
import partner1 from '../../../Assets/clienta/slack-logo-icon.png'
import partner2 from '../../../Assets/clienta/Meta-Logo-768x432.png'
import partner3 from '../../../Assets/clienta/Microsoft_logo.svg.png'
import partner4 from '../../../Assets/clienta/GOOG-0ed88f7c.png'
const Partners = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center pt-20 gap-5'>
                <div className='h-16 w-16 bg-slate-300 flex justify-center items-center rounded-full'>
                    <FaUsers className='text-2xl text-[#f54c94] '></FaUsers>
                </div>
                <p className='text-2xl font-bold text-[#f54c94]'>Partners</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-center text-4xl font-bold py-8'>500+ Companies and Counting</p>
                <p className='text-center text-xl text-[#475467] pb-5'>
                    Join our clients in saving hundreds of  hours on Information Technology
                </p>

            </div>
            <div className='grid grid-cols-4 mx-auto gap-5 py-10 justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <img className='h-[100px] w-[100px]' src={partner1} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='h-[100px] w-[100px]' src={partner2} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='h-[100px] w-[100px]' src={partner3} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='h-[100px] w-[100px]' src={partner4} alt="" />
                </div>


            </div>
            <div className='text-center'>
                <button className='px-14 py-3 rounded-full bg-[#f54c94]'></button>
            </div>
        </div>
    );
};

export default Partners;