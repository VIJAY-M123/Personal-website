import { Grid,Card} from '@mui/material'
import React from 'react'

import img1 from "../Image/life_at_prowesstics_9.jpg"
import img2 from "../Image/life_at_prowesstics_12.jpg"
import img3 from "../Image/life_at_prowesstics_17.jpg"
import img4 from "../Image/life_at_prowesstics_28.jpg"
import img5 from "../Image/life_at_prowesstics_36.jpg"


const Images = [
  {
    img:img1
  },
  {
    img:img2
  },
  {
    img:img3
  },
  {
    img:img4
  },
  {
    img:img5
  },
]

function Image() {
  return (
    <div className='pt-24 pr-5 pl-5'>
      <Grid container spacing={2}>
        {
          Images.map((item, index)=>(
            <Grid item xs={12} lg={4} key={index}>
            <Card
            className='h-[300px] w-full' style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}/>
  
            
          </Grid>
          ))
        }
       

      </Grid>
    </div>
  )
}

export default Image