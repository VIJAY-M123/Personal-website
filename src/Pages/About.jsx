import { Grid, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div className='w-full h-[300px] bg-black text-white'>
        <Grid container spacing={2}>
           <Grid item xs={6}>
             <Typography>HIii</Typography>
           </Grid>
           <Grid item xs={6}>
             <Typography>HIii</Typography>
           </Grid>
        </Grid>
    </div>
  )
}

export default About