import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { IconButton } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';


import "./Content.css";

export default function Sales() {
	return (

		<div className="card">
			<div className="cardone">
				<div style={{ margin: "10px" }}>
					<Card sx={{
						minWidth: 300, display: "flex", justifyContent: "center",
						border: "1px solid white",
						height: "140px",
						color: "white"

					}}>
						<CardContent>
							<div className="main_wrap">

								<div className="card-wrap">
									<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
										Sales Amount(Units)
									</Typography>

									<Typography sx={{ mb: 1.5 }} color="text.secondary">
										0.2%
									</Typography>

									<Typography sx={{ mb: 1.5, color: "red", fontSize: "24px" }} color="text.secondary">
										80K
									</Typography>
								</div>


								<div className="icon-Wrap">
									<IconButton><TimelineIcon style={{
										
										color: "red "
									}} /></IconButton>
								</div>
							</div>



						</CardContent>

					</Card>
				</div>




			</div>

			<div className="cardone">
				<div style={{ margin: "10px" }}>
					<Card sx={{
						minWidth: 300, display: "flex", justifyContent: "center",
						border: "1px solid white",
						height: "140px"
					}}>
						<CardContent>
							<div className="main_wrap">

								<div className="card-wrap">
									<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
										Orders in Dollar
									</Typography>

									<Typography sx={{ mb: 1.5 }} color="text.secondary">
										0.2%
									</Typography>

									<Typography sx={{ mb: 1.5, color: "red", fontSize: "24px" }} color="text.secondary">
										$ 31,00
									</Typography>
								</div>


								<div className="icon-Wrap">
									<IconButton><MoneyOffIcon style={{
										color: "red"
									}} /></IconButton>
								</div>
							</div>

						</CardContent>

					</Card>
				</div>





			</div>

		</div>
	)
}
