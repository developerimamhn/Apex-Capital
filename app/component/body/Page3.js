import React from 'react';
import Image from 'next/image';
import image6 from '../image/image6.png';
import image7 from '../image/image7.png';
import image8 from '../image/image8.png';
import image9 from '../image/image9.png';

const Page3 = () => {
    return (
        <div>
            <div className='container mx-auto px-[24px] sm:py-0 py-[60px] md:py-[80px] lg:py-[120px] xl:py-[150px] 2xl:py-[200px]'>
                
               <div className='flex flex-col items-end md:items-center justify-between  md:flex-row gap-[50px] md:gap-[80px] lg:gap-[120px] xl:gap-[160px] 2xl:gap-[200px] px-6 sm:px-0 h-full'>
                    <div className='flex justify-between flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] xl:gap-[120px] 2xl:gap-[150px] h-[150%]'>
                        <p className='componiesp 2xl:mt-[-350px] !text-[#252A4E] hover:!text-[#252A4E]'>all of this is <br/> possible thanks to </p>
                        <h3 className='numbering 2xl:mb-[-250px]'>Our <br/> Team</h3>
                    </div>
                    <div className='flex flex-col gap-[25px] xl:gap-[30px] 2xl:gap-[35px'>
                        <div className='flex gap-[16px] items-end'>
                            <div className=''>
                                <div className="flex justify-start items-start mb-[32px]">
                                    <h3 className='johnsmith'>John smith</h3>
                                    <span className='componiesp !text-[#252A4E] hover:!text-[#252A4E]'>Investor </span>
                                </div>
                            <Image className='scale-[1] hover:scale-[1.06] duration-300' src={image6} alt=""/>
                            </div>
                            <div className=''>
                            <Image className='scale-[1] hover:scale-[1.06] duration-300' src={image7} alt=""/>
                            </div>
                            <div className=''>
                            <Image className='scale-[1] hover:scale-[1.06] duration-300' src={image8} alt=""/>
                            </div>
                            <div className=''>
                            <Image className='scale-[1] hover:scale-[1.06] duration-300' src={image9} alt=""/>
                            </div>
                        </div>
                        <span className='componiesp !text-[#252A4E] hover:!text-[#252A4E]'>We believe in building an inclusive, community-driven team whose expertise and <br/> dedication will benefit the tech ecosystem at large. We strive to work with <br/> conviction, integrity, humour, and humility. </span>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Page3;