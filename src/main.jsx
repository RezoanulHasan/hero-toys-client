import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Component/Shared/Error/Error';
import App from './App';
import Home from './Component/Home/Home';
import Blog from './Component/Pages/Blog/Blog';
import Addproduct from './Component/Pages/Addproduct/Addproduct';
import Viewdetils from './Component/Pages/ViewDetails/Viewdetils';
import Booking from './Component/Pages/Booking/Booking';
import Updateproduct from './Component/Pages/UpdateProduct/Updateproduct';
import BookingShow from './Component/Pages/BookingShow/BookingShow';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Terms from './Component/Pages/Terms/Terms';
import AuthProvider from './Component/providers/AuthProvider';
import Alltoys from './Component/Pages/Alltoys/Alltoys';
import MyToys from './Component/Pages/MyToys/MyToys';
import ProductCategory from './Component/Home/ProductCategory/ProductCategory';
import PrivateRoute from './PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        loader: () => fetch('https://hero-toys.vercel.app/product'),

      },
      {
        path: "productCategory",
        element:<ProductCategory></ProductCategory>,
        loader: () => fetch('https://hero-toys.vercel.app/product'),

      },

      {
        path: "bookingShow",
        element:<PrivateRoute><BookingShow></BookingShow></PrivateRoute> ,
        loader: () => fetch('https://hero-toys.vercel.app/bookings'),

      },

      {
        path: "alltoys",
        element:<Alltoys></Alltoys>,
        loader: () => fetch('https://hero-toys.vercel.app/product'),


      },
      {
        path: "mytoys",
        element:  <PrivateRoute> <MyToys></MyToys>  </PrivateRoute>,
      

      },


      {
        path: "blog",
        element: <Blog></Blog>,
      },
   

       {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "terms",
        element:<Terms></Terms> ,
      },

      {
        path: "addProduct",
        element:<PrivateRoute> <Addproduct></Addproduct></PrivateRoute>  ,
        loader: () => fetch('https://hero-toys.vercel.app/product'),
      },




     // {
       // path: " productscard",
       // element:<Productscard></Productscard>,
      //},

      
      {
        path:  "booking/:id",
       element:  <PrivateRoute><Booking></Booking>  </PrivateRoute>,
       loader: ({params}) => fetch(`https://hero-toys.vercel.app/product/${params.id}`),
        },

     {
      path:  "/product/view/:id",
     element: <PrivateRoute> <Viewdetils></Viewdetils> </PrivateRoute>   ,
     loader: ({params}) => fetch(`https://hero-toys.vercel.app/product/${params.id}`),
      },
      

    {
      path: "/product/update/:id",
      element:<Updateproduct></Updateproduct> ,
       loader: ({params}) => fetch(`https://hero-toys.vercel.app/product/${params.id}`),
      },

    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
