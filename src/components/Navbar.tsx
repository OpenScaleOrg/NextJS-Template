import React from 'react';

import Link from 'next/link';
import { cookies } from 'next/headers';

// import Menu from '@mui/icons-material/Menu';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';
// import HamburgerMenu from './HamburgerMenu';

// import Menu from './Menu';

const Navbar = async () => {
	const cookie = await cookies();
	const token = cookie.get('token')?.value || null;

	let user = null;

	if (token) {
		const verifyToken = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/verify-jwt`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ token }),
				});
				if (res.ok) {
					const data = await res.json();
					return data.value;
				}
				return false;
			} catch (err) {
				console.error('JWT verification failed', err);
				return false;
			}
		};

		const isLoggedIn = await verifyToken();

		if (isLoggedIn) {
			const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/get-user`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ token }),
			});

			if (userResponse.ok) {
				user = await userResponse.json();
			}
		}
	}

	return (
		<nav
			className="z-50 flex w-full fixed top-0 justify-center md:h-[80px] h-[80px] bg-main-background"
			id="navbar_container"
		>
			<div className="w-full h-full max-w-[1440px] lg:px-20 px-5 lg:py-2.5 py-2.5 flex justify-between">
				<Link rel="canonical" href={'/'} className="flex items-center gap-2 md:gap-4 outline-none">
					<div className="flex items-center md:gap-[10px] h-full">
						<Image
							src={'/images/logo-light.svg'}
							width={127}
							height={30}
							draggable={false}
							alt={"Frist'OX Studio"}
							className="object-contain pointer-events-none dark:hidden"
						/>
						<Image
							src={'/images/logo-dark.svg'}
							width={127}
							height={30}
							draggable={false}
							alt={"Frist'OX Studio"}
							className="object-contain pointer-events-none dark:block hidden"
						/>
					</div>
				</Link>

				<ul className="items-center md:gap-[40px] gap-2 font-medium lg:flex hidden">
					<li key={crypto.randomUUID()} className="transition ease-in-out hover:animate-text hover:text-[#F00000]">
						<Link rel="canonical" className="md:text-[16px] text-main-foreground" href={'/#features'}>
							Features
						</Link>
					</li>
					<li key={crypto.randomUUID()} className="transition ease-in-out hover:animate-text hover:text-[#F00000]">
						<Link rel="canonical" className="md:text-[16px] text-main-foreground" href={'/#pricing'}>
							Pricing
						</Link>
					</li>
					<li key={crypto.randomUUID()} className="transition ease-in-out hover:animate-text hover:text-[#F00000]">
						<Link rel="canonical" className="md:text-[16px] text-main-foreground" href={'/studio'}>
							Studio
						</Link>
					</li>
				</ul>

				<div className="flex justify-center items-center gap-[20px]">
					<ul className="items-center md:gap-[20px] gap-[10px] flex">
						{/* <Link
                            rel='canonical'
                            className='md:h-10 px-10 rounded-full flex justify-center items-center bg-primary custom-display2'
                            href='mailto:izaz@firstox.com'
                        >
                            <span className='md:text-[16px] text-[12px] custom-display2 text-background'>Talk to founder</span>
                        </Link> */}
						<div className="items-center md:gap-5 gap-5 flex">
							{user ? (
								<Link
									href={'/studio'}
									className={`w-full h-[60px] md:p-4 md:gap-4 gap-2 text-[14px] rounded-[12px] flex items-center cursor-pointer`}
								>
									<div className="rounded-full w-8 min-w-8 h-8 min-h-8 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)]">
										<Image src={'/icons/user.svg'} width={16} height={16} alt="unlimited free" className="w-4 h-4" />
									</div>

									<div className="w-full flex flex-col justify-center items-start">
										<span className="font-bold text-[14px] text-main-foreground whitespace-nowrap text-ellipsis sm:w-auto w-[60px] overflow-hidden">
											{user.firstName} {user.lastName?.charAt(0).toUpperCase()}.
										</span>
										<span className="font-normal text-[12px] text-main-light whitespace-nowrap text-ellipsis sm:w-auto w-[60px] overflow-hidden">
											{user.email}
										</span>
									</div>
								</Link>
							) : (
								<>
									<Link
										rel="canonical"
										className="md:h-10 rounded-full flex justify-center items-center text-main-foreground font-medium md:text-[16px] text-[12px] mr-5"
										href="/signin"
									>
										Customer Login
									</Link>
									<Link
										rel="canonical"
										className="md:h-10 rounded-[16px] md:flex hidden justify-center items-center bg-primary font-bold w-[120px] whitespace-nowrap md:text-[16px] text-[12px] text-main-background"
										href="/signup"
									>
										Sign Up
									</Link>
								</>
							)}
							<ThemeToggleButton />
						</div>
					</ul>
					<div className="flex justify-center items-center md:hidden" title="hamburgerMenu">
						{/* <HamburgerMenu/> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
