import React from 'react'
import { Button,Stack,IconButton,ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const Buttons = () => {
  return (<>
  {/* button */}
    <Stack spacing={2} direction={'row'}>

      <Button variant='text' href='https://google.com'>Text</Button>
      <Button variant='contained'>contained</Button>
      <Button  variant='outlined'>outlined</Button>
      <Button variant='contained' color='primary'>primary</Button>
      <Button variant='outlined' color='secondary'>secondary</Button>
      <Button variant='contained' color='error'> error</Button>
      <Button variant='contained' color='success'>success</Button>
    </Stack>
   <Stack spacing={12} direction={'row'}>
    <Button variant='contained' size='small' color='info'>hello</Button>
    <Button variant='contained' size='large'>hii</Button>
   </Stack> 
   <Stack spacing={4} direction={'row'}>
   <Button variant='contained' startIcon={<SendIcon/>}>send</Button>
   <Button variant='contained' disableElevation disableRipple onClick={()=>alert('star')} endIcon={<SendIcon/>}>send</Button>
   <IconButton color='error' size='small'><SendIcon/></IconButton>
   </Stack>


  {/* group button  */}
    <ButtonGroup variant='contained' orientation='vertical' size='small' color='error'>
         <Button >Left</Button>
         <Button >center</Button> 
         <Button >Right</Button>
         </ButtonGroup>
 
   </>
  )
}

export default Buttons

