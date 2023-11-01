import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import AutoLayout from './Components/AutoLayout/AutoLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import Drop from './Components/DropFiles/Drop.jsx';
import Tools from './Components/Tools/Tools.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AutoLayout />}
    >
    <Route path='/' element={<Home></Home>} />  
    <Route path='/drop' element={<Drop></Drop>} />  
    <Route path='/tools' element={<Tools></Tools>} />  
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
