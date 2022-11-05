import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Content.css";
import Chip from '@mui/material/Chip';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.gray,
		color: theme.palette.common.black,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function ListOrders() {
	const [products, setProducts] = useState([
		{
			id: 1,
			Orders: "124",
			Quantity: "800",
			Products: "320",
			Amount: "45,600",
			btn: "Delivered"

		},
		{
			id: 2,
			Orders: "124",
			Quantity: "800",
			Products: "320",
			Amount: "45,600",
			btn: "Pending"

		},
		{
			id: 3,
			Orders: "124",
			Quantity: "800",
			Products: "320",
			Amount: "45,600",
			btn: "Delivered"

		},
		{
			id: 4,
			Orders: "124",
			Quantity: "800",
			Products: "320",
			Amount: "45,600",
			btn: "Pending"

		},
		{
			id: 5,
			Orders: "124",
			Quantity: "800",
			Products: "320",
			Amount: "45,600",
			btn: "Delivered"

		},
		{
			id: 6,
			Orders: "124",
			Quantity: "800",
			Products: "320",
			Amount: "45,600",
			btn: "Pending"

		}


	])



	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	return (
		<Container width="md">
			<div className="wrapped">
				<Typography variant="h6"  style = {{    marginLeft: "20px"}}gutterBottom>
					List of Orders
				</Typography>
				<div className = "tag">

					<Chip label="Tag" style = {{ marginLeft:"20px"}} variant="outlined" onClick={handleClick} />
					<Chip label="Division"style = {{ marginLeft:"20px"}} variant="outlined" onClick={handleClick} />
					<Chip label="Product G"  style = {{ marginLeft:"20px"}} variant="outlined" onClick={handleClick} />
					<Chip label="Compaign" style = {{ marginLeft:"20px"}} variant="outlined" onClick={handleClick} />

				</div>

				<div className="fullWrap">
					<TableContainer>
						<Table sx={{
							maxWidth: 800
						}} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>id</StyledTableCell>
									<StyledTableCell align="center"> Orders</StyledTableCell>
									<StyledTableCell align="center">Quantity</StyledTableCell>
									<StyledTableCell align="center">Products</StyledTableCell>
									<StyledTableCell align="center">Amount</StyledTableCell>
									<StyledTableCell align="center">Actions</StyledTableCell>

								</TableRow>
							</TableHead>
							<TableBody>
								{products.map((product) => (
									<StyledTableRow key={product.id}>
										<StyledTableCell align="center">{product.id}</StyledTableCell>
										<StyledTableCell align="center">
											{product.Orders}
										</StyledTableCell>
										<StyledTableCell align="center">{product.Quantity}</StyledTableCell>
										<StyledTableCell align="center">{product.Products}</StyledTableCell>
										<StyledTableCell align="center">{product.Amount}</StyledTableCell>
										<StyledTableCell align="center">{product.btn}</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>



				</div>



			</div>

		</Container>

	)
}

