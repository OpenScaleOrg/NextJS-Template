import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { contents } from '@/lib/data/website';

const Footer = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center">
			<div className="w-full max-w-[1440px] flex md:flex-nowrap flex-wrap md:justify-center justify-between items-start md:px-20 px-5 md:pt-10 pt-10 md:mb-10 mb-10 md:gap-12 gap-x-2 gap-y-5">
				<div className="w-full xl:min-w-[420px] md:max-w-[420px] flex flex-col justify-start items-start md:gap-5 gap-5">
					<Link href={'/'}>
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
					</Link>
					<p className="sm:text-[14px] text-main-light w-full">
						Transform your apparel designs into stunning 3D and 2D mockups instantly. No downloads, no installations, just
						pure creativity in your browser.
					</p>
					<div className="flex md:gap-5 gap-5">
						<Link
							href={'https://www.instagram.com/firstoxstudio.com_'}
							className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#F3F4F6_0%,#E4E4E7_100%)]"
						>
							<Image src={'/icons/instagram.svg'} width={32} height={32} alt="fashion brands" className="w-5 h-5" />
						</Link>
						<Link
							href={'/'}
							className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#F3F4F6_0%,#E4E4E7_100%)]"
						>
							<Image src={'/icons/twitter.svg'} width={32} height={32} alt="fashion brands" className="w-5 h-5" />
						</Link>
						<Link
							href={'https://www.facebook.com/profile.php?id=61579104136315'}
							className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#F3F4F6_0%,#E4E4E7_100%)]"
						>
							<Image src={'/icons/facebook.svg'} width={32} height={32} alt="fashion brands" className="w-5 h-5" />
						</Link>
						<Link
							href={'https://www.youtube.com/@firstoxstudio'}
							className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#F3F4F6_0%,#E4E4E7_100%)]"
						>
							<Image src={'/icons/youtube.svg'} width={32} height={32} alt="fashion brands" className="w-5 h-5" />
						</Link>
						<Link
							href={'/'}
							className="rounded-[16px] w-10 min-w-10 h-10 min-h-10 flex justify-center items-center bg-[linear-gradient(135deg,#F3F4F6_0%,#E4E4E7_100%)]"
						>
							<Image src={'/icons/linkedin.svg'} width={32} height={32} alt="fashion brands" className="w-5 h-5" />
						</Link>
					</div>
					<div className="w-full "></div>
				</div>
				<div className="md:w-full flex flex-col justify-start items-start md:gap-5 gap-2">
					<h5 className="text-[14px] text-main-foreground font-bold">PRODUCT</h5>
					{contents.footerLinks.slice(0, 4).map((link, index) => (
						<Link key={index} href={'/'} className="text-[14px] text-main-light">
							{link.text}
						</Link>
					))}
				</div>
				<div className="md:w-full flex flex-col justify-start items-start md:gap-5 gap-2">
					<h5 className="text-[14px] text-main-foreground font-bold">LEGAL</h5>
					{contents.footerLinks.slice(4, 8).map((link, index) => (
						<Link key={index} href={'/'} className="text-[14px] text-main-light">
							{link.text}
						</Link>
					))}
				</div>
				<div className="md:w-full flex flex-col justify-start items-start md:gap-5 gap-2">
					<h5 className="text-[14px] text-main-foreground font-bold">RESOURCES</h5>
					{contents.footerLinks.slice(8, 12).map((link, index) => (
						<Link key={index} href={'/'} className="text-[14px] text-main-light">
							{link.text}
						</Link>
					))}
				</div>
			</div>
			<div className="bg-gradient-to-r from-[#D1D5DB]/0 via-[#D1D5DB] to-[#D1D5DB]/0 h-[1px] w-full max-w-[1440px] md:px-20 px-5" />
			<div className="md:py-10 py-5 w-full max-w-[1440px] md:px-20 px-5 flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-2">
				<span className="text-[14px] text-main-light sm:w-auto w-full sm:text-left text-center">
					© FirstOx Studio 2025 &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; All rights reserved
				</span>
				<div className="flex justify-center items-center md:gap-10 gap-10">
					<Link href={'/'} className="text-[14px] text-main-light">
						Privacy Policy
					</Link>
					<Link href={'/'} className="text-[14px] text-main-light">
						Cookie Policy
					</Link>
					<Link href={'/sitemap.xml'} className="text-[14px] text-main-light">
						Sitemap
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
