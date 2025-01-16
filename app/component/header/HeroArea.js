import React from 'react';
import Image from 'next/image';
import image2 from '../image/image2.png';

const HeroArea = () => {
    return (
        <div className='relative'>
            <div className='container mx-auto  py-[130px] sm:py-[150px] md:py-[180px] lg:py-[220px] xl:py-[260px] 2xl:py-[270px] sm:px-[0] px-[24px]'>
                <div className='flex justify-center items-center flex-col'>
                    <p className='venturecpai'>#01 Venture Capital Company</p>
                    <h2 className='backing '>Backing the next generation of founders. <br className='sm:block hidden'/>Empowering tomorrow, today.</h2>
                    <p className='enble'>We enable the UK's top tech innovators to transform <br/> visionary ideas into impactful businesses.</p>
                    <button className='getstartedbutt pb-5 hover:bg-transparent hover:text-[#fff] border-[1px] duration-300 hover:border-[#FFFFFF3D]'>Get Started</button>
                </div>
            </div>
            <div className='absolute bottom-2 sm:bottom-[51px] left-[50%] translate-x-[-50%] flex justify-center items-center flex-col sm:gap-[12px]'>
                <Image src={image2} alt=""/>
                <h3 className='ScrollDown'>Scroll Down</h3>
            </div>
        </div>
    );
};

export default HeroArea;