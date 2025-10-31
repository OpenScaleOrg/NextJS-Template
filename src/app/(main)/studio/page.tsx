import Footer from '@/components/Footer';
import NavbarStudio from '@/components/NavbarStudio';
import StatsPage from '@/components/StatsPage';
import StudioSidebar from '@/components/StudioSidebar';
import { models2D, models3D } from '@/lib/data/models';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Studio = async () => {
	const cookiesData = await cookies();

	const token = cookiesData.get('token')?.value;

	if (!token) {
		redirect('/signin');
	}

	const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/get-user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ token }),
	});

	if (!userResponse.ok) {
		redirect('/signin');
	}

	const user = await userResponse.json();

	return (
		<>
			<NavbarStudio user={user} />
			<div className="mt-[60px] md:mt-[80px] md:min-h-[calc(100vh-80px)] h-full text-black">
				<div className="w-full h-full flex flex-col items-center justify-start">
					<main className="w-full flex flex-col items-center justify-start">
						<div className="w-full flex justify-center items-start h-[calc(100vh-80px)]">
							<div className="md:flex hidden">
								<StudioSidebar index={0} user={user} />
							</div>

							<div className="flex justify-start items-start w-full h-full md:pl-[260px]">
								<div className="w-full flex flex-col justify-start items-center md:px-5 px-2.5 md:py-5 py-5 md:gap-5 gap-5">
									<div className="w-full flex text-main-foreground md:text-[20px] text-[16px] font-bold">
										✨ Quick Actions Panel
									</div>

									<div className="w-full flex lg:flex-row flex-col justify-start items-start md:gap-5 gap-5">
										<div className="w-full flex flex-col justify-start items-center md:gap-5 gap-4 md:p-6 p-4 bg-main-foreground/5 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
											<div className="w-full flex justify-between items-center">
												<span className="font-bold text-[18px] text-main-foreground">Customize 3D Mockup</span>
												<Image src={'/icons/threeD.svg'} width={20} height={20} alt={'3D'} />
											</div>
											<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
												{(Object.keys(models3D) as Array<keyof Models3D>).map((key, index) => (
													<Link
														href={models3D[key].url}
														key={index}
														className="w-full aspect-[4/5] flex flex-col justify-between items-center overflow-hidden bg-main-background rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]"
													>
														<div className="w-full flex-1 relative">
															<Image
																src={models3D[key].img}
																fill
																alt={'3D'}
																draggable={false}
																className="object-cover pointer-events-none"
															/>
														</div>
														<div className="w-full h-[40px] text-[14px] font-bold flex justify-center items-center text-main-foreground dark:text-main-background bg-white">
															<span>{models3D[key].name}</span>
														</div>
													</Link>
												))}
											</div>
										</div>
										<div className="w-full flex flex-col justify-start items-center md:gap-5 gap-5 md:p-6 p-4 bg-main-foreground/5 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
											<div className="w-full flex justify-between items-center">
												<div className="flex items-center gap-2">
													<span className="font-bold text-[18px] text-main-foreground">Customize 2D Mockup</span>
													<div className="text-[12px] text-main-light font-bold text-center outline outline-light/20 md:px-2 rounded-full">
														Coming Soon
													</div>
												</div>
												<Image src={'/icons/twoD.svg'} width={20} height={20} alt={'2D'} />
											</div>

											<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
												{(Object.keys(models2D) as Array<keyof Models2D>).map((key, index) => (
													<Link
														href={models2D[key].url}
														key={index}
														className="w-full aspect-[4/5] flex flex-col justify-between items-center overflow-hidden bg-main-background rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]"
													>
														<div className="w-full flex-1 relative">
															<Image
																src={models2D[key].img}
																fill
																alt={'2D'}
																draggable={false}
																className="object-cover pointer-events-none"
															/>
														</div>
														<div className="w-full h-[40px] text-[14px] font-bold flex justify-center items-center text-main-foreground dark:text-main-background bg-white">
															<span>{models2D[key].name}</span>
														</div>
													</Link>
												))}
											</div>

											<Link
												href={models2D.flatLayStyle.url}
												className="w-full border-green-300 border text-main-foreground bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] dark:bg-main-foreground/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm rounded-md md:py-3 py-2 md:px-6 px-3 flex justify-center items-center md:gap-2 gap-2"
											>
												<span className="text-[12px]">Load More</span>
											</Link>
										</div>
									</div>
									<Footer />
								</div>
							</div>
						</div>
						<StatsPage />
					</main>
				</div>
			</div>
		</>
	);
};

export default Studio;
