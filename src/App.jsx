import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom'
import AppSk from './components/Skeletons/AppSk.jsx';
import Home from './Pages/Dashboard/Home/Home.jsx'
const Login = lazy(() => import('./Pages/Login/Login.jsx'))
const Signup = lazy(() => import('./Pages/Signup/Signup.jsx'))
const Dashboard = lazy(() => import('./Pages/Dashboard/index.jsx'))
const Forgot = lazy(() => import('./Pages/Forgot/Forgot.jsx'))
const Reset = lazy(() => import('./components/Reset/Reset.jsx'))
const Table = lazy(() => import('./Pages/Dashboard/Table/Table.jsx'))
const Virtual = lazy(() => import('./Pages/Dashboard/Virtual/Virtual.jsx'))
const Monitor = lazy(() => import('./Pages/Dashboard/Monitor/Monitor.jsx'))

const Crystal = lazy(() => import('./Pages/Dashboard/Crystal/Crystal.jsx'))
const ComplaintHistory = lazy(() => import('./Pages/Dashboard/ComplaintHistory/ComplaintHistory.jsx'))
const NotificationHistory = lazy(() => import('./Pages/Dashboard/NotificationHistory/NotificationHistory.jsx'))
const Edit = lazy(() => import('./Pages/Dashboard/Edit/Edit.jsx'))
const Logout = lazy(() => import('./Pages/Dashboard/Logout/Logout.jsx'))



const Otp = lazy(() => import('./components/Otp/Otp.jsx'))
const NotificationH = lazy(() => import('./Pages/Dashboard/NotificationHistory/NotificationHistory.jsx'))


function App() {
  const route = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    {
      path: '/dashboard', element: <Dashboard />,
      children: [
        { path: "/dashboard", element: <Home /> },
        {path:"/dashboard/table",element:<Table/>},
        {path:"/dashboard/virtual",element:<Virtual/>},
        {path:"/dashboard/monitor",element:<Monitor/>},
        {path:"/dashboard/crystal",element:<Crystal/>},
        {path:"/dashboard/complaint",element:<ComplaintHistory/>},
        {path:"/dashboard/notification",element:<NotificationHistory/>},
        {path:"/dashboard/edit",element:<Edit/>},
        {path:"/dashboard/logout",element:<Logout/>}
      ]
    },
    { path: '/reset', element: <Reset /> },
    { path: '/otp' , element: <Otp />},
    { path: '/forgot', element: <Forgot /> }

  ])

  return (
    <>
      <Suspense fallback={<AppSk />}>
        {route}
      </Suspense>
    </>
  );
}

export default App;
