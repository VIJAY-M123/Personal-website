import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Technology from './Technology';
import About from './About';
import Profile from "../Image/Profile.png";
import backgroundImage from '../Image/backgroundImage.jpg';
import Service from './Service';
//import bg from "../Image/img2.jpg"

function Home() {

  
  return (
    <>
     <div className='h-auto w-full bg-zinc-200 md:h-screen'>
      <div className='pt-24 w-full h-[350px]' style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>
      </div>
      <div className='pl-10 pr-10 lg:pl-24 lg:pr-24'>
      <Grid container spacing={4}>
      <Grid item xs={12} lg={4} xl={3}>
        <Card className='mt-[-74px] lg:mt-[-44px] flex items-center flex-col p-8'>
         
          <div className='h-36 w-36 mt-[-100px] absolute'>
           <img src={Profile} alt='profile.png' className='rounded-full'/>
          </div>
          <Typography sx={{marginTop:"60px",fontWeight:"bold",fontSize:"30px"}}>Vijayaraj M</Typography>
          <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"15px"}}>B-TECH(IT)</Typography>
          <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"15px"}}>Senior Software Developer</Typography>
          <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"15px"}}>Aggrandize Venture Pvt Ltd</Typography>
          {/* <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"15px"}}>Vijayaraj </Typography> */}
        </Card>
       </Grid>
       <Grid item xs={12} lg={8} xl={9} className=''> 
       {/* <Card className='h-[300px] w-full'  style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>

       </Card> */}
       <div className='flex flex-col items-start justify-center'>
        <h2 className='text-[40px]'>Hii...</h2>
        <p className='text-[20px] font-normal'>I'm a software engineer with expertise designing 
          Web Applications and Mobile Apps using JavaScript/ReactJs/React Native/NodeJs, 
          as well as several other great libraries and frameworks.</p>
       </div>
       </Grid>
      
      </Grid>
      </div>
      
    </div>
    <Service/>
    <Technology/>
    <About/>
    </>
   
  )
}

export default Home