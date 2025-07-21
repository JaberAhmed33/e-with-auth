import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainSection from './components/main/MainSection.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import ErrorBoundary from './components/error/ErrorBoundary.jsx';
import RouteErrorPage from './components/error/RouteErrorPage.jsx';
import Termsandcondtions from './components/Termsandcondtions.jsx';
import ProductsSection from './components/products/productsSection.jsx';
import ProductSection from './components/products/productById/ProductSection.jsx';
import Cart from './components/products/cartSec/Cart.jsx';
import Login from './components/login/login.jsx';
import { Toaster } from 'react-hot-toast';
import CheckWrapper from './components/auth/CheckWrapper.js';

let router = createBrowserRouter([
  {
    path: "/login",
    element: 
    <CheckWrapper login={true}>
      <Login />
    </CheckWrapper>,
    // loader: async () => {
    //   const token = localStorage.getItem("token");

    //   if (token) {
    //     return redirect("/products");
    //   }

    //   return null;

    // }
  },
  {
    path: "/",
    element: 
    <CheckWrapper>
      <App />
    </CheckWrapper>,
    children: [
      {
        path: "main",
        element: (
            <MainSection />
        ),
        loader: async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve("Data loaded successfully");
            }, 7000);
          }).then((data) => {
            console.log(data);
            return data;
          });
        }
      },
      {
        path: "products",
        element: (
            <ProductsSection />
        ),

      },
      {
        path: "products/:id",
        element: <ProductSection />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "termsandcondtions",
        element: <Termsandcondtions />,
      },
    ],
    errorElement: <RouteErrorPage />,

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster />

      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
