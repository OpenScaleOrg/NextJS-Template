import React from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';

const Upgrade = async () => {

    return (
        <>
            <Navbar />
            <div className='mt-[60px] md:mt-[80px] md:min-h-[calc(100vh-80px)] h-full text-black'>
                <section className='w-full max-w-[1440px] h-full flex flex-col items-center justify-start md:px-20 md:mt-40 mt-20' id="pricing">
                    <div className='flex flex-col justify-center items-center w-full md:gap-5 gap-5'>
                        <h2 className='text-main-foreground text-center font-extrabold sm:text-[48px] text-[24px]'>
                            Simple. Flexible. <span className='bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent'>No Bullsh*t</span>
                        </h2>
                        <div className='flex sm:w-auto w-full md:gap-5 gap-5 justify-center items-center'>
                            <div className='flex justify-center items-center md:gap-2 gap-2'>
                                <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                <span className='text-main-foreground text-center sm:text-[16px] text-[12px]'>No Watermarks</span>
                            </div>
                            <div className='flex justify-center items-center md:gap-2 gap-2'>
                                <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                <span className='text-main-foreground text-center sm:text-[16px] text-[12px]'>No Restrictions</span>
                            </div>
                            <div className='flex justify-center items-center md:gap-2 gap-2'>
                                <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                <span className='text-main-foreground text-center sm:text-[16px] text-[12px]'>Just Pure Creativity</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-warp md:gap-5 justify-center items-center w-full md:px-10 md:mt-20 mt-10'>

                        <div className='md:w-[340px] w-[340px] md:rounded-[30px] rounded-[30px] border-2 border-[#3B82F6]/20 md:p-8 p-8 flex flex-col justify-between items-center'>

                            <div className='rounded-[16px] w-20 min-w-20 h-20 min-h-20 flex justify-center items-center bg-[linear-gradient(135deg,#A855F7_0%,#6366F1_100%)]'>
                                <Image src={'/icons/premium.svg'} width={42} height={42} alt='premium' className='w-8 h-8' />
                            </div>
                            <div className='w-full flex justify-center items-center md:gap-2'>
                                <h6 className='font-bold text-[24px] text-center text-main-foreground md:mt-2 mt-2'>Go Pro</h6>
                                <div className='text-[12px] text-main-light font-bold text-center outline outline-light/20 md:px-2 rounded-full'>
                                    Beta
                                </div>
                            </div>
                            <h4 className='w-full text-center text-main-foreground'><span className='text-[50px] font-extrabold'>$9.99</span>/month</h4>

                            <div className='w-full flex flex-col md:gap-2.5 gap-2.5 md:mt-5 mt-5 justify-center items-start'>
                                <div className='flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                    <span className='text-main-foreground text-center'>All 2D & 3D features</span>
                                </div>
                                <div className='flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                    <span className='text-main-foreground text-center'>No Watermarks</span>
                                </div>
                                <div className='flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                    <span className='text-main-foreground text-center'>HD Images exports</span>
                                </div>
                                <div className='flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                    <span className='text-main-foreground text-center'>4K rendering Video</span>
                                </div>
                                <div className='flex justify-center items-center md:gap-2 gap-2'>
                                    <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                                    <span className='text-main-foreground text-center'>Unlimited Downloads</span>
                                </div>
                            </div>

                            <Link href={'/studio/upgrade/premium-checkout'} className='w-full flex justify-center items-center bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white font-medium rounded-[12px] md:p-4 p-4 md:gap-2.5 md:mt-5 mt-5 hover:scale-105 transition-all duration-300 ease-in-out'>
                                UPGRADE
                            </Link>
                        </div>
                    </div>

                    <span className='text-main-foreground text-center md:mt-20 mt-10'>All plans include our core features. Upgrade anytime, cancel anytime.</span>

                    <div className='flex sm:flex-row flex-col justify-center items-center md:gap-5 gap-5 md:mt-5 mt-5'>
                        <div className='text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full'>
                            <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
                            <span className='text-center'>30-day money back guarantee</span>
                        </div>
                        <div className='text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full'>
                            <Image src={'/icons/instant.svg'} width={20} height={20} alt='instant' />
                            <span className='text-center'>Instant activation</span>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Upgrade