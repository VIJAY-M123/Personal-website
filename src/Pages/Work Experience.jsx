import { Grid, Typography } from '@mui/material'
import React from 'react'
import img2 from "../Image/work2.png"
import Email from "../Image/Email.jpg";
import Call from "../Image/Call.jpg";
import CallCampaign from "../Image/CallCampaign.png";
import SocialCampaign from "../Image/SocialCampaign.png";
import Social from "../Image/Social.jpg";



function WorkExperience() {
  return (
    <div className='pt-24 pl-6 pr-6'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
                <Grid container spacing={2}>
                 <Grid item xs={12} md={6}>
                   <Typography variant='h4' sx={{fontWeight:"bold"}}>Email Campaign</Typography>
                   <p className='mt-5'>Our email marketing platform makes it easy for marketers in any type of business to send professional, engaging marketing emails.  From drag and drop editors to powerful automations and developer APIs, Mailchimp is built to help you sell more—no matter the complexity of your business.</p>
                   <img className='mt-3 rounded-[15px]' src={img2} height={600} width={600} alt='email.jpg'/>
                 </Grid>
                 <Grid item xs={12} md={6} className='flex justify-center'>
                   <img src={Email} height={550} width={550} alt='email.jpg'/>
                 </Grid>
                </Grid>
          </Grid>
          <Grid item xs={12} >
                <Grid container spacing={2}>
                <Grid item xs={12} md={6} className='flex justify-center'>
                   <img src={Call} height={550} width={550} alt='email.jpg'/>
                 </Grid>
                 <Grid item xs={12} md={6} >
                   <Typography variant='h4' sx={{fontWeight:"bold"}}>Call Campaign</Typography>
                   <p className='mt-5'>If your primary business goal is to get phone calls to your business, create call campaigns. Call campaigns allow you to focus on getting more calls straight from your ads. With these campaigns, you can use CPC bidding based on the value of a call to your business</p>
                   <img className='mt-3 rounded-[15px]' src={CallCampaign} height={600} width={600} alt='email.jpg'/>
                 </Grid>
                
                
                </Grid>
          </Grid>
          <Grid item xs={12} >
                <Grid container spacing={2}>
                
                 <Grid item xs={12} md={6} >
                   <Typography variant='h4' sx={{fontWeight:"bold"}}>Social Campaign</Typography>
                   <p className='mt-5'>A social media campaign is a coordinated marketing effort to reinforce or assist with a business goal using one or more social media platforms. Campaigns differ from everyday social media efforts because of their increased focus, targeting and measurability</p>
                   <img className='mt-3 rounded-[15px]' src={SocialCampaign} height={600} width={600} alt='email.jpg'/>
                 </Grid>
                 <Grid item xs={12} md={6} className='flex justify-center'>
                   <img src={Social} height={550} width={550} alt='email.jpg'/>
                 </Grid>
                
                </Grid>
          </Grid>
          

        </Grid>
        </div>
  )
}

export default WorkExperience