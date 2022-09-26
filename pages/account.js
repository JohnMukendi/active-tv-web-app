import React from 'react'
import AccountFooter from '../components/Account-Page/AccountFooter'
import MerchSection from '../components/Account-Page/MerchSection'
import Subscriptions from '../components/Account-Page/subscriptions'
import ViewOnDevice from '../components/Account-Page/ViewOnDevice'
import Banner from '../components/Account-Page/Banner'
import { Box } from '@mui/system'
import { useState, useContext } from 'react'
import { USER_CONTEXT } from '../context/MainContext'
import AccountLoggedIn from '../components/Account-Page/AccountLoggedIn'



const account = () => {

 
  // const {loggedIn, SetLoggedIn, AuthenticatedUser} = useContext(USER_CONTEXT) //getting the user auth details 
  const [loggedIn, SetLoggedIn] = useState(true)


  return (

    loggedIn ?

      <Box>
        <AccountLoggedIn />
      </Box>

      :

      <Box>
        <Banner />
        <Subscriptions />
        <ViewOnDevice />
        <MerchSection />
        <AccountFooter />
      </Box>
  )
}

export default account