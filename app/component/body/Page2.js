import React from 'react';

const Page2 = () => {
    return (
        <div>
            <div className="container mx-auto px-[24px] sm:pb-0 pb-[60px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pb-[200px]">
                <div className='flex justify-between items-start flex-col sm:flex-row gap-[60px] sm:gap-[0]'>
                    <div className=''>
                        <p className='growingonfsdaeef'>Join over 150 startups already growing</p>
                        <h2 className="mettingcompo">Meet the companies <br/> rewiring  industries</h2>
                        <button className='seeporeafebtn'>See Our Portfolio</button>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-[25px] sm:gap-[28px] md:gap-[33px] lg:gap-[44px] xl:gap-[50px] 2xl:gap-[64px]'>
                            <div className=''>
                                <h3 className='numbering'>150+</h3>
                                <p className='componiesp'>Companies</p>
                            </div>

                            <div className=''>
                                <h3 className='numbering'>£100M+</h3>
                                <p className='componiesp'>Under Management</p>
                            </div>

                            <div className=''>
                                <h3 className='numbering'>14+</h3>
                                <p className='componiesp'>Exits to Date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page2;