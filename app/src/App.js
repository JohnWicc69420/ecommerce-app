import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path:"/", element:<Home/>
  },
  {
    path:"/products/:id", element:<Products/>
  },
  {
    path:"/product/:id", element:<Product/>
  },
  {
    path:"/products/:id", element:<Products/>
  }
])


export default App;
