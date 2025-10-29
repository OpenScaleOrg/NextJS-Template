import React from 'react';

import Link from 'next/link';

// import Menu from '@mui/icons-material/Menu';
import Image from 'next/image';
import ThemeToggleButton from '@/components/ThemeToggleButton';
// import HamburgerMenu from './HamburgerMenu';

// import Menu from './Menu';

const NavbarModel = async (
) => {

    return (
        <nav className='z-50 flex w-full fixed top-0 justify-between md:h-[80px] h-[60px] bg-grey bg-main-background border-b-[1px] border-main-light/20 dark:border-main-light/10 md:pr-20 pr-5' id='navbar_container'>

            <div className='border-r-[1px] dark:border-main-light/10 border-main-light/20 md:p-6 p-6 md:flex justify-center items-center md:gap-10 gap-5 hidden'>
                <Link href={'/studio'} className='flex md:gap-4 justify-start item-center'>
                    <Image src={'/icons/arrow-back.svg'} width={16} height={16} alt={'Back'} />
                    <span className='text-[14px] text-main-light whitespace-nowrap'>Back to Studio</span>
                </Link>
                <Link rel="canonical" href={'/'} className='flex items-center gap-2 md:gap-4 outline-none md:min-w-[127px]'>
                    <div className='flex items-center md:gap-[10px] h-full'>
                        <Image src={'/images/logo-light.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:hidden' />
                        <Image src={'/images/logo-dark.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:block hidden' />
                    </div>
                </Link>
            </div>

            <div className='flex w-full h-full justify-end items-center gap-5'>
                <ThemeToggleButton/>
                
            </div>
            
        </nav>
    )
}

export default NavbarModel