import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';
import { Leva } from 'leva';
import MenuAppBar from '../components/Layout/AppBar';
import '../styles/global.css';

function SafeHydrate({ children }) {
	return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

function MyApp({ Component, pageProps }) {
	return (
		<SafeHydrate>
			<div sx={{ marginTop: 0 }}>
				<MenuAppBar />
				<Component {...pageProps} />
			</div>
		</SafeHydrate>
	);
}

export default MyApp;
