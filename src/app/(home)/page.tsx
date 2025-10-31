import { contents } from '@/lib/data/website';
import ReferHome from '@/components/ReferHome';
import StatsPage from '@/components/StatsPage';
import Image from 'next/image';
import Link from 'next/link';
import ContactButton from '@/components/ContactButton';
import QNAElement from '@/components/QNAElement';
import Testimonials from '@/components/Testimonials';
// import VideoWithFallback from '@/components/VideoWithFallback';

interface ModelPreview {
	img: string;
	url: string;
}

const models: ModelPreview[] = [
	{
		img: '/images/beanie-home.png',
		url: '/studio/3D/tshirt/beanie',
	},
	{
		img: '/images/cap-home.png',
		url: '/studio/3D/tshirt/cap',
	},
	// {
	//   img: '/images/oversized-t-shirt-home.png',
	//   url: '/studio/3D/tshirt/oversized-tshirt'
	// },
	{
		img: '/images/pant-home.png',
		url: '/studio/3D/tshirt/pant-animated',
	},
	{
		img: '/images/tshirt-animated-home.png',
		url: '/studio/3D/tshirt/tshirt-animated',
	},
	// {
	//   img: '/images/tshirt-home.png',
	//   url: '/studio/3D/tshirt/tshirt'
	// }
];

const models2D: string[] = [
	'/images/mockup-2d-1.png',
	'/images/mockup-2d-2.png',
	'/images/mockup-2d-4.png',
	'/images/mockup-2d-5.png',
	'/images/mockup-2d-6.png',
	'/images/mockup-2d-7.png',
];

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-start">
			<section className="w-full max-w-[1440px] flex flex-col items-center justify-center lg:px-20 px-5 md:py-10 ">
				<h3 className="md:text-[18px] sm:text-[16px] text-[12px] text-main-light md:mt-0 mt-10">
					Professional mockup generator for designers and brands
				</h3>
				<div className="flex flex-col justify-start items-center md:mt-10 mt-10">
					<h1 className="font-extrabold md:text-[52px] sm:text-[36px] text-[24px] text-main-foreground text-center sm:leading-[60px] md:mb-10">
						Turn Your Apparel <br className="md:block hidden" /> Designs Into <br className="md:hidden block" /> Stunning{' '}
						<br className="md:block hidden" /> Mockups -{' '}
						<span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
							Instantly
						</span>
					</h1>
				</div>
				<p className="md:text-[18px] sm:text-[16px] text-[12px] text-main-light md:mt-10 mt-10 max-w-[600px] text-center">
					Visualize your designs in ultra-realistic 3D and crisp 2D mockups. All in your browser. No downloads, No
					installation & No delays.
				</p>
				<div className="flex sm:flex-row sm:w-auto w-full flex-col justify-center items-center md:gap-5 gap-5 md:mt-10 mt-10">
					<Link
						rel="canonical"
						className="md:h-14 h-14 sm:w-[200px] w-full rounded-[10px] flex justify-center items-center bg-main-foreground text-main-background font-bold text-[16px] whitespace-nowrap"
						href="/studio"
					>
						Create mockups now
					</Link>
					<ContactButton />
				</div>
			</section>

			<section className="w-full max-w-[1440px] flex flex-col items-center justify-center lg:px-20 px-5 md:mt-10 sm:mt-10 mt-20">
				<div className="relative flex justify-center items-center lg:w-[880px] w-full sm:h-[480px] h-[260px] rounded-[24px]">
					<div
						className="absolute inset-0 blur-[17px]"
						style={{
							background: 'linear-gradient(-90deg, #44A5FF 0%, #44A5FF 25%, #FF44EC 50%, #44A5FF 75%, #F2FF5E 100%)',
						}}
					></div>

					<video
						src="/videos/hero-vid.mp4"
						className="relative rounded-[24px] w-full aspect-[1920/1048] object-cover md:mb-5 pointer-events-none"
						autoPlay
						draggable={false}
						muted
						loop
						playsInline
					>
						Your browser does not support the video tag.
					</video>
				</div>
			</section>

			<section className="w-full max-w-[1440px] flex flex-col items-center justify-start lg:px-20 px-5 md:mt-40 sm:mt-40 mt-20">
				<h2 className="text-main-foreground text-center font-extrabold md:text-[48px] sm:text-[36px] text-[24px]">
					Why settle for still when you can have the{' '}
					<span className="bg-gradient-to-r from-[#BB2DAC] to-[#D9277A] bg-clip-text text-transparent">movement?</span>
				</h2>
				<div className="flex flex-wrap justify-center items-center w-full md:gap-10 gap-5 md:mt-20 mt-20">
					{contents.features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-start justify-start gap-4 md:px-8 px-8 md:py-8 py-8 md:w-[400px] w-full md:h-[180px] h-[150px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]"
						>
							<h4 className="sm:text-[24px] text-[18px] font-bold text-main-foreground text-center">{feature.name}</h4>
							<h6 className="text-main-light w-full sm:text-[16px] text-[14px]">{feature.text}</h6>
						</div>
					))}
				</div>
			</section>

			<section className="w-full h-full flex flex-col items-center justify-start lg:px-20 px-5 md:mt-40 mt-20 md:gap-10">
				<div className="flex flex-col justify-start items-center w-full">
					<h2 className="text-main-foreground text-center font-extrabold text-[48px]">
						Convert your{' '}
						<span className="bg-gradient-to-r from-[#8D36EA] to-[#BB2CAB] bg-clip-text text-transparent">
							2D Designs to 3D
						</span>
					</h2>
					<div className="flex flex-wrap md:gap-10 gap-10 justify-center items-start w-full md:mt-20 mt-10">
						{models.map((model, index) => (
							<Link
								href={model.url}
								key={index}
								className="flex flex-col items-center justify-center gap-4 rounded-[40px] bg-primary md:w-[360px] w-[224px] md:h-[360px] h-[224px] overflow-hidden"
							>
								<Image
									width={360}
									height={360}
									src={model.img}
									alt={'name'}
									draggable={false}
									className="object-cover w-full h-full pointer-events-none"
								/>
								{/* <h3 className='text-2xl font-bold text-primary font-lily'>{model.name}</h3>
                <p className='text-lg font-medium text-primary'>{model.name}</p> */}
							</Link>
						))}
					</div>
					<h3 className="sm:text-[18px] text-center text-[12px] text-main-light md:mt-20 mt-10">
						Transform any design into stunning 3D mockups in seconds
					</h3>

					<div className="border-[#BFDBFE]/50 md:mt-10 mt-10 border text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm rounded-full md:py-3 py-3 md:px-6 px-6 flex justify-center items-center md:gap-2 gap-2">
						<div className="flex gap-1 justify-center items-center">
							<div className="w-2 h-2 bg-[#3B82F6] rounded-full" />
							<div className="w-2 h-2 bg-[#A855F7] rounded-full" />
							<div className="w-2 h-2 bg-[#EC4899] rounded-full" />
						</div>
						<span className="text-[12px]">6+ apparel types supported</span>
					</div>
				</div>
			</section>

			<section className="w-full flex xl:flex-row flex-col md:gap-20 gap-10 justify-center max-w-[1440px] lg:px-20 px-5 md:mt-20 mt-20">
				<div className="w-full flex flex-col md:gap-10 gap-10">
					<video
						className="w-full sm:h-[360px] h-[250px] aspect-[1920/1048] rounded-[24px] overflow-hidden object-cover pointer-events-none"
						src="/videos/final-main.mp4"
						autoPlay
						muted
						loop
						playsInline
						draggable={false}
					>
						Your browser does not support the video tag.
					</video>
					<div className="flex rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-center gap-8 md:px-8 px-8 md:py-8 py-8 w-full md:h-[120px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-12 min-w-12 h-12 min-h-12 flex justify-center items-center bg-[linear-gradient(135deg,#A855F7_0%,#EC4899_100%)]">
							<Image src={'/icons/custom-back.svg'} width={24} height={24} alt="custom background" className="w-6 h-6" />
						</div>
						<div className="w-full flex flex-col justify-center items-center md:gap-2">
							<h4 className="font-bold text-[20px] text-main-foreground text-left w-full">Custom Backgrounds</h4>
							<h6 className="text-main-light text-left w-full">Drop your design into any setting for instant wow-factor.</h6>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col md:gap-10 gap-10">
					<video
						className="w-full sm:h-[360px] h-[250px] aspect-[1920/1048] rounded-[24px] overflow-hidden object-cover pointer-events-none"
						src="/videos/final-speed.mp4"
						autoPlay
						muted
						loop
						playsInline
						draggable={false}
					>
						Your browser does not support the video tag.
					</video>
					<div className="flex rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-center gap-8 md:px-8 px-8 md:py-8 py-8 w-full md:h-[120px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-12 min-w-12 h-12 min-h-12 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)]">
							<Image src={'/icons/adjust-motion.svg'} width={24} height={24} alt="adjustable motion" className="w-6 h-6" />
						</div>
						<div className="w-full flex flex-col justify-center items-center md:gap-2">
							<h4 className="font-bold text-[20px] text-main-foreground text-left w-full">Adjustable Motion</h4>
							<h6 className="text-main-light text-left w-full">Control every angle, speed. Show it off YOUR way.</h6>
						</div>
					</div>
				</div>
			</section>

			<section
				className="w-full max-w-[1440px] flex lg:flex-row flex-col items-center justify-center md:px-20 px-5 md:mt-40 mt-20 md:gap-20"
				id="features"
			>
				<h2 className="font-extrabold md:text-[48px] text-[36px] text-foreground md:text-left md:max-w-[300px] w-full text-center">
					The Features <br className="hidden md:block" /> that{' '}
					<span className="bg-gradient-to-r from-[#783FEA] to-[#D02989] bg-clip-text text-transparent">change</span>{' '}
					<br className="hidden md:block" /> Everything
				</h2>
				<div className="flex flex-col justify-center items-center w-full md:gap-8 gap-8 md:mt-0 mt-10">
					<div className="flex rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-center gap-8 md:px-8 px-8 md:py-8 py-8 w-full md:h-[130px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-16 min-w-16 h-16 min-h-16 flex justify-center items-center bg-[linear-gradient(135deg,#A855F7_0%,#EC4899_100%)]">
							<Image src={'/icons/hyper-realistic.svg'} width={32} height={32} alt="hyper realistic" className="w-8 h-8" />
						</div>
						<div className="w-full flex flex-col justify-center items-center md:gap-2">
							<h4 className="font-bold text-[24px] text-main-foreground text-left w-full">
								Hyper-Realistic Fabric Simulation
							</h4>
							<h6 className="text-main-light text-left w-full">
								Soft, stretchy, silky, textured—your designs will look and feel real.
							</h6>
						</div>
					</div>
					<div className="flex rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-center gap-8 md:px-8 px-8 md:py-8 py-8 w-full md:h-[120px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-16 min-w-16 h-16 min-h-16 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)]">
							<Image src={'/icons/unlimited-free.svg'} width={32} height={32} alt="unlimited free" className="w-8 h-8" />
						</div>
						<div className="w-full flex flex-col justify-center items-center md:gap-2">
							<h4 className="font-bold text-[24px] text-main-foreground text-left w-full">Unlimited Mockups</h4>
							<h6 className="text-main-light text-left w-full">Just signup & upgrade unlimited mockups</h6>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full max-w-[1440px] md:px-20 px-5 flex flex-col items-center justify-start md:mt-40 mt-20">
				<h2 className="text-main-foreground text-center font-extrabold md:text-[48px] text-[36px]">
					Built for Creators who refuse to{' '}
					<span className="bg-gradient-to-r from-[#8D36EA] to-[#BB2CAB] bg-clip-text text-transparent">blend in</span>
				</h2>
				<div className="flex flex-wrap justify-center items-start md:gap-8 gap-8 w-full md:mt-20 mt-10">
					<div className="flex flex-col text-center rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-start md:gap-5 gap-2 md:px-8 px-8 md:py-8 py-8 w-[296px] md:min-w-[296px] md:h-[296px] h-[260px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-16 min-w-16 h-16 min-h-16 flex justify-center items-center bg-[linear-gradient(135deg,#EC4899_0%,#F43F5E_100%)]">
							<Image src={'/icons/fashion-brands.svg'} width={32} height={32} alt="fashion brands" className="w-8 h-8" />
						</div>
						<h4 className="font-bold text-[24px] text-main-foreground w-full">Fashion Brands & Startups</h4>
						<h6 className="text-main-light w-full">Sell your vision before it&apos;s even produced.</h6>
					</div>

					<div className="flex flex-col text-center rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-start md:gap-5 gap-2 md:px-8 px-8 md:py-8 py-8 w-[296px] md:min-w-[296px] md:h-[296px] h-[260px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-16 min-w-16 h-16 min-h-16 flex justify-center items-center bg-[linear-gradient(135deg,#A855F7_0%,#6366F1_100%)]">
							<Image src={'/icons/apparel-designers.svg'} width={32} height={32} alt="fashion brands" className="w-8 h-8" />
						</div>
						<h4 className="font-bold text-[24px] text-main-foreground w-full">Apparel Designers</h4>
						<h6 className="text-main-light w-full">Showcase your work like a pro, no expensive software needed.</h6>
					</div>

					<div className="flex flex-col text-center rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-start md:gap-5 gap-2 md:px-8 px-8 md:py-8 py-8 w-[296px] md:min-w-[296px] md:h-[296px] h-[260px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-16 min-w-16 h-16 min-h-16 flex justify-center items-center bg-[linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)]">
							<Image src={'/icons/ecommerce-sellers.svg'} width={32} height={32} alt="fashion brands" className="w-8 h-8" />
						</div>
						<h4 className="font-bold text-[24px] text-main-foreground w-full">E-Commerce Sellers</h4>
						<h6 className="text-main-light w-full">Stand out with next-level product visuals.</h6>
					</div>

					<div className="flex flex-col text-center rounded-[24px] dark:bg-main-foreground/20 dark:backdrop-blur-sm items-center justify-start md:gap-5 gap-2 md:px-8 px-8 md:py-8 py-8 w-[296px] md:min-w-[296px] md:h-[296px] h-[260px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
						<div className="rounded-[16px] w-16 min-w-16 h-16 min-h-16 flex justify-center items-center bg-[linear-gradient(135deg,#22C55E_0%,#14B8A6_100%)]">
							<Image src={'/icons/fashion-brands.svg'} width={32} height={32} alt="fashion brands" className="w-8 h-8" />
						</div>
						<h4 className="font-bold text-[24px] text-main-foreground w-full">Content Creators & Marketers</h4>
						<h6 className="text-main-light w-full">Make your audience stop scrolling and start watching.</h6>
					</div>
				</div>
			</section>

			<section className="w-full max-w-[1440px] h-full flex flex-col items-center justify-start md:px-20 px-5 md:mt-40 mt-20">
				<h2 className="text-main-foreground text-center font-extrabold md:text-[48px] text-[36px]">
					<span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
						2D Mockups
					</span>
				</h2>
				<h3 className="sm:text-[18px] text-[12px] text-center text-main-light md:mt-5 mt-5">
					Professional quality mockups for every style and setting
				</h3>
				<div className="flex flex-wrap md:gap-10 gap-5 justify-center items-start w-full md:mt-20 mt-10">
					{models2D.map((model, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-4 rounded-[40px] bg-primary md:w-[360px] w-[224px] md:h-[360px] h-[224px] overflow-hidden"
						>
							<Image
								width={360}
								height={360}
								src={model}
								alt={'name'}
								draggable={false}
								className="object-cover w-full h-full pointer-events-none"
							/>
							{/* <h3 className='text-2xl font-bold text-primary font-lily'>{model.name}</h3>
              <p className='text-lg font-medium text-primary'>{model.name}</p> */}
						</div>
					))}
				</div>

				<div className="relative flex justify-center items-center md:w-[880px] w-full sm:h-[460px] h-[250px] rounded-[24px] md:mt-40 mt-20">
					<div
						className="absolute inset-0 blur-[17px]"
						style={{
							background: 'linear-gradient(-90deg, #44A5FF 0%, #44A5FF 25%, #FF44EC 50%, #44A5FF 75%, #F2FF5E 100%)',
						}}
					/>

					<video
						src="/videos/final-color.mp4"
						className="relative rounded-[24px] w-full aspect-[1920/1048] object-cover md:mb-5 pointer-events-none"
						autoPlay
						draggable={false}
						muted
						loop
						playsInline
					>
						Your browser does not support the video tag.
					</video>
				</div>

				<span className="text-[18px] text-main-light md:mt-20 mt-10">
					From flat lays to lifestyle shots - every angle covered
				</span>

				<div className="border-[#BFDBFE]/50 md:mt-10 mt-10 border text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm rounded-full md:py-3 py-3 md:px-6 px-6 flex justify-center items-center md:gap-2 gap-2">
					<div className="flex gap-1 justify-center items-center">
						<div className="w-2 h-2 bg-[#3B82F6] rounded-full" />
						<div className="w-2 h-2 bg-[#A855F7] rounded-full" />
						<div className="w-2 h-2 bg-[#EC4899] rounded-full" />
					</div>
					<span className="text-[12px]">Professional quality guaranteed</span>
				</div>
			</section>

			<section
				className="w-full max-w-[1440px] h-full flex flex-col items-center justify-start md:px-20 md:mt-40 mt-20"
				id="pricing"
			>
				<div className="flex flex-col justify-center items-center w-full md:gap-5 gap-5">
					<h2 className="text-main-foreground text-center font-extrabold sm:text-[48px] text-[24px]">
						Simple. Flexible.{' '}
						<span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
							No Bullsh*t
						</span>
					</h2>
					<div className="flex sm:w-auto w-full md:gap-5 gap-5 justify-center items-center">
						<div className="flex justify-center items-center md:gap-2 gap-2">
							<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
							<span className="text-main-foreground text-center sm:text-[16px] text-[12px]">No Watermarks</span>
						</div>
						<div className="flex justify-center items-center md:gap-2 gap-2">
							<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
							<span className="text-main-foreground text-center sm:text-[16px] text-[12px]">No Restrictions</span>
						</div>
						<div className="flex justify-center items-center md:gap-2 gap-2">
							<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
							<span className="text-main-foreground text-center sm:text-[16px] text-[12px]">Just Pure Creativity</span>
						</div>
					</div>
				</div>
				<div className="flex flex-warp md:gap-5 justify-center items-center w-full md:px-10 md:mt-20 mt-10">
					<div className="md:w-[340px] w-[340px] md:rounded-[30px] rounded-[30px] border-2 border-[#3B82F6]/20 md:p-8 p-8 flex flex-col justify-between items-center">
						<div className="rounded-[16px] w-20 min-w-20 h-20 min-h-20 flex justify-center items-center bg-[linear-gradient(135deg,#A855F7_0%,#6366F1_100%)]">
							<Image src={'/icons/premium.svg'} width={42} height={42} alt="premium" className="w-8 h-8" />
						</div>
						<div className="w-full flex justify-center items-center md:gap-2">
							<h6 className="font-bold text-[24px] text-center text-main-foreground md:mt-2 mt-2">Go Pro</h6>
							<div className="text-[12px] text-main-light font-bold text-center outline outline-light/20 md:px-2 rounded-full">
								Beta
							</div>
						</div>
						<h4 className="w-full text-center text-main-foreground">
							<span className="text-[50px] font-extrabold">$9.99</span>/month
						</h4>

						<div className="w-full flex flex-col md:gap-2.5 gap-2.5 md:mt-5 mt-5 justify-center items-start">
							<div className="flex justify-center items-center md:gap-2 gap-2">
								<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
								<span className="text-main-foreground text-center">All 2D & 3D features</span>
							</div>
							<div className="flex justify-center items-center md:gap-2 gap-2">
								<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
								<span className="text-main-foreground text-center">No Watermarks</span>
							</div>
							<div className="flex justify-center items-center md:gap-2 gap-2">
								<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
								<span className="text-main-foreground text-center">HD Images exports</span>
							</div>
							<div className="flex justify-center items-center md:gap-2 gap-2">
								<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
								<span className="text-main-foreground text-center">4K rendering Video</span>
							</div>
							<div className="flex justify-center items-center md:gap-2 gap-2">
								<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
								<span className="text-main-foreground text-center">Unlimited Downloads</span>
							</div>
						</div>

						<Link
							href={'/studio/upgrade/premium-checkout'}
							className="w-full flex justify-center items-center bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white font-medium rounded-[12px] md:p-4 p-4 md:gap-2.5 md:mt-5 mt-5 hover:scale-105 transition-all duration-300 ease-in-out"
						>
							UPGRADE
						</Link>
					</div>
				</div>

				<span className="text-main-foreground text-center md:mt-20 mt-10">
					All plans include our core features. Upgrade anytime, cancel anytime.
				</span>

				<div className="flex sm:flex-row flex-col justify-center items-center md:gap-5 gap-5 md:mt-5 mt-5">
					<div className="text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full">
						<Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
						<span className="text-center">30-day money back guarantee</span>
					</div>
					<div className="text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full">
						<Image src={'/icons/instant.svg'} width={20} height={20} alt="instant" />
						<span className="text-center">Instant activation</span>
					</div>
				</div>
			</section>

			<section className="w-full max-w-[1440px] h-full flex flex-col items-center justify-start md:px-20 px-2.5 md:mt-40 mt-20">
				<div className="flex flex-col justify-center items-center w-full md:gap-5">
					<div className="text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm md:h-[38px] h-[38px] md:px-4 px-4 flex justify-center items-center md:gap-2 gap-2 rounded-full">
						<span className="text-center">🙌 WHY CREATORS LOVE &quot;FIRSTOX STUDIO&quot;</span>
					</div>
					<h2 className="text-main-foreground text-center font-extrabold sm:text-[48px] text-[24px] mt-5">
						Designers Speak as{' '}
						<span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
							Results Show
						</span>
					</h2>
				</div>
				<div className="flex flex-col md:gap-5 justify-start items-center w-full md:px-10 md:mt-20">
					<Testimonials />
					<div className="flex flex-wrap gap-4 justify-center">
						<div className="w-full sm:w-[300px] p-4 border rounded-xl shadow-sm">
							<div className="text-yellow-500 mb-2">★★★★★</div>
							<p className="text-sm">
								It feels like having a full photography studio in my browser. The 3D realism is unbelievable.
							</p>
							<p className="mt-4 font-semibold">— Riya M.</p>
							<p className="text-xs text-gray-500">Streetwear Brand Owner</p>
						</div>

						<div className="w-full sm:w-[300px] p-4 border rounded-xl shadow-sm">
							<div className="text-yellow-500 mb-2">★★★★★</div>
							<p className="text-sm">Saved me thousands on photo shoots. I can now launch products faster and smarter.</p>
							<p className="mt-4 font-semibold">— Sneha B.</p>
							<p className="text-xs text-gray-500">Etsy Seller</p>
						</div>

						<div className="w-full sm:w-[300px] p-4 border rounded-xl shadow-sm">
							<div className="text-yellow-500 mb-2">★★★★★</div>
							<p className="text-sm">The 2D mockups look better than some real photos I&apos;ve paid for.</p>
							<p className="mt-4 font-semibold">— Kirti K.</p>
							<p className="text-xs text-gray-500">Freelance Graphic Designer</p>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full max-w-[1440px] h-full flex flex-col items-center justify-start md:px-20 px-2.5 md:mt-40 mt-20">
				<div className="flex flex-col justify-center items-center w-full md:gap-5">
					<div className="flex justify-center items-center gap-4 text-main-foreground text-center font-extrabold text-[48px]">
						<div className="rounded-[16px] w-12 min-w-12 h-12 min-h-12 flex justify-center items-center bg-[linear-gradient(135deg,#2563EB_0%,#9333EA_100%)]">
							<Image src={'/icons/support-white.svg'} width={32} height={32} alt="fashion brands" className="w-6 h-6" />
						</div>
						<span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
							FAQ&apos;s
						</span>
					</div>
				</div>
				<div className="flex flex-col md:gap-5 justify-start items-center w-full md:px-10 mt-10 md:mt-20">
					<div className="flex flex-col flex-wrap md:gap-2 justify-center items-start w-full">
						{contents.qna.map((qa, index) => (
							<QNAElement key={index} question={qa.question} answer={qa.answer} />
						))}
					</div>
				</div>
			</section>

			<StatsPage />
			<ReferHome />
		</main>
	);
}
