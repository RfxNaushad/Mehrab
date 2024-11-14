import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout.jsx'
import Projects from './components/Projects.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path:'/projects',
        element:<Projects/>
    
      }
    ]
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
