'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ContactButton = () => {
	const [active, setActive] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [spin, setSpin] = useState<boolean>(false);

	const handleContactClick = () => {
		setActive(true);
		document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
	};

	const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSpin(true);

		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/web-utils/contact-founder`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		});

		if (!response.ok) {
			setSpin(false);
			alert('Failed to send message. Please try again later.');
			return;
		}

		resetForm();
		alert('Message sent successfully!');
	};

	const resetForm = () => {
		setSpin(false);
		setActive(false);
		setName('');
		setEmail('');
		setMessage('');
		document.body.style.overflow = 'auto'; // Re-enable scrolling
	};

	const closeForm = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			resetForm();
		}
	};

	return (
		<>
			<button
				type="button"
				rel="canonical"
				className="cursor-pointer md:h-14 h-14 sm:w-[200px] w-full rounded-[10px] flex justify-center items-center text-main-foreground dark:bg-[#2F2F31] border-[2px] border-main-light/50 font-bold text-[16px] whitespace-nowrap"
				onClick={handleContactClick}
			>
				Contact the Founder
			</button>

			{active && (
				<div
					className="absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-main-background/50 backdrop-blur-sm flex justify-center items-center z-50"
					onClick={closeForm}
				>
					<form
						className="flex flex-col md:min-w-[448px] max-w-[448px] md:mx-0 mx-5 w-full rounded-[24px] items-center justify-center md:p-8 p-8 text-main-foreground shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] outline backdrop-blur-[2px]"
						onSubmit={(e) => sendMessage(e)}
					>
						<h2 className="font-bold text-[24px]">Message the Founder</h2>
						<span className="text-[14px] md:mt-2 mt-2">Reach out to us</span>

						<div className="relative w-full md:mt-5 mt-5">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<Image src={'/icons/user-grey.svg'} width={20} height={20} alt="instant" />
							</span>
							<input
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="p-[10px] pl-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] text-main-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
								placeholder="Name"
							/>
						</div>

						<div className="relative w-full md:mt-5 mt-5">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<Image src={'/icons/envelope-grey.svg'} width={20} height={20} alt="instant" />
							</span>
							<input
								id="email"
								type={'email'}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="p-2.5 pl-10 pr-10 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] text-main-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
								placeholder="Email address"
							/>
						</div>

						<div className="relative w-full md:mt-5 mt-5">
							<textarea
								id="message"
								rows={4}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								className="p-2.5 w-full bg-transparent border border-main-light/50 rounded-[10px] placeholder:text-main-light/70 placeholder:text-[14px] text-main-foreground focus:outline-none focus:ring-2 focus:ring-main-light/50 focus:border-main-light/50"
								placeholder="Message..."
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-[linear-gradient(90deg,#3B82F6_0%,#A855F7_100%)] p-2.5 bg-primary text-background rounded-[10px] md:mt-5 mt-5 text-[14px] font-medium flex justify-center items-center cursor-pointer"
						>
							{spin ? (
								<div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin"></div>
							) : (
								'Send Message'
							)}
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default ContactButton;
