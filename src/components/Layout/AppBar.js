import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTheme } from '@mui/system';
import { useRouter } from 'next/router';

let pages = ['Blueprint Editor'];

const ResponsiveAppBar = ({ appName, ...other }) => {
	const theme = useTheme();
	const router = useRouter();

	if (other.pages) {
		pages = other.pages;
	}

	return (
		<AppBar position={other?.position ?? 'fixed'} {...other}>
			<Toolbar disableGutters>
				{appName ? (
					<>
						<AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							{appName}
						</Typography>
					</>
				) : null}
				<Box sx={{ flexGrow: 0, display: { md: 'flex' } }}>
					{pages.map(page => (
						<Button key={page} sx={{ my: 2, color: 'white', display: 'block', mr: 2, ml: 1 }} variant="outlined" color="info">
							{page}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};
export default ResponsiveAppBar;
