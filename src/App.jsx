import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './layout/ErrorPage';
import Root from './layout/Root';
import Register from './users/Register';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
    },
    {
      path:"/register",
      element:<Register/>,
      errorElement:<ErrorPage/>,
    }
    ]);
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>   
  )
}

export default App
