import styled from '@emotion/styled';
import { Box, Container, ThemeProvider } from '@mui/material';
import { Leva } from 'leva';
import MenuAppBar from '../components/Layout/AppBar';
import '../styles/global.css';
import dynamic from 'next/dynamic';
import DarkTheme from '../components/Layout/DarkTheme';

function SafeHydrate({ children }) {
	return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

function MyApp({ Component, pageProps }) {
	return (
		<SafeHydrate>
			<ThemeProvider theme={DarkTheme}>
				<MenuAppBar appName="se-toolbox" />
				<Component {...pageProps} />
			</ThemeProvider>
		</SafeHydrate>
	);
}

export default MyApp;
