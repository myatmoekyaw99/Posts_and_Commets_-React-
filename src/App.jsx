import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './home/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>,
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
