'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import Image from 'next/image';

const ForgotPass = () => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const [email, setEmail] = useState<string>('');
	const [step, setStep] = useState<number>(0);
	const [code, setCode] = useState<string | undefined>(undefined);
	const [pass, setPass] = useState<string>('');
	const [confirmPass, setConfirmPass] = useState<string>('');
	const [spin, setSpin] = useState<boolean>(false);
	const [popup, setPopup] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

	const getCode = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email === '' || !emailRegex.test(email)) {
			toast.error('Email is required!', {
				position: 'top-center',
			});
			return;
		}

		setSpin(true);
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forgot-pass`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email }),
		});

		if (res.status === 401) {
			setSpin(false);
			toast.error('Invalid Credentials!', {
				position: 'top-center',
			});
		}

		if (res.status === 200) {
			setSpin(false);
			setStep(1);
		}
	};

	const isValidCode = (code: string): boolean => {
		return /^\d{6}$/.test(code);
	};

	const verifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSpin(true);

		if (!code) {
			alert('Enter verification code');
			return;
		}

		if (!isValidCode(code)) {
			alert('Enter valid verification code');
			return;
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forgot-pass-verify`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email, code: code }),
		});

		if (res.status === 401) {
			setSpin(false);
			toast.error('Invalid Code!', {
				position: 'top-center',
			});
		}

		if (res.status === 200) {
			setSpin(false);
			setStep(2);
		}
	};

	const resetPass = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSpin(true);

		if (pass !== confirmPass) {
			alert("Passwords don't match");
			return;
		}

		if (pass.length < 8) {
			alert('Password is too short');
			return;
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forgot-pass-reset`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email, password: pass }),
		});

		if (res.status === 401) {
			setSpin(false);
			toast.error('Invalid Code!', {
				position: 'top-center',
			});
		}

		if (res.status === 200) {
			setSpin(false);
			setStep(0);
			setPopup(true);
		}
	};

	return (
		<div className="w-full max-w-[1152px] flex items-center md:justify-center justify-center md:px-20 md:py-10 md:gap-10">
			<div className="flex flex-col justify-start items-start w-full md:max-w-[560px]">
				<Link href={'/'} className="flex md:gap-4 justify-start item-center">
					<Image src={'/icons/arrow-back.svg'} width={16} height={16} alt={'Back'} />
					<span className="text-[14px] text-main-light">Back to Home</span>
				</Link>

				<Link
					rel="canonical"
					href={process.env.NEXT_PUBLIC_BASE_URL || '/'}
					className="flex items-center gap-2 md:gap-4 outline-none px-4 py-2 md:mt-8 rounded-[16px] bg-main-foreground"
				>
					<div className="flex items-center md:gap-[10px] h-full">
						<Image
							src={'/images/logo-light.svg'}
							width={127}
							height={30}
							draggable={false}
							alt={"Frist'OX Studio"}
							className="object-contain pointer-events-none dark:block hidden"
						/>
						<Image
							src={'/images/logo-dark.svg'}
							width={127}
							height={30}
							draggable={false}
							alt={"Frist'OX Studio"}
							className="object-contain pointer-events-none dark:hidden"
						/>
					</div>
				</Link>

				<h1 className="w-full md:mt-8 font-extrabold text-[60px] leading-[60px] text-main-foreground">
					Join the Creative Revolution
				</h1>

				<span className="text-[18px] text-main-light max-w-[400px] md:mt-8">
					Start creating stunning 3D and 2D mockups instantly. No credit card required.
				</span>

				<div className="md:mt-8 flex flex-col justify-start items-start md:gap-4">
					<div className="flex items-center justify-center gap-4 w-full">
						<div className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#A855F7_100%)]">
							<Image src={'/icons/hyper-realistic.svg'} width={20} height={20} alt="hyper realistic" className="w-5 h-5" />
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="font-bold text-[14px] text-main-foreground text-left w-full">Instant 3D Mockups</h4>
							<h6 className="text-main-light text-[12px] text-left w-full">Transform designs in seconds</h6>
						</div>
					</div>

					<div className="flex items-center justify-center gap-4 w-full">
						<div className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#A855F7_100%)]">
							<Image src={'/icons/security.svg'} width={20} height={20} alt="hyper realistic" className="w-5 h-5" />
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="font-bold text-[14px] text-main-foreground text-left w-full">No Watermarks</h4>
							<h6 className="text-main-light text-[12px] text-left w-full">Professional quality exports</h6>
						</div>
					</div>

					<div className="flex items-center justify-center gap-4 w-full">
						<div className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#A855F7_100%)]">
							<Image src={'/icons/instant-light.svg'} width={20} height={20} alt="hyper realistic" className="w-5 h-5" />
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="font-bold text-[14px] text-main-foreground text-left w-full">Browser-Based</h4>
							<h6 className="text-main-light text-[12px] text-left w-full">No downloads required</h6>
						</div>
					</div>
				</div>

				<div className="flex sm:flex-row flex-col justify-center items-center md:gap-5 gap-5 md:mt-8 mt-8">
					<div className="text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full">
						<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
						<span className="text-center">Free forever plan</span>
					</div>
					<div className="text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full">
						<Image src={'/icons/security-blue.svg'} width={20} height={20} alt="instant" />
						<span className="text-center">Instant activation</span>
					</div>
				</div>
			</div>

			{(() => {
				switch (step) {
					case 1:
						return (
							<form
								className="flex flex-col max-w-[448px] md:w-[448px] rounded-[24px] items-center justify-center md:p-8 text-main-foreground shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
								onSubmit={(e) => verifyCode(e)}
							>
								<div className="flex items-start justify-center w-full">
									<button type="button" title="Back" onClick={() => setStep(0)} className="cursor-pointer">
										<Image src={'/icons/arrow-back.svg'} width={16} height={16} alt="Back" />
									</button>
									<div className="flex flex-col w-full items-center justify-center md:gap-2.5">
										<h2 className="font-bold text-[24px]">Forgot Password</h2>
										<span className="text-[14px] md:mt-2">Start your creative journey today</span>
									</div>
								</div>

								<div className="relative w-full flex justify-center md:mt-5">
									<InputOTP maxLength={6} value={code} onChange={(value) => setCode(value)}>
										<InputOTPGroup>
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</div>

								<button
									type="submit"
									className="w-full bg-[linear-gradient(90deg,#3B82F6_0%,#A855F7_100%)] p-[10px] bg-primary text-background rounded-[10px] md:mt-5 text-[14px] font-medium flex justify-center items-center cursor-pointer cursor-pointer"
								>
									{spin ? (
										<div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
									) : (
										'Submit'
									)}
								</button>
							</form>
						);
					case 2:
						return (
							<form
								className="flex flex-col max-w-[448px] md:w-[448px] rounded-[24px] items-center justify-center md:p-8 text-main-foreground shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
								onSubmit={(e) => resetPass(e)}
							>
								<h2 className="font-bold text-[24px]">Change Password</h2>
								<span className="text-[14px] md:mt-2">Start your creative journey today</span>

								<div className="relative w-full md:mt-5">
									{/* Left icon */}
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<Image src="/icons/lock-grey.svg" width={20} height={20} alt="instant" />
									</span>

									<input
										id="password"
										type={showPassword ? 'text' : 'password'}
										value={pass}
										onChange={(e) => setPass(e.target.value)}
										required
										className="p-[10px] pl-10 pr-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] placeholder:custom-text2 text-foreground custom-text2 focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
										placeholder="New Password"
									/>

									{/* Right eye icon */}
									<span
										className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
										onClick={() => setShowPassword(!showPassword)}
									>
										<Image
											src={showPassword ? '/icons/eye-grey.svg' : '/icons/eye-grey.svg'}
											width={20}
											height={20}
											alt="toggle visibility"
										/>
									</span>
								</div>

								<div className="relative w-full md:mt-5">
									{/* Left icon */}
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<Image src="/icons/lock-grey.svg" width={20} height={20} alt="instant" />
									</span>

									<input
										id="confirmPassword"
										type={showConfirmPassword ? 'text' : 'password'}
										value={confirmPass}
										onChange={(e) => setConfirmPass(e.target.value)}
										required
										className="p-[10px] pl-10 pr-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] placeholder:custom-text2 text-foreground custom-text2 focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
										placeholder="Confirm Password"
									/>

									{/* Right eye icon */}
									<span
										className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									>
										<Image
											src={showPassword ? '/icons/eye-grey.svg' : '/icons/eye-grey.svg'}
											width={20}
											height={20}
											alt="toggle visibility"
										/>
									</span>
								</div>

								<button
									type="submit"
									className="w-full bg-[linear-gradient(90deg,#3B82F6_0%,#A855F7_100%)] p-[10px] bg-primary text-main-background rounded-[10px] md:mt-5 text-[14px] font-medium flex justify-center items-center cursor-pointer cursor-pointer"
								>
									{spin ? (
										<div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
									) : (
										'Reset Password'
									)}
								</button>

								<div className="flex justify-center items-center md:gap-2 w-full md:mt-5">
									<span className="text-[14px] text-foreground">
										Already have an account?{' '}
										<Link href={'/signin'} className="text-blue-700 underline cursor-pointer">
											Sign In
										</Link>
									</span>
								</div>
							</form>
						);
					default:
						return (
							<form
								className="flex flex-col max-w-[448px] md:w-[448px] rounded-[24px] items-center justify-center md:p-8 text-main-foreground shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
								onSubmit={(e) => getCode(e)}
							>
								<h2 className="font-bold text-[24px]">Forgot Password</h2>
								<span className="text-[14px] md:mt-2">Start your creative journey today</span>

								<div className="relative w-full md:mt-5">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<Image src={'/icons/envelope-grey.svg'} width={20} height={20} alt="instant" />
									</span>
									<input
										id="email"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="p-[10px] pl-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] text-main-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
										placeholder="Email"
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-[linear-gradient(90deg,#3B82F6_0%,#A855F7_100%)] p-[10px] bg-primary text-background rounded-[10px] md:mt-5 text-[14px] font-medium flex justify-center items-center cursor-pointer cursor-pointer"
								>
									{spin ? (
										<div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
									) : (
										'Send Security Code'
									)}
								</button>
							</form>
						);
				}
			})()}

			{popup && (
				<div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-[4px]">
					<div className="md:h-[200px] md:w-[400px] flex flex-col justify-center items-center md:gap-5 bg-main-light/20 rounded-3xl md:p-20">
						<h5 className="text-main-foreground text-center">Password was successfully changed</h5>
						<Link href={'/signin'} className="font-black text-main-foreground hover:underline">
							Go to Login
						</Link>
					</div>
				</div>
			)}
		</div>
		// <div className='w-full flex items-center justify-start md:px-32 md:py-10 md:gap-10'>
		//     <div className='flex flex-col justify-center items-center md:w-full md:px-10 md:gap-10'>
		//         <div className='flex w-full flex-col items-center justify-center md:gap-[10px]'>
		//             <h4 className='custom-heading text-tertiary'>Forgot Password</h4>
		//             <h4 className='custom-text2 text-foreground'>Reset your password</h4>
		//         </div>

		//         {(() => {
		//             switch (step) {
		//                 case 1:
		//                     return (
		//                         <form className='flex flex-col max-w-96 md:w-96 items-center justify-center md:gap-5' onSubmit={(e) => verifyCode(e)}>
		//                             <div className='flex flex-col w-full items-center justify-center md:gap-[10px]'>
		//                                 <div className='w-full flex justify-start items-center'>
		//                                     <IconButton
		//                                         onClick={() => setStep(0)}
		//                                         sx={{
		//                                             border: '1px solid #ccc',
		//                                             borderRadius: '8px',
		//                                             width: '40px',
		//                                             height: '40px',
		//                                             color: 'black',
		//                                         }}
		//                                     >
		//                                         <ArrowBackIcon />
		//                                     </IconButton>
		//                                     <label htmlFor='code' className='custom-display2 w-full text-center text-foreground'>
		//                                         Enter Verification Code
		//                                     </label>
		//                                 </div>
		//                                 <InputOTP maxLength={6} value={code} onChange={(value) => setCode(value)}>
		//                                     <InputOTPGroup>
		//                                         <InputOTPSlot index={0} />
		//                                         <InputOTPSlot index={1} />
		//                                         <InputOTPSlot index={2} />
		//                                         <InputOTPSlot index={3} />
		//                                         <InputOTPSlot index={4} />
		//                                         <InputOTPSlot index={5} />
		//                                     </InputOTPGroup>
		//                                 </InputOTP>
		//                             </div>

		//                             <div className='w-full flex justify-end items-center'>
		//                                 <Link href="/signin" className='text-right text-tertiary custom-text1'>Sign In</Link>
		//                             </div>

		//                             <button
		//                                 type='submit'
		//                                 className='w-full p-[10px] bg-primary text-background rounded-[10px] custom-display2 flex justify-center items-center cursor-pointer'
		//                             >
		//                                 {
		//                                     spin ? (
		//                                         <div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
		//                                     ) : (
		//                                         "Verify Code"
		//                                     )
		//                                 }
		//                             </button>
		//                         </form>
		//                     )
		//                 case 2:
		//                     return (
		//                         <form className='flex flex-col max-w-96 md:w-96 items-center justify-center md:gap-5' onSubmit={(e) => resetPass(e)}>
		//                             <div className='flex flex-col w-full items-center justify-center md:gap-[10px]'>
		//                                 <label htmlFor='email' className='custom-display2 w-full text-left text-foreground'>Enter New Password</label>
		//                                 <input
		//                                     id="password"
		//                                     type="password"
		//                                     value={pass}
		//                                     onChange={(e) => setPass(e.target.value)}
		//                                     className="p-[10px] md:w-full bg-transparent border border-foreground rounded-[10px] placeholder:text-foreground placeholder:custom-text2 text-foreground custom-text2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
		//                                     placeholder="Enter new password"
		//                                 />
		//                                 <input
		//                                     id="confirmPassword"
		//                                     type="password"
		//                                     value={confirmPass}
		//                                     onChange={(e) => setConfirmPass(e.target.value)}
		//                                     className="p-[10px] md:w-full bg-transparent border border-foreground rounded-[10px] placeholder:text-foreground placeholder:custom-text2 text-foreground custom-text2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
		//                                     placeholder="Confirm new password"
		//                                 />
		//                             </div>
		//                             {/* <div className='flex flex-col w-full items-center justify-center md:gap-[10px]'>
		//                                 <label htmlFor='email' className='custom-display2 w-full text-left text-foreground'></label>
		//                                 <input
		//                                     id="email"
		//                                     type="text"
		//                                     value={pass}
		//                                     onChange={(e) => setPass(e.target.value)}
		//                                     className="p-[10px] md:w-full bg-transparent border border-foreground rounded-[10px] placeholder:text-foreground placeholder:custom-text2 text-foreground custom-text2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
		//                                     placeholder="Enter password"
		//                                 />
		//                             </div> */}
		//                             <div className='w-full flex justify-end items-center'><Link href="/signin" className='text-right text-tertiary custom-text1'>Sign In</Link></div>
		//                             <button type='submit' className='w-full p-[10px] bg-primary text-background rounded-[10px] custom-display2 flex justify-center items-center cursor-pointer'>
		//                                 {
		//                                     spin ?
		//                                         <div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
		//                                         :
		//                                         "Change Password"
		//                                 }
		//                             </button>
		//                         </form>
		//                     )
		//                 default:
		//                     return (
		//                         <form className='flex flex-col max-w-96 md:w-96 items-center justify-center md:gap-5' onSubmit={(e) => getCode(e)}>
		//                             <div className='flex flex-col w-full items-center justify-center md:gap-[10px]'>
		//                                 <label htmlFor='email' className='custom-display2 w-full text-left text-foreground'>Enter email address</label>
		//                                 <input
		//                                     id="email"
		//                                     type="text"
		//                                     value={email}
		//                                     onChange={(e) => setEmail(e.target.value)}
		//                                     className="p-[10px] md:w-full bg-transparent border border-foreground rounded-[10px] placeholder:text-foreground placeholder:custom-text2 text-foreground custom-text2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
		//                                     placeholder="Enter email"
		//                                 />
		//                             </div>
		//                             {/* <div className='flex flex-col w-full items-center justify-center md:gap-[10px]'>
		//                                 <label htmlFor='email' className='custom-display2 w-full text-left text-foreground'></label>
		//                                 <input
		//                                     id="email"
		//                                     type="text"
		//                                     value={pass}
		//                                     onChange={(e) => setPass(e.target.value)}
		//                                     className="p-[10px] md:w-full bg-transparent border border-foreground rounded-[10px] placeholder:text-foreground placeholder:custom-text2 text-foreground custom-text2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
		//                                     placeholder="Enter password"
		//                                 />
		//                             </div> */}
		//                             <div className='w-full flex justify-end items-center'><Link href="/signin" className='text-right text-tertiary custom-text1'>Sign In</Link></div>
		//                             <button type='submit' className='w-full p-[10px] bg-primary text-background rounded-[10px] custom-display2 flex justify-center items-center cursor-pointer'>
		//                                 {
		//                                     spin ?
		//                                         <div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
		//                                         :
		//                                         "Get Verification Code"
		//                                 }
		//                             </button>
		//                         </form>
		//                     )
		//             }
		//         })()}

		//         <div className='flex justify-center items-center md:gap-2 w-full'>
		//             <span className="custom-text2 text-foreground">Don&apos;t have an account?</span>
		//             <Link href="/signup" className='text-primary custom-text1'>Sign Up</Link>
		//         </div>
		//     </div>
		//     <div className='bg-primary rounded-[40px] flex justify-center items-center md:h-[520px] md:w-full md:px-10'>

		//     </div>
		//     {
		//         popup &&
		//         <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-[4px]'>
		//         <div className='md:h-[400px] md:w-[600px] flex flex-col justify-center items-center md:gap-20 bg-foreground rounded-3xl md:p-20'>
		//             <h5 className='text-background text-center'>Password was successfully changed</h5>
		//             <Link href={'/signin'} className='font-black text-background hover:underline'>Go to Login</Link>
		//         </div>
		//         </div>
		//     }
		// </div>
	);
};

export default ForgotPass;
