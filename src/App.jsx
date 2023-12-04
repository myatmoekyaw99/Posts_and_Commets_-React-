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

function App() {

  // const [posts,setPosts] = useState([]);
  // useEffect(()=>{
  //   axios.get('http://localhost:3030/posts').then((response) => {
  //       setPosts(response.data);
  //   });
  // },[]);

  // console.log(posts);

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      loader: async ({ params }) => {
        return axios.get('http://localhost:3030/posts').then((response) => response.data);
      },
      children:[
        {
          errorElement:<ErrorPage/>,
          children:[
            { index: true, element: <HomePage/> },
            {
              path:"detail/:id",
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
              element:<Profile/>,
              errorElement:<ProfileErrorPage/>,
              children:[
                {
                  errorElement:<ProfileErrorPage/>,
                  children:[
                    { index: true, element: <UserProfile/> },
                    {
                      path:"posts",
                      element:<ProfilePosts/>
                    }
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
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>   
  )
}

export default App
