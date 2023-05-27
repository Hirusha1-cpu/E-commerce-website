import { Outlet, Navigation } from '@mui/icons-material';


const UserProtected = () => {
    const user = false;
  return (
    user ? <Outlet/>: <Navigation to="/login"/>
  )
}

export default UserProtected