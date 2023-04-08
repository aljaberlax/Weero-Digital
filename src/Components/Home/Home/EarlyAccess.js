import React from 'react';
import { FaFontAwesomeFlag } from 'react-icons/fa';

const EarlyAccess = () => {
    return (
        <div className='bg-[#feefde]'>
            <div className='flex justify-center items-center pt-20 gap-5'>
                <div className='h-16 w-16 bg-[#fa9e35] flex justify-center items-center rounded-full'>
                    <FaFontAwesomeFlag className='text-2xl text-white '></FaFontAwesomeFlag>
                </div>
                <p className='text-2xl font-bold text-[#fa9e35]'>Get Early Access</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-center text-4xl font-bold py-8'>Join the waitlist to start using our product</p>
                <p className='text-center text-xl text-[#475467] pb-5'>

                    Thank you for your interest in our Information Technology Business Portfolio. We appreciate your <br /> request and have added your name to the wait list. We will contact you as soon as space becomes <br /> available.
                </p>
                <div className='pb-20'>
                <button className='bg-[#fa9e35] text-white text-xl rounded-full px-5 py-3'>Join the waitlist</button>
                </div>
            </div>
        </div>
    );
};

export default EarlyAccess;