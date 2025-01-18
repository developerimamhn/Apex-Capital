import React from 'react';
import Image from 'next/image';
import image2 from '../image/image2.png';

const HeroArea = () => {
    return (
<div className='relative w-full overflow-hidden z-10'>
    {/* <svg className='absolute w-full px-[200px] 2xl:px-[150px] 3xl:px-[400px]' viewBox="0 0 1651 997" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18557e-08" x2="0.499956" y2="997" stroke="url(#paint0_linear_123_341)" stroke-opacity="0.4"/>
<line x1="150.5" y1="2.18557e-08" x2="150.5" y2="997" stroke="url(#paint1_linear_123_341)" stroke-opacity="0.4"/>
<line x1="300.5" y1="2.18557e-08" x2="300.5" y2="997" stroke="url(#paint2_linear_123_341)" stroke-opacity="0.4"/>
<line x1="450.5" y1="2.18557e-08" x2="450.5" y2="959" stroke="url(#paint3_linear_123_341)" stroke-opacity="0.4"/>
<line x1="600.5" y1="2.18557e-08" x2="600.5" y2="902" stroke="url(#paint4_linear_123_341)" stroke-opacity="0.4"/>
<line x1="750.5" y1="2.18557e-08" x2="750.5" y2="838" stroke="url(#paint5_linear_123_341)" stroke-opacity="0.4"/>
<line x1="900.5" y1="2.18557e-08" x2="900.5" y2="838" stroke="url(#paint6_linear_123_341)" stroke-opacity="0.4"/>
<line x1="1050.5" y1="2.18557e-08" x2="1050.5" y2="902" stroke="url(#paint7_linear_123_341)" stroke-opacity="0.4"/>
<line x1="1200.5" y1="2.18557e-08" x2="1200.5" y2="959" stroke="url(#paint8_linear_123_341)" stroke-opacity="0.4"/>
<line x1="1350.5" y1="2.18557e-08" x2="1350.5" y2="997" stroke="url(#paint9_linear_123_341)" stroke-opacity="0.4"/>
<line x1="1500.5" y1="2.18557e-08" x2="1500.5" y2="997" stroke="url(#paint10_linear_123_341)" stroke-opacity="0.4"/>
<line x1="1650.5" y1="2.18557e-08" x2="1650.5" y2="997" stroke="url(#paint11_linear_123_341)" stroke-opacity="0.4"/>
<defs>
<linearGradient id="paint0_linear_123_341" x1="-0.5" y1="-2.18557e-08" x2="-0.500044" y2="997" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_123_341" x1="149.5" y1="-2.18557e-08" x2="149.5" y2="997" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_123_341" x1="299.5" y1="-2.18557e-08" x2="299.5" y2="997" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_123_341" x1="449.5" y1="-2.18557e-08" x2="449.5" y2="959" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_123_341" x1="599.5" y1="-2.18557e-08" x2="599.5" y2="902" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_123_341" x1="749.5" y1="-2.18557e-08" x2="749.5" y2="838" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_123_341" x1="899.5" y1="-2.18557e-08" x2="899.5" y2="838" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_123_341" x1="1049.5" y1="-2.18557e-08" x2="1049.5" y2="902" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_123_341" x1="1199.5" y1="-2.18557e-08" x2="1199.5" y2="959" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_123_341" x1="1349.5" y1="-2.18557e-08" x2="1349.5" y2="997" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear_123_341" x1="1499.5" y1="-2.18557e-08" x2="1499.5" y2="997" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint11_linear_123_341" x1="1649.5" y1="-2.18557e-08" x2="1649.5" y2="997" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.522838" stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
            </svg> */}
            <div className='mx-auto  py-[130px] sm:py-[150px] md:py-[180px] lg:py-[220px] xl:py-[260px] 2xl:py-[270px] sm:px-[50] px-[24px]'>
                <div className='flex justify-center items-center flex-col'>
                    <p className='venturecpai'>#01 Venture Capital Company</p>
                    <h2 className='backing '>Backing the next generation of founders. <br className='sm:block hidden'/>Empowering tomorrow, today.</h2>
                    <p className='enble'>We enable the UK's top tech innovators to transform <br/> visionary ideas into impactful businesses.</p>
                    <button className='getstartedbutt pb-5 hover:bg-transparent hover:text-[#fff] border-[1px] duration-300 hover:border-[#FFFFFF3D]'>Get Started</button>
                </div>
            </div>
            <div className='absolute bottom-2 sm:bottom-[41px] left-[50%] translate-x-[-50%] flex justify-center items-center flex-col sm:gap-[12px]'>
                <Image className='' src={image2} alt=""/>
                <h3 className='ScrollDown'>Scroll Down</h3>
            </div>
        </div>
    );
};

export default HeroArea;