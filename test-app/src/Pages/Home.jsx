import React from 'react';
import ListOrders from '../Components/Content/ListOrders';
import Orders from '../Components/Content/Orders';
import Sales from '../Components/Content/Sales';
import Clients from '../Components/Content/Clients';
import { LineChart } from '../Components/Content/LineChart';
import Typography from '@mui/material/Typography';




export default function Home() {
	return (
		<>
			<div className='home-container'>
				{/* <div>
					<Typography style = {{color:"black",display:"flex"}}>Metrics Area</Typography>
					</div> */}

				<div  className  = "combine" style={{flex: 1 }}>
					<div>
					<LineChart  />
					</div>
					<div style = {{marginLeft:"50px"}}><Orders /></div>
					
				</div>
				<div className  = "combine" style={{flex: 1 }}>
					<Sales/>
					<div style = {{marginRight:"100px"}}>
						<Clients/>
					</div>
					
				</div>
			</div>
			<ListOrders />
		</>
	)
}
