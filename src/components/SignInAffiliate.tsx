"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';

function SignInAffiliate() {

  const [username, setUsername] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [spin, setSpin] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter()

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpin(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/affiliate/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: pass }),
    })

    if (res.status === 401) {
      setSpin(false);
      toast.error('Invalid Credentials!',
        {
          position: "top-center"
        }
      )
    }

    if (res.status === 200) {
      setSpin(false);
      const resData = await res.json();

      // Save the token manually using js-cookie
      Cookies.set('affiliate_token', resData.affiliateToken, {
        expires: 30,       // 30 days
        secure: true,      // only over HTTPS
        sameSite: 'None'   // required if cross-site
      });
      toast.success('🎉 Successfully Signed In!',
        {
          position: "top-center"
        }
      )
      setTimeout(() => {
        router.push(`/affiliate/${username}`);
      }, 3000);
    }
  }

  return (
    <div className='w-full max-w-[1152px] flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row items-center md:justify-center justify-center md:px-20 md:py-10 md:gap-10 gap-10'>
      <div className='flex flex-col justify-start md:items-start items-center w-full md:max-w-[560px] px-2.5'>
        <Link href={'/'} className='md:flex hidden md:gap-4 justify-start item-center'>
          <Image src={'/icons/arrow-back.svg'} width={16} height={16} alt={'Back'} />
          <span className='text-[14px] text-main-light'>Back to Home</span>
        </Link>

        <Link rel="canonical" href={'/'} className='flex items-center gap-2 md:gap-4 outline-none px-4 py-2 md:mt-8 rounded-[16px] bg-main-foreground'>
          <div className='flex items-center md:gap-[10px] h-full'>
            <Image src={'/images/logo-light.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:block hidden' />
            <Image src={'/images/logo-dark.svg'} width={127} height={30} draggable={false} alt={"Frist'OX Studio"} className='object-contain pointer-events-none dark:hidden' />
          </div>
        </Link>

        <h1 className='md:text-left text-center md:mt-8 font-extrabold md:text-[60px] text-[24px] leading-[60px] text-main-foreground'>
          Join the Creative Revolution
        </h1>

        <span className='w-full text-[18px] md:text-left text-center text-main-light max-w-[400px] md:mt-8 mt-4'>
          Start creating stunning 3D and 2D mockups
          instantly. No credit card required.
        </span>

        <div className='md:mt-8 mt-8 flex flex-col justify-start items-start md:gap-4 gap-4'>
          <div className='flex items-center justify-center gap-4 w-full'>
            <div className='rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#A855F7_100%)]'>
              <Image src={'/icons/hyper-realistic.svg'} width={20} height={20} alt='hyper realistic' className='w-5 h-5' />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <h4 className='font-bold text-[14px] text-main-foreground text-left w-full'>Instant 3D Mockups</h4>
              <h6 className='text-main-light text-[12px] text-left w-full'>Transform designs in seconds</h6>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 w-full'>
            <div className='rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#A855F7_100%)]'>
              <Image src={'/icons/security.svg'} width={20} height={20} alt='hyper realistic' className='w-5 h-5' />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <h4 className='font-bold text-[14px] text-main-foreground text-left w-full'>No Watermarks</h4>
              <h6 className='text-main-light text-[12px] text-left w-full'>Professional quality exports</h6>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 w-full'>
            <div className='rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#A855F7_100%)]'>
              <Image src={'/icons/instant-light.svg'} width={20} height={20} alt='hyper realistic' className='w-5 h-5' />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <h4 className='font-bold text-[14px] text-main-foreground text-left w-full'>Browser-Based</h4>
              <h6 className='text-main-light text-[12px] text-left w-full'>No downloads required</h6>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap sm:flex-row flex-col justify-start items-start md:gap-5 gap-5 md:mt-8 mt-8'>
          <div className='text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full'>
            <Image src={'/icons/tick.svg'} width={20} height={20} alt='tick' />
            <span className='text-center'>Free forever plan</span>
          </div>
          <div className='text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full'>
            <Image src={'/icons/security-blue.svg'} width={20} height={20} alt='instant' />
            <span className='text-center'>Instant activation</span>
          </div>
        </div>

      </div>

      <div className='flex justify-center items-center w-full md:max-w-[448px] md:p-0 p-2.5'>
        <form className='flex flex-col md:min-w-[448px] max-w-[448px] w-full rounded-[24px] items-center justify-center md:p-8 p-8 text-main-foreground shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]' onSubmit={(e) => submit(e)}>
          <h2 className='font-bold text-[24px]'>
            Affiliate Login
          </h2>
          <span className='text-[14px] md:mt-2 mt-2'>Become our partner</span>

          <div className="relative w-full md:mt-5 mt-5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src={'/icons/envelope-grey.svg'} width={20} height={20} alt='instant' />

            </span>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-[10px] pl-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] text-main-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
              placeholder="Username"
            />
          </div>

          <div className="relative w-full md:mt-5 mt-5">
            {/* Left icon */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src="/icons/lock-grey.svg" width={20} height={20} alt="instant" />
            </span>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="p-2.5 pl-10 pr-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] text-main-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
              placeholder="Password"
            />

            {/* Right eye icon */}
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Image
                src={showPassword ? "/icons/eye-grey.svg" : "/icons/eye-grey.svg"}
                width={20}
                height={20}
                alt="toggle visibility"
              />
            </span>
          </div>

          <div className="flex justify-end w-full items-center md:gap-2 md:mt-5 mt-5">
            <Link href={'/forgot-password'} className="text-blue-700 cursor-pointer">Forgot Password?</Link>
          </div>

          <button type='submit' className='w-full bg-[linear-gradient(90deg,#3B82F6_0%,#A855F7_100%)] p-2.5 bg-primary text-background rounded-[10px] md:mt-5 mt-5 text-[14px] font-medium flex justify-center items-center cursor-pointer'>
            {
              spin ?
                <div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
                : "Login"
            }
          </button>

          <div className='flex justify-center items-center md:gap-2 w-full md:mt-5 mt-5'>
            <span className="text-[14px] text-foreground">
              Don&apos;t have an account? <Link href={'/signup'} className="text-blue-700 underline cursor-pointer">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>

      <Link href={'/'} className='flex md:hidden md:gap-4 gap-4 justify-start item-center'>
        <Image src={'/icons/arrow-back.svg'} width={16} height={16} alt={'Back'} />
        <span className='text-[14px] text-main-light'>Back to Home</span>
      </Link>
    </div>
  )
}

export default SignInAffiliate