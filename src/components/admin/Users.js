import React from 'react'
import { Avatar, Box , Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, Switch } from '@material-ui/core'
import { Person } from '@material-ui/icons'

const user = [	{
    "Email": "Danitomonga@gmail.com",
    "FirstName": "Daniel",
    "Id": 1,
    "LastName": "Mungai",
    "Location": "Uthiru, Waiyaki way",
    "Password": "12345",
    "PhoneNumber": 727980611
},
{
    "Email": "Peninahmukiri@gmail.com",
    "FirstName": "Peninah",
    "Id": 2,
    "LastName": "Mukiri",
    "Location": "muthiga, Waiyaki way",
    "Password": "12345",
    "PhoneNumber": 71234567
},
{
    "Email": "Danitomonga@gmail.com",
    "FirstName": "Daniel",
    "Id": 1,
    "LastName": "Mungai",
    "Location": "Uthiru, Waiyaki way",
    "Password": "12345",
    "PhoneNumber": 727980611
},
{
    "Email": "Peninahmukiri@gmail.com",
    "FirstName": "Peninah",
    "Id": 2,
    "LastName": "Mukiri",
    "Location": "muthiga, Waiyaki way",
    "Password": "12345",
    "PhoneNumber": 71234567
},
{
    "Email": "Danitomonga@gmail.com",
    "FirstName": "Daniel",
    "Id": 1,
    "LastName": "Mungai",
    "Location": "Uthiru, Waiyaki way",
    "Password": "12345",
    "PhoneNumber": 727980611
},
{
    "Email": "Peninahmukiri@gmail.com",
    "FirstName": "Peninah",
    "Id": 2,
    "LastName": "Mukiri",
    "Location": "muthiga, Waiyaki way",
    "Password": "12345",
    "PhoneNumber": 71234567
}
]
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Users = () => {
  return (
    <div className='bg-light '>
      <Box className='m-5 '>
         <Typography variant='h5' color='warning' align='center' > 
            My Users
         </Typography>
         <Box className='mx-5'>
         <List disablePadding> 
            {user.map((text, index)=>(
                <>
                <ListItem key={index} button >
                    <ListItemAvatar>
                        <Avatar>
                            <Person/>
                        </Avatar>
                    </ListItemAvatar>
                   
                    <ListItemText primary={text.FirstName} secondary={text.PhoneNumber}>

                    </ListItemText>
                    <Switch {...label}/>
                </ListItem>
                <Divider />
                </>
            ))}
         </List>
         </Box>
      </Box>
    </div>
  )
}

export default Users
