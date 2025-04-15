import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



// import { Analytics } from "@vercel/analytics/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/contact",
    element: <Contact/>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Analytics/> */}
   <RouterProvider router={router} />
  </StrictMode>,
)
