import type { Metadata } from 'next';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { inter, poppins, plusJakartaSans } from '@/lib/data/fonts';
import InitializeTheme from '@/components/InitializeTheme';

export const metadata: Metadata = {
	title: 'Firstox Studio',
	description:
		'FirstOx Studio - 4K Apparel Mockups for Clothing Brands. No Blender. No Photoshop. No photoshoots. Instantly create 3D mockups of T-shirts, hoodies, pants, caps, and beanies, plus ultra-realistic 2D mockups—all in 4K, right from your browser.',
	keywords: [
		'Firstox',
		'Studio',
		'Firstox Studio',
		'Firstoxstudio',
		'3d',
		'3d mockups',
		'2d',
		'apparel',
		'apparel mockups',
		'2d mockups',
		'create 3D hoodie video',
		'high-resolution t-shirt mockup generator',
		'online cap design visualizer',
		'professional apparel mockups no software',
		'virtual clothing photography studio',
		'instant mockup generator for designers',
		'e-commerce photography alternative',
		'apparel design workflow automation',
		'on-demand fashion rendering',
		'digital sample creation tool',
		'3D fabric simulation',
		'online cinematic fashion animation',
		'4K mockup creator',
		'realistic clothing rendering online',
		'dynamic apparel visualization',
		'3D rendering alternative to Blender',
		'fast mockup tool for designers',
		'create clothing mockups without Photoshop',
		'on-demand clothing mockup generator',
		'how to make t-shirt mockups for e-commerce',
		'digital fashion design tools for startups',
		'e-commerce apparel mockup creator',
		'clothing brand visualizer for Shopify',
		'digital garment rendering for designers',
		'virtual t-shirt designer for brands',
		'best online mockup generator',
		't-shirt mockup generator for brands',
		'realistic hoodie mockup software',
		'apparel mockup subscription',
		'clothing design visualizer pricing',
		'fashion designer mockup tool',
		'e-commerce product mockups',
		'brand mockups for clothing',
		'3D virtual fitting',
		'mockup without photoshop',
		'instant 3D render online',
		'no download mockup software',
		'easy clothing mockups for brands',
		'3D design for print on demand',
		'online 3D mockup maker',
		'apparel mockup generator',
		'realistic clothing mockups',
		'3D t-shirt creator',
		'digital garment visualization',
		't-shirt design mockup without photoshop',
		'online 3D render tool',
		'mockup software alternative',
		'quick t-shirt mockup render',
		'professional 3D clothing mockups',
		'no blender t-shirt mockup',
		'photoshop alternative for mockups',
		'easy 3D apparel mockups',
		'create clothing mockups online',
		'instant clothing mockups',
		'online mockup generator',
		'3D t-shirt mockup',
		'online hoodie mockup generator',
		'3D apparel mockup tool',
		'cap mockup generator',
	],
	// authors: [
	//   { name: "John Doe", url: "https://example.com" },
	//   { name: "John Doe", url: "https://example.com" },
	//   { name: "John Doe", url: "https://example.com" },
	// ],
	applicationName: 'Firstox Studio',
	generator: 'Next.js',
	creator: 'Firstox Studio',
	publisher: 'Firstox Studio',

	// // 🌍 Open Graph (OG) - Social Media Sharing
	// openGraph: {
	//   title: "Ascentt Enterprise AI Solutions | AI-Driven Digital Transformation Solutions",
	//   description: "FirstOx Studio - 4K Apparel Mockups for Clothing Brands. No Blender. No Photoshop. No photoshoots. Instantly create 3D mockups of T-shirts, hoodies, pants, caps, and beanies, plus ultra-realistic 2D mockups—all in 4K, right from your browser.",
	//   url: process.env.NEXT_PUBLIC_BASE_URL,
	//   siteName: "Firstox Studio",
	//   images: [
	//     {
	//       url: process.env.NEXT_PUBLIC_BASE_URL + "/images/og-image.png",
	//       width: 1200,
	//       height: 630,
	//       alt: "Firstox Studio",
	//     },
	//   ],
	//   locale: "en_US",
	//   type: "article",
	// },

	// 🐦 Twitter Card
	// twitter: {
	//   card: "summary_large_image",
	//   title: "Firstox Studio",
	//   description: "FirstOx Studio - 4K Apparel Mockups for Clothing Brands. No Blender. No Photoshop. No photoshoots. Instantly create 3D mockups of T-shirts, hoodies, pants, caps, and beanies, plus ultra-realistic 2D mockups—all in 4K, right from your browser.",
	//   // site: website.TWITTER,
	//   // creator: website.TWITTER,
	//   site: '',
	//   creator: '',
	//   images: [process.env.NEXT_PUBLIC_BASE_URL + "/images/og-image.png"],
	// },

	// 📱 Mobile & Browser Settings
	robots: 'index, follow', // or "noindex, nofollow"

	// 📜 Canonical URL
	//   alternates: {
	//     canonical: "https://example.com/blog/my-first-post",
	//     languages: {
	//       "en-US": "https://example.com/en/blog/my-first-post",
	//       "es-ES": "https://example.com/es/blog/my-first-post",
	//     },
	//   },

	// 🔗 Icons & App Links
	// icons: {
	//   icon: "/favicon.ico",
	//   shortcut: "/shortcut-icon.png",
	//   apple: "/apple-touch-icon.png",
	// },

	// 🏠 App Manifest
	//manifest: "/site.webmanifest",

	// 🛡️ Security & Referrer
	referrer: 'no-referrer-when-downgrade',
	formatDetection: {
		telephone: false,
		address: false,
		email: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<InitializeTheme />
			</head>
			<body className={`${poppins.variable} ${inter.variable} ${plusJakartaSans.variable} antialiased`}>
				{/* <StateProvider>
          <AuthContextProvider> */}
				<Navbar />
				<div className="mt-[80px] md:mt-[80px] text-main-foreground">{children}</div>
				<Footer />
				{/* <Spinner/> */}
				{/* </AuthContextProvider>
        </StateProvider> */}
			</body>
		</html>
	);
}
