import React from 'react'
import { Stack,TextField } from '@mui/material'
const Textfield = () => {
  return (
    <div>
      <Stack>
        <Stack direction={'row'} spacing={4} t>
         <TextField   label='name'/>
         <TextField  variant='outlined'  label='e'/>
         <TextField  variant='standard'  label='namse'/>
         <TextField  variant='filled' label='namee'/>
        

        </Stack>
      </Stack>
    </div>
  )
}

export default Textfield
