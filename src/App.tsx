/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { storeProvider as StoreProvider } from "./contexts";
import cookies from "js-cookie";
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:4003",
  headers: {
    authorization: cookies.get("token"),
  },
});
instance.interceptors.response.use(
  (config) => {
    /** In dev, intercepts request and logs it into console for dev */
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.assign("/auth/login");
    }
    return Promise.reject(error);
  }
);

import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
const MyCourse=React.lazy(()=>import("./pages/myCourse/myCourse"))
const BookMark=React.lazy(()=>import("./pages/bookmark/bookMark"))
const PaymentLayout = React.lazy(
  () => import("./components/PaymentLayout/PaymentLayout")
);
const Review = React.lazy(() => import("./components/Review/Review"));
const AllTopMentor = React.lazy(
  () => import("./pages/allTopMentor/allTopMentor")
);
const ReviewMentor = React.lazy(
  () => import("./pages/review/reviewMentor/reviewMentor")
);
const ReviewCourse = React.lazy(
  () => import("./pages/review/reviewCourse/reviewCourse")
);
const PaymentResult = React.lazy(
  () => import("./pages/peymentMethods/paymentResult/paymentResult")
);
const ElectronicReceipt = React.lazy(
  () => import("./pages/peymentMethods/electronicReceipt/electronicReceipt")
);
const ReviewSummery = React.lazy(
  () => import("./pages/peymentMethods/reviewSummery/reviewSummery")
);
const AddCard = React.lazy(
  () => import("./pages/peymentMethods/addCard/addcard")
);
const PeymentMethods = React.lazy(
  () => import("./pages/peymentMethods/paymentMethod/peymentMethods")
);
const CourseDetailes = React.lazy(
  () => import("./pages/CourseDetailes/CourseDetailes")
);
const LayoutSeeAll = React.lazy(
  () => import("./components/LayoutSeeAll/LayoutSeeAll")
);
const AllPupularCourse = React.lazy(
  () => import("./pages/allPupularCourse/allPupularCourse")
);
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

const route = createBrowserRouter([
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
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/bookmarks",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <BookMark />
          </Suspense>
        ),
      },
      {
        path: "/mycourse",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MyCourse />
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AllCategorie />
          </Suspense>
        ),
      },
      {
        path: "/layoutseeall/allpupularcourse",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AllPupularCourse />
          </Suspense>
        ),
      },
      {
        path: "/layoutseeall/alltopmentor",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AllTopMentor />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/coursedetailes",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: `/coursedetailes`,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CourseDetailes />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/review",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Review />
      </Suspense>
    ),
    children: [
      {
        path: "/review/reviewcourse",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ReviewCourse />
          </Suspense>
        ),
      },
      {
        path: "/review/reviewmentor",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ReviewMentor />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/payment",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <PaymentLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/payment/peymentmethods",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PeymentMethods />
          </Suspense>
        ),
      },
      {
        path: "/payment/addcard",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AddCard />
          </Suspense>
        ),
      },
      {
        path: "/payment/reviewsummery/:payment",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ReviewSummery />
          </Suspense>
        ),
      },
      {
        path: "/payment/paymentresult",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PaymentResult />
          </Suspense>
        ),
      },
      {
        path: "/payment/electronicreceipt",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ElectronicReceipt />
          </Suspense>
        ),
      },
    ],
  },
]);
const App = () => {
  return (
    <StoreProvider>
      <Toaster />
      <RouterProvider router={route} />
    </StoreProvider>
  );
};

export default App;
