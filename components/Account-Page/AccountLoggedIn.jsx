import React from 'react'
import { Box, Typography } from '@mui/system'

const AccountLoggedIn = () => {

  return (
    <Box sx={styles.container}>
         <Box sx={styles.contentBox}>
             
         </Box>
    </Box>
  )
}

export default AccountLoggedIn


const styles = {
    container:{
      height:'calc(100vh - 70px)',
      background: "url('active-tv-login-test1.png')",
      // backgroundSize:'cover',
      display:'flex',
      alignItems:'center',
      width:'100%',
      justifyContent:'center'
    },
    contentBox:{
        width:'75%',
        background:'rgba(0,0,0,0.7)',
        height:'90%'
    }
}