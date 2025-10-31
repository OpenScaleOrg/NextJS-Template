import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, lastModified: new Date() },
		{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/signin`, lastModified: new Date() },
		{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/signup`, lastModified: new Date() },
		// { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`, lastModified: new Date() },
	];
};

export default sitemap;
