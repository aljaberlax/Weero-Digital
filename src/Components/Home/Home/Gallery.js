import React from 'react';
import { FaImages } from 'react-icons/fa';
import gallery1 from '../../../Assets/gellery/pexels-photo-1181271.webp'
import gallery2 from '../../../Assets/gellery/pexels-photo-735911.webp'
import gallery3 from '../../../Assets/gellery/pexels-photo-2047905.webp'
import gallery4 from '../../../Assets/gellery//pexels-photo-1036936.webp'
const Gallery = () => {
    return (
        <div>
            <div className='flex  items-center pt-20 gap-5'>
                <div className='h-16 w-16 bg-[#fa9e35] flex justify-center items-center rounded-full'>
                    <FaImages className='text-2xl text-white '></FaImages>
                </div>
                <p className='text-2xl font-bold text-[#fa9e35]'>Gallery</p>
            </div>
            <div>
                <p className='text-4xl font-semibold py-5'>
                    Information Technology: Solutions for <br /> All Your Needs
                </p>
                <p className='text-xl text-[#475467] py-5'>
                    Business Portfolio Limited provides IT solutions to help businesses reach their goals. We <br /> specialize in web development, network security, and data management to give <br /> organizations the tools they need to succeed.
                </p>
            </div>
            <div className='flex gap-5'>
                <div className='w-1/3  '>
                    <img className='h-[622px] rounded-2xl' src={gallery1} alt="" />
                </div>
                <div className='w-2/3  '>
                    <div className='flex gap-5'>
                        <div className='w-1/2'>
                            <img className='w-full  h-[300px] rounded-2xl' src={gallery2} alt="" />
                        </div>
                        <div className='w-1/2  '>
                            <img className='h-[300px] w-full rounded-2xl ' src={gallery3} alt="" />
                        </div>
                    </div>
                    <div className='pt-5'>
                        <img className='h-[300px] w-full rounded-2xl' src={gallery4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;