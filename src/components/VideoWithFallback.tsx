'use client';
import Image from 'next/image';
import { useState } from 'react';

const VideoWithFallback = ({ videoSrc, fallbackSrc }: { videoSrc: string; fallbackSrc: string }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className="relative w-full sm:h-[360px] h-[250px] rounded-[24px] overflow-hidden">
			{/* Fallback Image */}
			{!isLoaded && <Image src={fallbackSrc} alt="Fallback" fill className="object-cover" priority />}

			<video
				className="w-full sm:h-[360px] h-[250px] rounded-[24px] overflow-hidden object-cover pointer-events-none"
				src={videoSrc}
				autoPlay
				muted
				loop
				playsInline
				draggable={false}
				onLoadedData={() => setIsLoaded(true)}
			>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoWithFallback;
