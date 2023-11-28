import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './home/HomePage';
import ErrorPage from './layout/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>,
      errorElement:<ErrorPage/>,
      children:[
        

      ]
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
