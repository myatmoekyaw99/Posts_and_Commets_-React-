import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './errors/ErrorPage';
import Root from './layout/Root';
import Register from './users/Register';
import Login from './users/Login';
import Detail from './posts/Detail';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomePage from './layout/HomePage';
import Profile from './layout/Profile';
import UserProfile from './users/UserProfile';
import ProfilePosts from './posts/ProfilePosts';
import ProfileErrorPage from './errors/ProfileErrorPage';
import CreatePost from './posts/CreatePost';
import EditPost from './posts/EditPost';
import EditUser from './users/EditUser';
import { AuthProvider } from './users/context/AuthContext';
import ProtectedRoute from './protect/ProtectedRoute';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          // errorElement:<ErrorPage/>,
          children:[
            { index: true, element: <HomePage/> },
            {
              path:"posts/:post_id/detail",
              element:<Detail/>,
            },
            {
              path:"register",
              element:<Register/>,
            },
            {
              path:"login",
              element:<Login/>,
            },
            {
              path:"profile",
              element:<ProtectedRoute><Profile/></ProtectedRoute>,
              errorElement:<ProfileErrorPage/>,
              children:[
                {
                  errorElement:<ProfileErrorPage/>,
                  children:[
                    { index: true, element: <UserProfile/> },
                    {
                      path:"posts",
                      element:<ProfilePosts/>,
                    },
                    {
                      path:":user_id/edit",
                      element:<EditUser/>,
                    },
                    {
                      path:"create",
                      element:<CreatePost/>,
                    },
                    {
                      path:"posts/:postId/edit",
                      element:<EditPost/>,
                    },
                    {
                      path:"posts/:post_id/detail",
                      element:<Detail/>,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  
  return (
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>   
  )
}

export default App
