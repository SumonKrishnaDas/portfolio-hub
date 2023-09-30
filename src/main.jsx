import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Main/Main.jsx'
import Jobdetails from './Components/Jobdetails/Jobdetails.jsx'
import Home from './Components/Home/Home.jsx'
import Applied from './Components/Applied/Applied.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Statics from './Components/Statics/Statics.jsx'


const  router = createBrowserRouter([


  {
    path:'/',
    element:<Main> </Main>,
    children:[

      {
        path:'/',
        element:<Home> </Home>


      },

      {

        path:'/jobdetails',
        element:<Jobdetails>  </Jobdetails>
      },
    
      {
    
        path:'/jobdetails/:jobId',
        element:<Jobdetails> </Jobdetails>
      },

{


 
  path:'/apliedjob',
  element:<Applied> </Applied>

},
{
  path:'/blog',
  element:<Blog> </Blog>
  

},
{

  path:'statics',
  element:<Statics> </Statics>
}


    ]


    },
  

]





)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} > </RouterProvider>
  </React.StrictMode>,
)
