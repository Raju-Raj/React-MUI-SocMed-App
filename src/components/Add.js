
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled,TextField,Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:'center',
    justifyContent:"center"
})
const UserBox=styled(Box)({
    display:"flex",
    alignItems:'center',
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
      <Tooltip 
      title="Add" 
      sx={{position:'fixed',bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}
      onClick={(e)=>setOpen(true)}
      >
      <Fab color="primary" aria-label="add">
         <AddIcon />
     </Fab>
     </Tooltip>
     <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        width={400} 
        height={280} 
        bgcolor={"background.default"} 
        color={"text.primary"} 
        p={3} 
        borderRadius={3}
        >
            <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
               <Avatar
                  sx={{width:30,height:30}}
                  src="https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&fit=crop"
                />
                <Typography fontWeight={500} variant="span">Jack Ma</Typography>
            </UserBox>
         <TextField
             sx={{width:"100%"}}
             id="standard-multiline-static"
             multiline
             rows={4}
             placeholder="What's on your mind"
             variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary'/>
            <ImageIcon color="secondary"/>
            <VideoCameraBackIcon color="success"/>
            <PersonAddIcon color='error'/>
        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button
            sx={{width:'100px'}}
            >
                <DateRangeIcon/>
            </Button>
        </ButtonGroup>
       </Box>
     </StyledModal>
    </>
  )
}

export default Add
