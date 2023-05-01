import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'

const router = createBrowserRouter([
  {
    path:"/", element:<Home/>
  },
  {
    path:"/products/:id", element:<Products/>
  },
  {
    path:"/product/:id", element:<Product/>
  }
])


export default App;
