import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Img from "../Image/img2.jpg"
import Technology from './Technology';
import About from './About';

function Home() {

  const cardStyle = {
    backgroundImage: `url(${Img})`,
    backgroundSize: 'cover', // You can adjust these styles as needed
    // backgroundPosition: 'center',
    // width: '100%', // Set the width to 100% if you want it to cover the entire Card
    // height: '100%', // Set the height to 100% if you want it to cover the entire Card
  };
  return (
    <>
     <div className='h-screen w-full bg-zinc-200'>
      <div className='pt-24'>
      <Grid container spacing={2}>
       <Grid item xs={12} lg={6}>
        <Typography>hIII</Typography>
       </Grid>
       <Grid item xs={12} lg={6}>
        <Card className='h-98' style={cardStyle}>
          
        </Card>
       </Grid>
      </Grid>
      </div>
    </div>
    <Technology/>
    <About/>
    </>
   
  )
}

export default Home