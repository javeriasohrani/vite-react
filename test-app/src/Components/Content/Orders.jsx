import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { IconButton } from '@mui/material';

import "./Content.css";

export default function Orders() {
  return (
    <div className="cards">
      <div className="card-box">
        <div >
          <Card sx={{
            minWidth: 300, display: "flex", justifyContent: "center",
            border: "1px solid white",
            height: "140px",
            margin:"10px"

          }}>
            <CardContent>
              <IconButton><AssignmentIcon style={{
                backgroundColor: "red",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                color: "white"
              }} /></IconButton>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Draft orders
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                14
              </Typography>
              <Typography variant="body2">

              </Typography>
            </CardContent>

          </Card>
        </div>

        <div>
          <Card sx={{
            minWidth: 300, display: "flex", justifyContent: "center",
            border: "1px solid white",
            height: "140px", color: "white",margin:"10px"
          }}>
            <CardContent>
              <IconButton ><AssignmentIcon style={{
                backgroundColor: "red",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                color: "white",

              }} /></IconButton>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                No customers
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                152
              </Typography>
              <Typography variant="body2">

              </Typography>
            </CardContent>

          </Card>
        </div>
      </div>

      <div className="card-box">
        <div>
          <Card sx={{
            minWidth: 300, display: "flex", justifyContent: "center",
            border: "1px solid white",
            height: "140px",
            margin:"10px"
          }}>
            <CardContent>
              <IconButton><AssignmentIcon style={{
                backgroundColor: "red",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                color: "white"
              }} /></IconButton>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Other Metrics
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                57
              </Typography>
              <Typography variant="body2">

              </Typography>
            </CardContent>

          </Card>
        </div>

        <div>
          <Card sx={{
            minWidth: 300, display: "flex", justifyContent: "center",
            border: "1px solid white",
            height: "140px",
            margin:"10px"
          }}>
            <CardContent>
              <IconButton><AssignmentIcon style={{
                backgroundColor: "red",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                color: "white"
              }} /></IconButton>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Order closed
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                40
              </Typography>
              <Typography variant="body2">

              </Typography>
            </CardContent>

          </Card>
        </div>



      </div>

    </div>
  )
}
