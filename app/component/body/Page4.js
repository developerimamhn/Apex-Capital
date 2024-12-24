import React from 'react';
import Image from 'next/image';
import image10 from '../image/image10.png';
import image11 from '../image/image11.png';
import image12 from '../image/image12.png';

const Page4 = () => {
    return (
        <div>
            <div className='container mx-auto py-[60px] md:py-[80px] lg:py-[120px] xl:py-[150px] 2xl:py-[200px] sm:px-0 px-[24px] sm:mb-[50px] lg:mb-[70px'>
                <div className='flex justify-center items-center flex-col '>
                    <span className='componiesp'>Our Blog</span>
                    <h2 className="mettingcompo m-0 mt-[15px] lg:mt-[24px] mb-[20px] lg:mb-[32px] text-center">Apex capital news & resources</h2>
                    <span className='componiesp'>The latest industry news, portfolio updates, and <br/> investment insights from the apex capital team.</span>
                </div>
                <div className='flex sm:flex-row flex-col gap-[142px] sm:gap-[12px] md:gap-[16px] xl:gap-[21px] 2xl:gap-[25px] mt-100px justify-center'>
                    <div className='relative'>
                        <Image src={image10} alt=''/>
                        <div className='imageunder'>
                            <span className='componiesp'>news letter</span>
                            <h2 className="mettingcompo m-0 mt-[15px] lg:mt-[24px] mb-[20px] lg:mb-[32px] text-left !text-[20px] sm:!text-[25px] lg:!text-[30px] xl:!text-[35px] 2xl:!text-[40px]">September apex capital news letter</h2>
                            <span className='componiesp'>Apex capital portfolio summit welcome to bill bousfield, head of distribution ascension EIS & carry-back</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] md:gap-[16px] xl:gap-[21px] 2xl:gap-[25px]'>
                        <Image src={image11} alt=''/>
                        <Image src={image12} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page4;