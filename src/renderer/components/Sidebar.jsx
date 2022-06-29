import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

export default function Sidebar() {
	return (
		<>
			<ListItemButton component={Link} to="/">
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
			<ListItemButton component={Link} to="/scripts">
				<ListItemIcon>
					<WallpaperIcon />
				</ListItemIcon>
				<ListItemText primary="My Scripts" />
			</ListItemButton>
			<ListItemButton component={Link} to="/editor">
				<ListItemIcon>
					<WallpaperIcon />
				</ListItemIcon>
				<ListItemText primary="Blueprint Editor" />
			</ListItemButton>
		</>
	);
}
