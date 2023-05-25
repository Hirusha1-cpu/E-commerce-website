import { Outlet, Navigation } from '@mui/icons-material';
import React from 'react'

const UserProtected = () => {
    const user = false;
  return (
    user?<Outlet/>: <Navigation to="/login"/>
  )
}

export default UserProtected