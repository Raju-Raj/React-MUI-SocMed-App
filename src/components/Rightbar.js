import { Box,Typography,AvatarGroup,Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{ display:{xs:"none",sm:"block"} }}>
      <Box position="fixed" width={300} >
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
           <Avatar
            alt="Elon Musk"
             src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" 
             />
           <Avatar
            alt="Mark Zuckerberg"
             src="https://media.wired.com/photos/592676467034dc5f91beb80e/master/pass/MarkZuckerberg.jpg"
              />
           <Avatar
            alt="Jeff Bezos" 
            src="https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg" 
           />
           <Avatar
            alt="Bill Gates" 
            src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg" 
            />
           <Avatar 
           alt="Tim Cook"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg"
             />
             <Avatar
            alt="Sundar pichai" 
            src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" 
            />
            <Avatar
            alt="Sathya nadella" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/1200px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg" 
            />
            <Avatar
            alt="Sundar pichai" 
            src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" 
            />
            <Avatar
            alt="Sathya nadella" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/1200px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg" 
            />
       </AvatarGroup>
       <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
       </Typography>

       <ImageList cols={3} rowHeight={100} gap={5}>
         <ImageListItem>
         <img
           src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://upload.wikimedia.org/wikipedia/commons/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg"
           alt=''
         />
         </ImageListItem>

         {/* <ImageListItem>
         <img
           src="https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://images.news18.com/ibnlive/uploads/2021/10/studio_project-19-14-16340382823x2.jpeg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://m.economictimes.com/thumb/msid-89965794,width-1200,height-900,resizemode-4,imgsize-54784/ratan-tata.jpg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://imageio.forbes.com/specials-images/dam/imageserve/261687ed25274b40a31d29f7d0dc37e5/0x0.jpg?format=jpg&width=1200"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://c.ndtvimg.com/2021-11/g09pdd7k_parag-agrawal-afp_625x300_30_November_21.jpg"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://www.coca-colacompany.com/content/dam/journey/us/en/bios/profile/james-quincey-coca-cola-company.png"
           alt=''
         />
         </ImageListItem>

         <ImageListItem>
         <img
           src="https://cdn.vox-cdn.com/thumbor/ElnzjjbS376s3BFUCnFrsyjBArA=/0x86:706x557/1400x1050/filters:focal(0x86:706x557):format(png)/cdn.vox-cdn.com/assets/738480/stevejobs.png"
           alt=''
         />
         </ImageListItem> */}

       </ImageList>

       <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
       </Typography>

       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://c.ndtvimg.com/2021-11/g09pdd7k_parag-agrawal-afp_625x300_30_November_21.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.news18.com/ibnlive/uploads/2021/10/studio_project-19-14-16340382823x2.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar