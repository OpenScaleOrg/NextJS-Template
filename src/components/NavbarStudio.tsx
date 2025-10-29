import React from 'react';

import Link from 'next/link';

// import Menu from '@mui/icons-material/Menu';
import Image from 'next/image';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import HamburgerMenu from '@/components/HamburgerMenu';
// import HamburgerMenu from './HamburgerMenu';

// import Menu from './Menu';

const NavbarStudio = async (
    {upgrade=true, user}: { upgrade?: boolean, user: User}
) => {

    return (
        <nav className='z-50 flex w-full fixed top-0 justify-between md:h-[80px] h-[60px] bg-grey bg-main-background border-b-[1px] border-main-light/20 dark:border-main-light/10 md:pr-20 pr-5' id='navbar_container'>
            
            <div className='flex justify-center items-center md:hidden' title='hamburgerMenu'>
                <HamburgerMenu user={user} index={0}/>
            </div>

            <div className='min-w-[260px] border-r-[1px] dark:border-main-light/10 border-main-light/20 md:p-6 p-6 md:block hidden'>
                <Link rel="canonical" href={'/'} className='flex items-center gap-2 md:gap-4 outline-none'>
                    <div className='flex items-center md:gap-[10px] h-full'>
                        <Image src={'/images/logo-light.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:hidden' />
                        <Image src={'/images/logo-dark.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:block hidden' />
                    </div>
                </Link>
            </div>

            <div className='flex justify-start items-center p-2 md:hidden'>
                <Link rel="canonical" href={'/'} className='flex items-center gap-2 md:gap-4 outline-none'>
                    <div className='flex items-center md:gap-[10px] h-full'>
                        <Image src={'/images/logo-light.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:hidden w-[127px] h-[30px]' />
                        <Image src={'/images/logo-dark.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:block hidden w-[127px] h-[30px]' />
                    </div>
                </Link>
            </div>

            <div className='w-full flex-col justify-center items-start md:px-5 px-5 md:flex hidden'>
                <span className='w-full text-main-foreground font-extrabold md:text-[20px] text-[12px]'>Welcome back, {user.firstName} {user.lastName?.charAt(0).toUpperCase()}.</span>
                <span className='w-full text-main-foreground md:text-[12px] text-[12px] whitespace-nowrap'>Ready to bring your 2D design to 3D design life?</span>
            </div>

            <div className='flex w-full h-full justify-end items-center gap-5'>
                {
                    upgrade &&
                    <>
                        {
                            user.plan == 'free' ?
                                <Link href={'/studio/upgrade'} className='border-[#BFDBFE]/50 border text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm rounded-full md:py-3 py-2 md:px-6 px-3 flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/star.svg'} width={16} height={16} alt={'pro'} />
                                    <span className='text-[12px]'>Upgrade</span>
                                </Link> :
                                <div className='border-[#BFDBFE]/50 border text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm rounded-full md:py-3 py-2 md:px-6 px-3 flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/star.svg'} width={16} height={16} alt={'pro'}/>
                                    <span className='text-[12px]'>Pro Plan</span>
                                </div>
                        }
                    </>
                }
                <ThemeToggleButton/>
                
            </div>
            
        </nav>
    )
}

export default NavbarStudio