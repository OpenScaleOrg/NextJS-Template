import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogOutButton from '@/components/LogOutButton'

const StudioSidebar = (
    { index, user }: { index: number, user: User }
) => {
    return (
        <div className="fixed left-0 z-40 min-w-[260px] max-w-[260px] h-[calc(100vh-80px)] flex flex-col justify-between items-center gap-2 border-r-[1px] border-main-light/20 dark:border-main-light/10">
            <div className='w-full p-4 flex flex-col justify-start items-center'>
                <Link href={'/studio'} type="button" className={`w-full h-[44px] md:p-4 md:gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer ${index == 0 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-main-background dark:text-main-foreground' : 'text-main-light dark:text-main-foreground'}`}>
                    {
                        index == 0 ? <Image src={'/icons/home.svg'} height={20} width={20} alt='home' /> : <Image src={'/icons/home.svg'} height={20} width={20} alt='home' />
                    }
                    <span className="font-medium">Home</span>
                </Link>
                <Link href={'/studio'} type="button" className={`w-full h-[44px] md:p-4 md:gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer ${index == 1 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-main-background dark:text-main-foreground' : 'text-main-light dark:text-main-foreground'}`}>
                    {
                        index == 1 ? <Image src={'/icons/home.svg'} height={20} width={20} alt='home' /> : <Image src={'/icons/billing.svg'} height={20} width={20} alt='home' />
                    }
                    <span className="font-medium">Billing & Subscription</span>
                </Link>
                <Link href={'/studio'} type="button" className={`w-full h-[44px] md:p-4 md:gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer ${index == 3 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-main-background dark:text-main-foreground' : 'text-main-light dark:text-main-foreground'}`}>
                    {
                        index == 2 ? <Image src={'/icons/home.svg'} height={20} width={20} alt='home' /> : <Image src={'/icons/support.svg'} height={20} width={20} alt='home' />
                    }
                    <span className="font-medium">Support</span>
                </Link>
            </div>
            <div className='w-full border-t-1 border-main-light/20 flex flex-col justify-start items-center'>
                <button type="button" title="shirts" className={`w-full h-[60px] md:p-4 md:gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer`}>
                    <div className='rounded-full w-8 min-w-8 h-8 min-h-8 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)]'>
                        <Image src={'/icons/user.svg'} width={16} height={16} alt='unlimited free' className='w-4 h-4' />
                    </div>

                    <div className='w-full flex flex-col justify-center items-start md:gap-1'>
                        <span className='font-bold text-[14px] text-main-foreground'>{user.firstName} {user.lastName?.charAt(0).toUpperCase()}.</span>
                        <span className='font-normal text-[12px] text-main-light'>{user.email}</span>
                    </div>
                </button>
                <LogOutButton />
            </div>
        </div>
    )
}

export default StudioSidebar