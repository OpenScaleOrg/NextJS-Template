'use client';
import { Brightness4 } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		// On page load, set theme based on localStorage or prefers-color-scheme
		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initialTheme = storedTheme === 'dark' || (!storedTheme && prefersDark) ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark', initialTheme === 'dark');
		setTheme(initialTheme);
	}, []);

	const toggleTheme = () => {
		const html = document.documentElement;
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		html.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	return (
		<button type="button" title="switch theme" onClick={toggleTheme} className="cursor-pointer">
			<Brightness4 />
		</button>
	);
};

export default ThemeToggleButton;
