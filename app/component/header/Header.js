import React from 'react';
import NavBar from './NavBar';
import HeroArea from './HeroArea';

const Header = () => {
    return (
        <div className='backgroundheader'>
            <div className='backgroundheaderiamge'>
                <NavBar/>
                <HeroArea/>
            </div>
        </div>
    );
};

export default Header;