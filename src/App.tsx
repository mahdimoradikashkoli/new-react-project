/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { storeProvider as StoreProvider } from "./contexts";
import axios from "axios";
import  jscookie  from 'js-cookie';
export const instanse = axios.create({
  baseURL: "http://localhost:4003",
  headers:{
    authorization:jscookie.get("token")
  }
});

import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const AllCategorie=React.lazy(()=> import("./pages/allCategorie/allCategorie"))
const Register = React.lazy(() => import("./pages/register/register"));
const AuthLayout = React.lazy(
  () => import("./components/AuthLayout/AuthLayout")
);
const WelcomePage1 = React.lazy(
  () => import("./pages/welcomepage/welcomepage1")
);
const Login = React.lazy(() => import("./pages/login/login"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));
const Home = React.lazy(() => import("./pages/home/home") as unknown as Promise<{ default: React.ComponentType<any> }> );






const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        {jscookie.get("token") ? <Navigate to="/"/> :<AuthLayout />}
      </Suspense>
    ),
    children: [
      {
        path: "/auth/register",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/auth/welcome1",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <WelcomePage1 />
          </Suspense>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading</h1>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loadin</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/allcategorie",
        element: (
          <AllCategorie/>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <StoreProvider>
      <Toaster />
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

export default App;
