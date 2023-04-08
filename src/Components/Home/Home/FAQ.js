import React from 'react';
import { FaQuestionCircle ,FaAngleUp} from 'react-icons/fa';

const FAQ = () => {
    return (
        <div>
            <div className='flex justify-center items-center pt-20 gap-5'>
                <div className='h-16 w-16 bg-green-200 flex justify-center items-center rounded-full'>
                    <FaQuestionCircle className='text-2xl text-[#24cfa4] '></FaQuestionCircle>
                </div>
                <p className='text-2xl font-bold text-[#24cfa4]'>FAQs</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-center text-4xl font-bold py-8'>
                    FAQs
                </p>
                <p className='text-center text-xl text-[#475467] pb-5'>

                    Check the most asked question about our product
                </p>

            </div>
            <div className='flex items-center  bg-[#ebfdf8] gap-5 '>
                <div className='h-16 w-16 mt-10  bg-green-200 flex justify-center items-center rounded-full ml-10'>
                    <FaAngleUp className='text-2xl text-[#24cfa4] '></FaAngleUp>
                </div>
                <p className='text-2xl font-bold '>
                    Q: What is IT? </p>
            </div>
            <div className=' bg-[#ebfdf8] pb-10'>
                <p className='ml-32'>A: Information Technology, or IT, is the use of computers and technology to manage, store, and process information.</p>
            </div>
        </div>
    );
};

export default FAQ;