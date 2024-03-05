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
import PrivacyPoliy from "./pages/setting/privacyPolicy/privacyPolicy";
const HelpCenter = React.lazy(
  () => import("./pages/setting/helpCenter/helpCenter")
);
const PaymentMethods = React.lazy(
  () => import("./pages/setting/paymentMethods/paymentMethods")
);
const PasswordManager = React.lazy(
  () => import("./pages/setting/passwordManager/passwordManager")
);
const Setting = React.lazy(() => import("./pages/setting/setting"));
const YourProfile = React.lazy(() => import("./pages/profile/yourProfile"));
const ProfileLayout = React.lazy(
  () => import("./components/ProfileLayout/ProfileLayout")
);
const Profile = React.lazy(() => import("./pages/profile/profile"));
const Filter = React.lazy(() => import("./pages/search/filter/filter"));
const DoingChat = React.lazy(() => import("./pages/chat/doingChat/doingChat"));
const ChatLayout = React.lazy(
  () => import("./components/ChatLayout/ChatLayout")
);
const Chatting = React.lazy(() => import("./pages/chat/chat"));
const MentorDetailsLayout = React.lazy(
  () => import("./components/mentorDetailsLayout/mentorDetailsLayout")
);
const MentorDetails = React.lazy(
  () => import("./pages/mentorDetails/mentorDetails")
);
const Notification = React.lazy(
  () => import("./pages/notification/notification")
);
const AllContinueLearning = React.lazy(
  () => import("./pages/allContinueLearning/allContinueLearning")
);
const SearchcourseAndMentor = React.lazy(
  () => import("./pages/search/searchCourseAndMentor/searchCourseAndMentor")
);
const SearchLayout = React.lazy(
  () => import("./components/SearchLayout/SearchLayout")
);
const SearchPage = React.lazy(
  () => import("./pages/search/searchPage/searchPage")
);
const CourseLayout = React.lazy(
  () => import("./components/CourseLayout/CourseLayout")
);
const Course = React.lazy(() => import("./pages/course/course"));
const MyCourse = React.lazy(() => import("./pages/myCourse/myCourse"));
const BookMark = React.lazy(() => import("./pages/bookmark/bookMark"));
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

const loading=()=>{
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-medium">Loading...</h1>
    </div>
  )
}
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
      <Suspense fallback={
        loading()}>
        {cookies.get("token") ? <Layout /> : <Navigate to={"/auth/register"} />}
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={loading()}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/bookmarks",
        element: (
          <Suspense fallback={loading()}>
            <BookMark />
          </Suspense>
        ),
      },
      {
        path: "/mycourse",
        element: (
          <Suspense fallback={loading()}>
            <MyCourse />
          </Suspense>
        ),
      },
      {
        path: "/notification/:handleNotificationBack",
        element: (
          <Suspense fallback={loading()}>
            <Notification />
          </Suspense>
        ),
      },
      {
        path: "/setting",
        element: (
          <Suspense fallback={loading()}>
            <Setting />
          </Suspense>
        ),
      },
      {
        path: "/paymentmethods",
        element: (
          <Suspense fallback={loading()}>
            <PaymentMethods />
          </Suspense>
        ),
      },
      {
        path: "/passwordmanager",
        element: (
          <Suspense fallback={loading()}>
            <PasswordManager />
          </Suspense>
        ),
      },
      {
        path: "/helpcenter",
        element: (
          <Suspense fallback={loading()}>
            <HelpCenter />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/layoutseeall",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? (
          <LayoutSeeAll />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/layoutseeall/allcategorie",
        element: (
          <Suspense fallback={loading()}>
            <AllCategorie />
          </Suspense>
        ),
      },
      {
        path: "/layoutseeall/allpupularcourse",
        element: (
          <Suspense fallback={loading()}>
            <AllPupularCourse />
          </Suspense>
        ),
      },
      {
        path: "/layoutseeall/alltopmentor",
        element: (
          <Suspense fallback={loading()}>
            <AllTopMentor />
          </Suspense>
        ),
      },
      {
        path: "/layoutseeall/allcontinuelearning",
        element: (
          <Suspense fallback={loading()}>
            <AllContinueLearning />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/coursedetailes",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? <Outlet /> : <Navigate to={"/auth/register"} />}
      </Suspense>
    ),
    children: [
      {
        path: `/coursedetailes/:handlerout`,
        element: (
          <Suspense fallback={loading()}>
            <CourseDetailes />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/review",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? <Review /> : <Navigate to={"/auth/register"} />}
      </Suspense>
    ),
    children: [
      {
        path: "/review/reviewcourse",
        element: (
          <Suspense fallback={loading()}>
            <ReviewCourse />
          </Suspense>
        ),
      },
      {
        path: "/review/reviewmentor",
        element: (
          <Suspense fallback={loading()}>
            <ReviewMentor />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/payment",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? (
          <PaymentLayout />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/payment/peymentmethods",
        element: (
          <Suspense fallback={loading()}>
            <PeymentMethods />
          </Suspense>
        ),
      },
      {
        path: "/payment/addcard",
        element: (
          <Suspense fallback={loading()}>
            <AddCard />
          </Suspense>
        ),
      },
      {
        path: "/payment/reviewsummery/:payment",
        element: (
          <Suspense fallback={loading()}>
            <ReviewSummery />
          </Suspense>
        ),
      },
      {
        path: "/payment/paymentresult",
        element: (
          <Suspense fallback={loading()}>
            <PaymentResult />
          </Suspense>
        ),
      },
      {
        path: "/payment/electronicreceipt",
        element: (
          <Suspense fallback={loading()}>
            <ElectronicReceipt />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/course",
    element: (
      <Suspense
        fallback={
          loading()
        }
      >
        {cookies.get("token") ? (
          <CourseLayout />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/course/lesson-certificate/:params",
        element: (
          <Suspense
            fallback={
              loading()
            }
          >
            <Course />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? (
          <SearchLayout />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/search",
        element: (
          <Suspense fallback={loading()}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/search/mentor-and-course/:routCategory",
        element: (
          <Suspense fallback={loading()}>
            <SearchcourseAndMentor />
          </Suspense>
        ),
      },
      {
        path: "/search/filter",
        element: (
          <Suspense fallback={loading()}>
            <Filter />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/mentor-details",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? (
          <MentorDetailsLayout />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/mentor-details/:rout",
        element: (
          <Suspense fallback={loading()}>
            <MentorDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/chat",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? (
          <ChatLayout />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/chat",
        element: (
          <Suspense fallback={loading()}>
            <Chatting />
          </Suspense>
        ),
      },
      {
        path: "/chat/pv/:handleBack",
        element: (
          <Suspense fallback={loading()}>
            <DoingChat />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={loading()}>
        {cookies.get("token") ? (
          <ProfileLayout />
        ) : (
          <Navigate to={"/auth/register"} />
        )}
      </Suspense>
    ),
    children: [
      {
        path: "/profile/user",
        element: (
          <Suspense fallback={loading()}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/profile/userprofile",
        element: (
          <Suspense fallback={loading()}>
            <YourProfile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/privacypolicy/:rout",
    element: <PrivacyPoliy />,
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
