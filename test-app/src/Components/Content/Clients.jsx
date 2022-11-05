import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Content.css"
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const bull = (
	<Box
		component="span"
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>

	</Box>
);

export default function BasicCard() {
	return (
		<Card sx={{ 
			}}>
			<CardContent>
				<div style = {{padding:"10 0"}}>

					<div className="main_header">
						<div>
							<Typography>Register Clients</Typography>
						</div>

						<div>
							<Typography style={{ color: "red" }}>View All</Typography>
						</div>
					</div>

					<div className="both_wrap">
						<div className="right_side-wrap">
							<div className="type_wrap">
								<div>
									<IconButton>
										<Avatar
											alt="Remy Sharp"
											src="/static/images/avatar/1.jpg"
											sx={{ width: 30, height: 30 }}
										/>
									</IconButton>
								</div>

								<div>
									<Typography>Jrome Bell</Typography>
									<Typography>Jorden Crown</Typography>
								</div>
							</div>



							<div className="type_wrap">
								<div>
									<IconButton>
										<Avatar
											alt="Remy Sharp"
											src="/static/images/avatar/1.jpg"
											sx={{ width: 30, height: 30 }}
										/>
									</IconButton>
								</div>

								<div>
									<Typography>Jrome Bell</Typography>
									<Typography>Jorden Crown</Typography>
								</div>
							</div>




							<div className="type_wrap">
								<div>
									<IconButton>
										<Avatar
											alt="Remy Sharp"
											src="/static/images/avatar/1.jpg"
											sx={{ width: 30, height: 30 }}
										/>
									</IconButton>
								</div>

								<div>
									<Typography>Jrome Bell</Typography>
									<Typography>Jorden Crown</Typography>
								</div>
							</div>
						</div>





						<div className="left_wrap">
							<div>
								<IconButton>
									<UploadFileIcon />
								</IconButton>
							</div>


							<div>
								<IconButton>
									<UploadFileIcon />
								</IconButton>
							</div>



							<div>
								<IconButton>
									<UploadFileIcon />
								</IconButton>
							</div>
						</div>
					</div>


				</div>









			</CardContent>
		</Card>
	);
}