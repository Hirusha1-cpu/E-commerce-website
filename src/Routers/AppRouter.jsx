import React from "react";
import { BrowserRouter, Route, Routes , createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import ItemPage from "../Pages/ItemPage/ItemPage";
import AdminProtected from "./AdminProtected";
import Admin from "../Pages/Admin/Admin";
import NoUrl from "../Pages/404/NoUrl";

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
                path:'category',
            
                children:[
                    {
                        index:true,
                        element:<Category/>,
                    },
                    {
                        path:':categoryId',
                        children:[
                            {
                                index:true,
                                element:<CategoryItems/>,
                            
                            },
                            {
                                path:':itemId',
                                element:<ItemPage/>,
                            
                            }
                        ]
                    }
                ]
                
            },
            {
                element:<UserProtected/>,
                children:[
                    {
                        path:'profile',
                        element:<User/>

                    }
                ]
            }
        ]
       
    },
    // {
    //     path:'/category',
    //     element:<Category/>,
    //     children: [
    //         {
    //             path:'/category',
    //             element:<Category/>
    //         }
    //     ]

    // },
    {
        path:'/login',
        element:<Login/>,
        children: [
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
    {
        path:'/404',
        element:<NoUrl/>,
    },
    {
        path:'/login',
        element:<Login/>,
    },
    {
        
        element:<AdminProtected/>,
        children:[
            {
                path:'/admin',
                element:<Admin/>
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
