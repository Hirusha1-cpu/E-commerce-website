
import { useSelector } from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';
import { userSelector } from '../Store/ReduxSlice/userSlice';

const AdminProtected = () => {
//   const admin = true;

   const users = useSelector(userSelector)
//   console.log(user);

    if(users.role){

        if(users.role === 'admin'){
          return <Outlet/>
        }else{
          return <Navigate to='/404'/>
        }
    }else{
        return <Navigate to='/404'/>
    }
}

export default AdminProtected