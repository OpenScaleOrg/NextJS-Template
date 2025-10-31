'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Close, Menu } from '@mui/icons-material';
import LogOutButton from './LogOutButton';

const HamburgerMenu = ({ user, index }: { user: User; index: number }) => {
	const [isMenuOpen, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu((prev) => !prev);

		document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
	};

	return (
		<>
			<button type="button" title="menu" className="mx-2 visible md:hidden" onClick={toggleMenu}>
				{isMenuOpen ? <Close /> : <Menu />}
			</button>

			<div
				className={`absolute flex md:hidden bg-slate-300 top-[60px] z-10 left-0 w-[260px] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} glass-container bg-opacity-50 backdrop-filter backdrop-blur-md rounded-r-lg shadow-lg h-[calc(100vh-60px)]`}
			>
				<div className="bg-main-background left-0 z-40 min-w-[260px] pb-14 max-w-[260px] h-full flex flex-col justify-between items-center gap-2">
					<div className="w-full p-4 flex flex-col justify-start items-center">
						<Link
							href={'/studio'}
							type="button"
							className={`w-full h-[44px] md:p-4 p-4 md:gap-4 gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer ${index == 0 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-main-background dark:text-main-foreground' : 'text-main-light dark:text-main-foreground'}`}
						>
							{index == 0 ? (
								<Image src={'/icons/home.svg'} height={20} width={20} alt="home" />
							) : (
								<Image src={'/icons/home.svg'} height={20} width={20} alt="home" />
							)}
							<span className="font-medium">Home</span>
						</Link>
						<Link
							href={'/studio'}
							type="button"
							className={`w-full h-[44px] md:p-4 p-4 md:gap-4 gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer ${index == 1 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-main-background dark:text-main-foreground' : 'text-main-light dark:text-main-foreground'}`}
						>
							{index == 1 ? (
								<Image src={'/icons/home.svg'} height={20} width={20} alt="home" />
							) : (
								<Image src={'/icons/billing.svg'} height={20} width={20} alt="home" />
							)}
							<span className="font-medium">Billing & Subscription</span>
						</Link>
						<Link
							href={'/studio'}
							type="button"
							className={`w-full h-[44px] md:p-4 p-4 md:gap-4 gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer ${index == 3 ? 'bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-main-background dark:text-main-foreground' : 'text-main-light dark:text-main-foreground'}`}
						>
							{index == 2 ? (
								<Image src={'/icons/home.svg'} height={20} width={20} alt="home" />
							) : (
								<Image src={'/icons/support.svg'} height={20} width={20} alt="home" />
							)}
							<span className="font-medium">Support</span>
						</Link>
					</div>
					<div className="w-full border-t-1 border-main-light/20 flex flex-col justify-start items-center">
						<div
							title="shirts"
							className={`w-full h-[60px] md:p-4 p-4 md:gap-4 gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer`}
						>
							<div className="rounded-full w-8 min-w-8 h-8 min-h-8 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)]">
								<Image src={'/icons/user.svg'} width={16} height={16} alt="unlimited free" className="w-4 h-4" />
							</div>

							<div className="w-full flex flex-col justify-center items-start md:gap-1 gap-1">
								<span className="font-bold text-[14px] text-main-foreground">
									{user.firstName} {user.lastName?.charAt(0).toUpperCase()}.
								</span>
								<span className="font-normal text-[12px] text-main-light">{user.email}</span>
							</div>
						</div>
						<LogOutButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default HamburgerMenu;
