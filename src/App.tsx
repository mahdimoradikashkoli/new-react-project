/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { storeProvider as StoreProvider } from "./contexts";
import cookies from "js-cookie"
import axios from "axios"
export const instance = axios.create({
  baseURL: "http://localhost:4003",
  headers: {
    authorization: cookies.get("token"),
  },
})
instance.interceptors.response.use((config) => {
  /** In dev, intercepts request and logs it into console for dev */
  return config;
},(error) => {
  if(error.response.status === 401){
    window.location.assign("/auth/login")
  }
  return Promise.reject(error);
})

import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AllTopMentor from "./pages/allTopMentor/allTopMentor";
const CourseDetailes=React.lazy(()=> import("./pages/CourseDetailes/CourseDetailes"))
const LayoutSeeAll=React.lazy(()=> import("./components/LayoutSeeAll/LayoutSeeAll"))
const AllPupularCourse=React.lazy(()=> import("./pages/allPupularCourse/allPupularCourse"))
const AllCategorie = React.lazy(
  () => import("./pages/allCategorie/allCategorie")
);
const Register = React.lazy(() => import("./pages/register/register"));
const AuthLayout = React.lazy(
  () => import("./components/AuthLayout/AuthLayout")
);
const WelcomePage1 = React.lazy(
  () => import("./pages/welcomepage/welcomepage1")
);
const Login = React.lazy(() => import("./pages/login/login"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));
const Home = React.lazy(
  () =>
    import("./pages/home/home") as unknown as Promise<{
      default: React.ComponentType<any>;
    }>
);

const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        {cookies.get("token") ? <Navigate to="/" /> : <AuthLayout />}
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
          <Suspense fallback={<h1>Loading...</h1>}>
            <WelcomePage1 />
          </Suspense>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
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
    ],
  },
  {
    path: "/layoutseeall",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <LayoutSeeAll />
      </Suspense>
    ),
    children: [
      {
        path: "/layoutseeall/allcategorie",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <AllCategorie />
        </Suspense>,
      },
      {
        path: "/layoutseeall/allpupularcourse",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <AllPupularCourse />
        </Suspense>,
      },
      {
        path: "/layoutseeall/alltopmentor",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <AllTopMentor/>
        </Suspense>,
      },
    ],
  },
  {
    path:"/pagelayout",
    element:<Suspense fallback={<h1>Loading...</h1>}>
      <Outlet/>
    </Suspense>,
    children:[{
      path:"/pagelayout/coursedetailes",
      element:<Suspense fallback={<h1>Loading...</h1>}>
        <CourseDetailes/>
      </Suspense>
    }]
  }
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
