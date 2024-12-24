"use client";

import React from 'react';
import  Image  from 'next/image';
import logo from '../image/logo.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#015DCE] overflow-hidden pb-[30px] md:pb-[44px] xl:pb-[64px]'>
            <div className='container mx-auto pt-[60px] md:pt-[80px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[200px] sm:px-0 px-[24px]'>
                <p className='componiesp !text-[#fff]'>Get in touch</p>
                <h2 className="mettingcompo m-0 mt-[16px] lg:mt-[24px] pb-[40px] lg:pb-[100px] text-left !text-[#fff]">Contact us</h2>
                <div className='grid sm:grid-cols-12'>
                    <div className='p-[30px] md:p-[40px] xl:p-[64px] sm:border-x-[1px] sm:border-t-[1px] sm:border-[#FFF] sm:border-opacity-50 col-span-8 '>
                        <h1 className='Froggo-Logo w-[150px] lg:w-[180px] 2xl:w-[207px]'><Image src={logo} alt=''/></h1>
                        <div className='flex flex-col sm:flex-row justify-between mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[73px] gap-[30px] md:gap-[40px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[98px]'>
                            <ul className='flex justify-start flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px]'>
                                <li className='componiesp capitalize text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] !text-[#fff] mb-[3px] lg:mb-[6px]'>Our Tax Efficient Funds</li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Apex Capital Blended S/EIS Funds</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Apex Capital EIS Fund</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Apex Capital Knowledge Intensive EIS Fund</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Fair By Design Impact EIS Fund</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Carry Back EIS Fund</Link></li>
                            </ul>
                            <ul className='flex justify-start flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px]'>
                                <li className='componiesp capitalize text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] !text-[#fff] mb-[3px] lg:mb-[6px]'>Quick Links</li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Tax-Efficient Funds</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Institutional Funds</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Apex Capital Syndicate</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Impact/ESG</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Privacy Policy</Link></li>
                            </ul>
                            <ul className='flex justify-start flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px]'>
                                <li className='componiesp capitalize text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] !text-[#fff] mb-[3px] lg:mb-[6px]'>Our Institutional Fund</li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Apex Capital Fund lll</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Fair By Design Fund</Link></li>
                                <li className='componiesp !leading-[120%] opacity-80 !text-[#fff]'><Link href='#'>Good Food Fund</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='sm:ml-[32px] mb-[34px] '>
                        <input className='inputemail w-full mb-[16px] lg:mb-[24px]' type='email' placeholder='Enter you email'/>
                        <input className='inputsubmit' type='submit' value='Submit'/>
                        </div>
                        <div className='sm:pl-[32px] sm:pr-[32px] sm:border-t-[1px] sm:border-r-[1px] sm:border-[#FFF] sm:border-opacity-50 h-fit '>
                        <li className='componiesp capitalize text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[28px]   2xl:text-[32px] !text-[#fff] mb-[20px] lg:mb-[32px] '><p>Social Media</p></li>
                            <div className='flex justify-between items-center gap-2 lg:gap-0 sm:flex-col lg:flex-row '>
                                <p className='socialmediaimage '><svg className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[35px] 2xl:w-[48px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5432 16.1775C39.5568 16.5273 39.5613 16.8769 39.5613 17.2267C39.5613 27.8311 32.1016 40.0732 18.4605 40.0732C14.2701 40.0732 10.3737 38.7377 7.09082 36.4642C7.67114 36.5278 8.2605 36.5756 8.8589 36.5756C12.3333 36.5756 15.5333 35.2876 18.0716 33.1253C14.8264 33.0776 12.0861 30.7405 11.141 27.5608C11.5947 27.6562 12.0619 27.704 12.5397 27.704C13.2135 27.704 13.8677 27.6087 14.4947 27.418C11.0987 26.6866 8.54086 23.4434 8.54086 19.5482C8.54086 19.5005 8.54086 19.4845 8.54086 19.4527C9.54172 20.041 10.6873 20.4065 11.9037 20.4542C9.91099 19.0074 8.60112 16.5431 8.60112 13.7609C8.60112 12.2982 8.96589 10.915 9.60801 9.72256C13.2647 14.5875 18.7318 17.7832 24.8952 18.1171C24.7686 17.5288 24.7038 16.909 24.7038 16.2889C24.7038 11.8532 28.0244 8.26001 32.1212 8.26001C34.2541 8.26001 36.1804 9.22997 37.5325 10.788C39.2252 10.4383 40.8109 9.77057 42.2459 8.84845C41.6897 10.7245 40.5154 12.2981 38.981 13.2838C40.4823 13.0931 41.9143 12.6641 43.2422 12.0282C42.2459 13.6339 40.9918 15.0487 39.5432 16.1775Z" fill="white"/>
                                </svg></p>
                                <p className='socialmediaimage '><svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none">
                                <path d="M37.8617 11.2664C35.3122 10.0966 32.5783 9.23471 29.7198 8.74108C29.6678 8.73156 29.6157 8.75537 29.5889 8.80299C29.2373 9.42835 28.8479 10.2442 28.5751 10.8854C25.5007 10.4251 22.4419 10.4251 19.4305 10.8854C19.1578 10.2299 18.7541 9.42835 18.401 8.80299C18.3742 8.75696 18.3221 8.73315 18.2701 8.74108C15.4132 9.23312 12.6793 10.095 10.1282 11.2664C10.1062 11.2759 10.0872 11.2918 10.0746 11.3124C4.88899 19.0597 3.46842 26.6165 4.1653 34.0796C4.16845 34.1162 4.18895 34.1511 4.21733 34.1733C7.63868 36.6859 10.9528 38.2112 14.2055 39.2223C14.2575 39.2382 14.3127 39.2191 14.3458 39.1763C15.1152 38.1255 15.8011 37.0176 16.3891 35.8526C16.4238 35.7843 16.3907 35.7034 16.3198 35.6764C15.2319 35.2637 14.196 34.7606 13.1996 34.1892C13.1207 34.1431 13.1144 34.0304 13.1869 33.9765C13.3966 33.8193 13.6063 33.6559 13.8066 33.4908C13.8428 33.4606 13.8933 33.4543 13.9359 33.4733C20.4822 36.4621 27.5692 36.4621 34.0383 33.4733C34.0808 33.4527 34.1313 33.459 34.1691 33.4892C34.3694 33.6543 34.5791 33.8193 34.7903 33.9765C34.8629 34.0304 34.8581 34.1431 34.7793 34.1892C33.7829 34.7717 32.747 35.2637 31.6575 35.6748C31.5866 35.7018 31.555 35.7843 31.5897 35.8526C32.1904 37.016 32.8763 38.1239 33.6315 39.1747C33.663 39.2191 33.7198 39.2382 33.7718 39.2223C37.0402 38.2112 40.3544 36.6859 43.7757 34.1733C43.8057 34.1511 43.8246 34.1177 43.8278 34.0812C44.6618 25.453 42.4308 17.9581 37.9137 11.314C37.9027 11.2918 37.8838 11.2759 37.8617 11.2664ZM17.3667 29.5354C15.3959 29.5354 13.7719 27.726 13.7719 25.5038C13.7719 23.2817 15.3643 21.4723 17.3667 21.4723C19.3848 21.4723 20.993 23.2976 20.9615 25.5038C20.9615 27.726 19.369 29.5354 17.3667 29.5354ZM30.6579 29.5354C28.6871 29.5354 27.0631 27.726 27.0631 25.5038C27.0631 23.2817 28.6556 21.4723 30.6579 21.4723C32.676 21.4723 34.2842 23.2976 34.2527 25.5038C34.2527 27.726 32.676 29.5354 30.6579 29.5354Z" fill="white"/>
                                </svg></p>
                                <p className='socialmediaimage '><svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none">
                                    <path d="M30.273 16.3037C28.5281 14.6191 26.3087 13.7614 23.8367 13.7614C19.4515 13.7614 15.7398 16.7518 14.4158 20.77C14.0791 21.79 13.8878 22.8796 13.8878 24.0001C13.8878 25.1205 14.0791 26.21 14.4158 27.23C15.7398 31.2482 19.4515 34.2386 23.8367 34.2386C26.1021 34.2386 28.0306 33.6359 29.5383 32.6159C31.3214 31.4104 32.5077 29.61 32.898 27.4851H23.8367V20.9091H39.6939C39.8929 22.0219 40 23.181 40 24.3864C40 29.5637 38.1633 33.9219 34.9796 36.8814C32.1939 39.4778 28.3826 41 23.8367 41C17.2551 41 11.5613 37.1905 8.79085 31.6346C7.65054 29.3396 7 26.7432 7 24.0001C7 21.2569 7.65051 18.6605 8.79082 16.3655C11.5612 10.8096 17.2551 7 23.8367 7C28.375 7 32.1862 8.68455 35.1021 11.4277L30.273 16.3037Z" fill="white"/>
                                    </svg></p>
                                <p className='socialmediaimage '><svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none">
                                <path d="M36.6507 11.2258L7.75249 22.372C5.78014 23.1633 5.79183 24.2634 7.39298 24.7539L14.6003 27.0035L17.358 35.4583C17.6932 36.3837 17.528 36.7507 18.4997 36.7507C19.2496 36.7507 19.5823 36.4088 20 36.0008C20.2656 35.7409 21.8426 34.2077 23.6034 32.4957L31.1004 38.0347C32.4799 38.7958 33.476 38.4016 33.8195 36.7535L38.7407 13.5631C39.2445 11.5431 37.9706 10.6268 36.6507 11.2258ZM15.7314 26.4866L31.9767 16.2374C32.7877 15.7455 33.5313 16.01 32.9207 16.5519L19.0105 29.1025L18.4689 34.8792L15.7314 26.4866Z" fill="white"/>
                                </svg></p>
                                <p className='socialmediaimage '><svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 24C6 32.9 12.5 40.3 21 41.8L21.1003 41.7197C21.0669 41.7133 21.0334 41.7067 21 41.7V29H16.5V24H21V20C21 15.5 23.9 13 28 13C29.3 13 30.7 13.2 32 13.4V18H29.7C27.5 18 27 19.1 27 20.5V24H31.8L31 29H27V41.7C26.9666 41.7067 26.9331 41.7133 26.8997 41.7197L27 41.8C35.5 40.3 42 32.9 42 24C42 14.1 33.9 6 24 6C14.1 6 6 14.1 6 24Z" fill="white"/>
                                </svg></p>
                            </div>
                            <div className="flex justify-between items-center mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] xl:mt-[104px] 2xl:mt-[134px] pb-[20px] lg:pb-[32px] ">
                                <li className='componiesp !leading-[120%] !text-[#fff]'><Link href='#'>Portfolio</Link></li>
                                <li className='componiesp !leading-[120%] !text-[#fff]'><Link href='#'>Team</Link></li>
                                <li className='componiesp !leading-[120%] !text-[#fff]'><Link href='#'>News</Link></li>
                                <li className='componiesp !leading-[120%] !text-[#fff]'><Link href='#'>Contact</Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:flex-row flex-col flex justify-between items-center border-[1px] border-[#FFF] border-opacity-50 px-[30px] md:px-[44px] xl:px-[64px] py-[20px] lg:py-[32px] gap-3 sm:gap-0'>
                    <p className='componiesp  !leading-[120%] !text-[#fff]'>
                    © 2024 Apex Capital. All Rights Reserved.
                    </p>
                    <div className='flex items-center '>
                        <li className='componiesp !leading-[120%] !text-[#fff]'><Link href='#'>News</Link></li>
                        <li className='componiesp !leading-[120%] !text-[#fff]'><Link href='#'>Contact</Link></li>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Footer;
