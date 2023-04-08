import React from 'react';
import { FaAngleDoubleDown, FaRegComments } from "react-icons/fa";
const About = () => {
    return (
        <div className='py-32 flex gap-5  '>
            <div className='w-1/3 rounded-2xl'>
                <div className='pl-10 pt-5 flex gap-5'>
                    <FaAngleDoubleDown ></FaAngleDoubleDown>
                    <p className='text-[#24cfa4] text-2xl font-bold leading-5 '>About</p>
                </div>
                <div>
                    <p className='text-4xl font-bold py-5'>Business Portfolio <br /> IT Solutions</p>
                </div>
                <div>
                    <p className='text-2xl font-serif pb-10' >Business Portfolio IT website offers an overview of the company and detailed information on the services and solutions available to clients. Visitors can learn more about the company, read up on industry news, view customer testimonials, and contact customer service staff.</p>
                </div>
                <button className="btn text-white border-0 outline-none bg-[#24cfa4] rounded-3xl">Get Started</button>
            </div>
            <div className='w-2/3'>
                <div className='grid grid-cols-2 gap-10 '>
                    <div className='bg-[#dcf7f0] hover:bg-[#0ffca1] rounded-3xl'>
                        <div className='h-16 w-16 bg-[#10f39c] flex justify-center items-center rounded-full ml-5 mt-5'>
                            <FaRegComments className='text-4xl text-white'></FaRegComments>
                        </div>
                        <div className='p-5'>
                            <p className='text-2xl font-bold py-5'>1. Network Security</p>
                            <p className='text-xl'> Ensuring confidential and secure communications over a network. </p>
                        </div>
                    </div>
                    <div className='bg-[#dcf7f0] hover:bg-[#0ffca1] rounded-3xl'>
                        <div className='h-16 w-16 bg-[#10f39c] flex justify-center items-center rounded-full ml-5 mt-5'>
                            <FaRegComments className='text-4xl text-white'></FaRegComments>
                        </div>
                        <div className='p-5'>
                            <p className='text-2xl font-bold py-5'>2. Cloud Computing</p>
                            <p className='text-xl'>  Offering access to remote computing resources over the internet.  </p>
                        </div>
                    </div>
                    <div className='bg-[#dcf7f0] hover:bg-[#0ffca1] rounded-3xl'>
                        <div className='h-16 w-16 bg-[#10f39c] flex justify-center items-center rounded-full ml-5 mt-5'>
                            <FaRegComments className='text-4xl text-white'></FaRegComments>
                        </div>
                        <div className='p-5'>
                            <p className='text-2xl font-bold py-5'>3. Data Mining</p>
                            <p className='text-xl'>   The process of analyzing large volumes of data to discover patterns.   </p>
                        </div>
                    </div>
                    <div className='bg-[#dcf7f0] hover:bg-[#0ffca1] rounded-3xl'>
                        <div className='h-16 w-16 bg-[#10f39c] flex justify-center items-center rounded-full ml-5 mt-5'>
                            <FaRegComments className='text-4xl text-white'></FaRegComments>
                        </div>
                        <div className='p-5'>
                            <p className='text-2xl font-bold py-5'>4. Business Intelligence</p>
                            <p className='text-xl'>   Using computers and software to collect, analyze and present data to help inform business decisions.   </p>
                        </div>
                    </div>
                    
                 
                </div>
            </div>
        </div>
    );
};

export default About;