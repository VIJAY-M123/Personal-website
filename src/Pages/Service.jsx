import { Grid, Typography,Card, CardContent } from '@mui/material'
import React from 'react'
import ServiveImage from "../Image/Service.jpg";
import DesktopMacTwoToneIcon from '@mui/icons-material/DesktopMacTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';
import { motion } from 'framer-motion';

function Service() {
  
  return (
    <div className='p-12' >
      
        <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
               <img src={ServiveImage} alt='logo.png' class='h-[500px]'/>
           </Grid>
           <Grid item xs={12} md={6} className='flex'>
               <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Card component={motion.div}  initial={{x:500}} animate={{x:0}} transition={{ duration: 0.9, bounceDamping: 0 }}>
                        <CardContent>
                        <div className='flex gap-6'>
                        <div className='flex items-center justify-center'>
                           <DesktopMacTwoToneIcon fontSize="large"/>
                        </div>
                        <div>
                            <div>
                                <Typography variant='h6' fontWeight="bold">Web Development</Typography>
                            </div>
                            <div>
                                <Typography variant='h9'>5 Projects</Typography>
                            </div>
                        </div>
                      </div>
                        </CardContent>
                  
                    </Card>
                     
                  </Grid>
                  <Grid item xs={12}>
                    <Card component={motion.div}    initial={{x:-500}} animate={{x:0}} transition={{ duration: 0.9, bounceDamping: 0 }}>
                        <CardContent>
                        <div className='flex gap-6'>
                        <div className='flex items-center justify-center'>
                           <PhoneAndroidTwoToneIcon fontSize="large"/>
                        </div>
                        <div>
                            <div>
                                <Typography variant='h6' fontWeight="bold">Mobile App Development</Typography>
                            </div>
                            <div>
                                <Typography variant='h9'>1 Projects</Typography>
                            </div>
                        </div>
                      </div>
                        </CardContent>
                  
                    </Card>
                     
                  </Grid>
                  <Grid item xs={12}>
                    <Card component={motion.div}   initial={{x:500}} animate={{x:0}} transition={{ duration: 0.9, bounceDamping: 0 }}>
                        <CardContent>
                        <div className='flex gap-6'>
                        <div className='flex items-center justify-center'>
                           <DnsTwoToneIcon fontSize="large"/>
                        </div>
                        <div>
                            <div>
                                <Typography variant='h6' fontWeight="bold">Backend Development</Typography>
                            </div>
                            <div>
                                <Typography variant='h9'>1 Projects</Typography>
                            </div>
                        </div>
                      </div>
                        </CardContent>
                  
                    </Card>
                     
                  </Grid>
               </Grid>
           </Grid>
        </Grid>
    </div>
  )
}

export default Service