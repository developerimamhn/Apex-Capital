'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';
import image5 from '../image/image5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Page1 = () => {
    const swiperRef = useRef(null); // Create a ref for Swiper instance

  // Function to go to next slide
  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Function to go to previous slide
  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const [activeSection, setActiveSection] = useState(null);

  const sectionsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <div>
            <div className='container mx-auto py-[60px] md:py-[80px] lg:py-[120px] xl:py-[150px] 2xl:py-[200px] sm:px-0 px-[24px]'>
            <div
                className={`flex flex-col justify-center items-center transition-all duration-700 ${
                    activeSection === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                ref={(el) => (sectionsRef.current[1] = el)}
                >
                <p className='promise'>Our Promise</p>
                <h2 className='capitalapex'>Why apex capital?</h2>
                </div>

                <div className='flex justify-center items-center gap-[84px] w-full flex-col sm:flex-row '>
               
                    <div className='flex-1 overflow-hidden sm:w-auto w-[100%] relative'>
                    <div className="swiper-pagination text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]"></div>
                    <Swiper
                    loop={true}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'fraction',
                      }}
                        navigation={{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                          }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper w-full"
                    >
                        <SwiperSlide>
                            <Image className='w-full' src={image3} alt="Image 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className='w-full' src={image3} alt="Image 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className='w-full' src={image3} alt="Image 3" />
                        </SwiperSlide>
                </Swiper>
                    </div>
                    <div className={`flex-1 ${
                    activeSection === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} ref={(el) => (sectionsRef.current[1] = el)}>
                        <h2 className='firsthanexpein mb-[22px] lg:mb-[32px]'>First-hand experience</h2>
                        <p className='jusinverstong'>
                        We're not just investors; our team is made up of practised entrepreneurs who have lived the startup journey. The result? An eye for promising ideas and the know-how to scale them. Expect more than funding; we offer a holistic partnership based on years of experience.
                        </p>
                        <div className='flex justify-between items-center pt-[40px] sm:pt-[70px] md:pt-[100px] lg:pt-[130px] xl:pt-[160px] 2xl:pt-[198px]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="8" viewBox="0 0 85 8" fill="none">
                                <path d="M84.3536 4.35355C84.5488 4.15828 84.5488 3.8417 84.3536 3.64644L81.1716 0.464459C80.9763 0.269197 80.6597 0.269197 80.4645 0.464459C80.2692 0.659721 80.2692 0.976304 80.4645 1.17157L83.2929 3.99999L80.4645 6.82842C80.2692 7.02368 80.2692 7.34026 80.4645 7.53553C80.6597 7.73079 80.9763 7.73079 81.1716 7.53553L84.3536 4.35355ZM4.37114e-08 4.5L84 4.49999L84 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#252A4E"/>
                                </svg>
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <button 
                                    onClick={goToPrev}  // Go to previous slide
                                    className="arrowbutton swiper-next scale-[0.9] hover:scale-[1] duration-300"
                                >
                                    <Image src={image4} alt="Previous Arrow" />
                                </button>
                                <button
                                    onClick={goToNext}  // Go to next slide
                                    className="arrowbutton swiper-prev scale-[0.9] hover:scale-[1] duration-300"
                                >
                                    <Image src={image5} alt="Next Arrow" />
                                </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;