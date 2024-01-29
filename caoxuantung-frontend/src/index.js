import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import Admin from './admin/Admin';
import ProductList from './scenes/productList/ProductList';
import ProductDetail from './scenes/productDetail/ProductDetail';
//import Test from './Test';
import Home from './scenes/home/Home';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartMenu from './scenes/global/CartMenu';
import Paginate from './components/Paginate';
import Dashboard from './scenes/Dashboard';
// import Login from './auth/Login'
// import Register from './auth/Register'
// import AdminProduct from './scenes/product/AdminProduct'
// import AdminProductAdd from './scenes/product/AdminProductAdd'
// import AdminProductBox from './scenes/product/AdminProductBox'
// import AdminProductDetail from './scenes/product/AdminProductDetail'
// import AdminProductEdit from './scenes/product/AdminProductEdit'



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product',
        element: <ProductList />,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'checkout/success',
        element: <Confirmation />,
      },
      {
        path: 'cart',
        element: <CartMenu />

      },
      {
        path: 'product/page/:pageNum',
        element: <ProductList />,
      },
    ],

  },


  
])
root.render(
  <React.StrictMode>

    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

