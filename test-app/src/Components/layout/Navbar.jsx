import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import Typography from '@mui/material/Typography';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Avatar from '@mui/material/Avatar';

import "./Header.css"
export default function Navbar() {
	return (

		<div className="fullSide">
			<div className="left_side">
				<ul  >
					<IconButton>< SettingsIcon /></IconButton>
					<NavLink to="/config" style={({ isActive }) => { return { backgroundColor: isActive ? "red" : "", margin: "10px" } }}>Configure Product</NavLink>
					<IconButton><EditIcon /></IconButton>
					<NavLink to="/about" style={({ isActive }) => { return { backgroundColor: isActive ? "red" : "", margin: "10px" } }}>Edit</NavLink>

				</ul>
			</div>
			<div className="right_side">
				<IconButton><AddAlertIcon /></IconButton>
				<IconButton><AccountTreeIcon /></IconButton>
				<div className="text">
					<Typography style={{ display: "flex", alignItems: "center", color: "gray" }}>Ahsan iqbal</Typography>
					<Typography>Admin</Typography>
				</div>
				<Avatar style={{ marginLeft: "10px" }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
			</div>
		</div>
	)
}



































































