import React from 'react';
import banner from '../../../Assets/pexels-photo-1181271.jpeg'
const Banner = () => {
    return (
        <div className=''>
            <h1 className='text-[84px] text-center font-bold leading-tight mb-8'>
                "Business Portfolio: Unlock <br /> IT Solutions for Your <br /> Company"
            </h1>
            <h1 className='text-2xl  leading-10 text-center text-[#475467]'>
                Information Technology is the practice of utilizing computers and network systems to facilitate <br /> communication and business operations. It has revolutionized the way people and <br /> businesses interact and conduct operations worldwide.
            </h1>
            <div className='text-center justify-center py-5 flex gap-5'>
                <button className="btn text-white rounded-3xl bg-black">Download Now</button>
                <button className="btn  rounded-3xl bg-white text-black">Play Now</button>
            </div>
            <div className='bg-blue-600 flex justify-center bg-gradi '>
                <img className='w-5/6 border-8 border-white ' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;