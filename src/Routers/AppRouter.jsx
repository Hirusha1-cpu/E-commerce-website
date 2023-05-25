import React from "react";
import { BrowserRouter, Route, Routes , createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children: [
            {
                index:true,
                element:<Home/>,
                
            },
            {
                element:<UserProtected/>,
                children:[
                    {
                        path:'user',
                        element:<User/>

                    }
                ]
            }
        ]
       
    },
    {
        path:'/login',
        element:<Login/>,
        children: [
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])
// import Body from '../Components/Body/Body';

const AppRouter = () => {
  return <RouterProvider router={router}/>
//   (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           {/* <Route index element={<Body/>}/> */}
//           <Route index element={<Home />} /> 

//           <Route element={<UserProtected />}>
//             <Route path="user" element={<User />} />
//           </Route>
//         </Route>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
};

export default AppRouter;
