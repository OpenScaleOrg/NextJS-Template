'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function SignUpHero() {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [pass, setPass] = useState<string>('');
	const [confirmPass, setConfirmPass] = useState<string>('');
	const [spin, setSpin] = useState<boolean>(false);
	const [agreed, setAgreed] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
	const [showPopup, setShowPopup] = useState<boolean>(false);

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!agreed) {
			return alert('Please agree to Terms and Conditions');
		}

		if (firstName == '' || lastName == '' || email == '' || pass == '' || confirmPass == '') {
			return alert('Fill all required fields');
		}

		if (pass !== confirmPass) {
			return alert("Passwords don't match");
		}

		setSpin(true);
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: pass }),
		});

		if (res.status === 201) {
			setSpin(false);
			toast.success('🎉 Successfully Signed Up! Verify your email.', {
				position: 'top-center',
			});

			document.body.style.overflow = 'hidden';

			setShowPopup(true);

			// setTimeout(() => {
			//   window.location.href = '/signin';
			// }, 2000);
		}
	};

	return (
		<div className="w-full max-w-[1152px] flex flex-wrap md:flex-nowrap flex-col-reverse lg:flex-row items-center lg:justify-center justify-center md:px-20 md:py-10 md:gap-10 gap-2">
			<div className="flex flex-col justify-start md:items-start items-center w-full md:max-w-[560px] md:mx-0 mx-2.5">
				<Link href={'/'} className="md:flex hidden md:gap-4 justify-start item-center">
					<Image src={'/icons/arrow-back.svg'} width={16} height={16} alt={'Back'} />
					<span className="text-[14px] text-main-light">Back to Home</span>
				</Link>

				<Link
					rel="canonical"
					href={'/'}
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

				<h1 className="md:text-left text-center md:mt-8 font-extrabold md:text-[60px] text-[24px] leading-[60px] text-main-foreground">
					Join the Creative Revolution
				</h1>

				<span className="w-full text-[18px] text-main-light max-w-[400px] md:mt-8 mt-4">
					Start creating stunning 3D and 2D mockups instantly. No credit card required.
				</span>

				<div className="md:mt-8 mt-8 flex flex-col justify-start items-start md:gap-4 gap-4">
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

				<div className="flex flex-wrap sm:flex-row flex-col justify-start items-start md:gap-5 gap-5 md:mt-8 mt-8">
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

			<div className="flex justify-center items-center w-full md:max-w-[448px] md:p-0 p-2.5">
				<form
					className="flex flex-col md:min-w-[448px] md:w-[448px] rounded-[24px] items-center justify-center md:mx-0 mx-2.5 md:p-8 p-8 text-main-foreground shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
					onSubmit={(e) => submit(e)}
				>
					<h2 className="font-bold text-[24px]">Create you account</h2>
					<span className="text-[14px] md:mt-2 mt-2">Start your creative journey today</span>
					<div className="flex md:mt-5 mt-5 w-full items-center justify-center md:gap-5 gap-5">
						<div className="relative w-full">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<Image src={'/icons/user-grey.svg'} width={20} height={20} alt="instant" />
							</span>
							<input
								id="firstName"
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
								className="p-[10px] pl-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] placeholder:custom-text2 text-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
								placeholder="First name"
							/>
						</div>

						<div className="relative w-full">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<Image src={'/icons/user-grey.svg'} width={20} height={20} alt="instant" />
							</span>
							<input
								id="lastName"
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
								className="p-[10px] pl-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] placeholder:custom-text2 text-foreground custom-text2 focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
								placeholder="First name"
							/>
						</div>
					</div>

					<div className="relative w-full md:mt-5 mt-5">
						<span className="absolute inset-y-0 left-0 flex items-center pl-3">
							<Image src={'/icons/envelope-grey.svg'} width={20} height={20} alt="instant" />
						</span>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="p-[10px] pl-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] placeholder:custom-text2 text-foreground custom-text2 focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
							placeholder="Email"
						/>
					</div>

					<div className="relative w-full md:mt-5 mt-5">
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
							placeholder="Password"
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

					<div className="relative w-full md:mt-5 mt-5">
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

					<div className="flex justify-start w-full items-center md:gap-2 gap-2 md:mt-5 mt-5">
						<input
							id="terms"
							type="checkbox"
							checked={agreed}
							onChange={(e) => setAgreed(e.target.checked)}
							required
							className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
						/>
						<label htmlFor="terms" className="text-[14px] text-foreground">
							I agree to{' '}
							<Link href={'/'} className="text-blue-700 underline cursor-pointer">
								Terms of Service
							</Link>{' '}
							and{' '}
							<Link href={'/'} className="text-blue-700 underline cursor-pointer">
								Privacy Policy
							</Link>
						</label>
					</div>

					<button
						type="submit"
						className="w-full bg-[linear-gradient(90deg,#3B82F6_0%,#A855F7_100%)] p-[10px] bg-primary text-background rounded-[10px] md:mt-5 mt-5 text-[14px] font-medium flex justify-center items-center cursor-pointer"
					>
						{spin ? (
							<div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
						) : (
							'Create Account'
						)}
					</button>

					<div className="flex justify-center items-center md:gap-2 w-full md:mt-5 mt-5">
						<span className="text-[14px] text-foreground">
							Already have an account?{' '}
							<Link href={'/signin'} className="text-blue-700 underline cursor-pointer">
								Sign In
							</Link>
						</span>
					</div>
				</form>
			</div>

			<Link href={'/'} className="flex md:hidden md:gap-4 gap-4 justify-start item-center">
				<Image src={'/icons/arrow-back.svg'} width={16} height={16} alt={'Back'} />
				<span className="text-[14px] text-main-light">Back to Home</span>
			</Link>

			{showPopup && (
				<div className="fixed inset-0 flex items-center justify-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[8px] p-5">
					<div className="bg-main-background p-5 rounded-lg shadow-md flex flex-col justify-center items-center">
						<h2 className="text-lg font-bold">Verify Email</h2>
						<p className="mt-2 text-center">A verification link has been sent to your email address.</p>
						<Link className="mt-4 bg-main-foreground text-background px-4 py-2 rounded-md" href={'/signin'}>
							Go to Sign In
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default SignUpHero;
