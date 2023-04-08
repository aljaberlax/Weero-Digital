import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import team1 from '../../../Assets/team/photo-1573496358961-3c82861ab8f4.webp'
import team2 from '../../../Assets/team/photo-1573496359142-b8d87734a5a2.webp'

const Team = () => {
    return (
        <div className='flex gap-5 mb-20'>
            <div className='w-1/3 rounded-2xl bg-[#2fd0f3] text-white'>
                <div className='flex ml-10 items-center  py-5 gap-5'>
                    <div className='h-16 w-16 bg-white flex justify-center items-center rounded-full'>
                        <FaUserShield className='text-2xl text-[#2fd0f3] '></FaUserShield>
                    </div>
                    <p className='text-2xl font-bold '>Team</p>
                </div>
                <div className='mx-10'>
                    <p className='text-4xl font-bold'>Information Technology Team</p>
                    <p className='text-2xl py-10 '>
                        Our Information Technology <br /> team provides expertise in developing cutting-edge <br /> software solutions to meet client needs.
                    </p>
                </div>
            </div>
            <div className='w-1/3    '>
                <img className='w-full h-[422px] rounded-2xl' src={team2} alt="" />
                <div className=' z-20 ml-5 -mt-20'>
                    <p className='text-[#01c1f0] text-2xl'>Merry Charges</p>
                    <p className='text-white'>CEO</p>
                </div>
            </div>
            <div className='w-1/3    '>
                <img className='w-full h-[422px] rounded-2xl' src={team1} alt="" />
                <div className=' z-20 ml-5 -mt-20'>
                    <p className='text-[#01c1f0] text-2xl'>Selena Rozario</p>
                    <p className='text-white'>CTO</p>
                </div>
            </div>
        </div>
    );
};

export default Team;