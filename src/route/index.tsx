import { createHashRouter, Navigate, Outlet } from 'react-router-dom'
// import Login from '@/pages/login'
import Home from '@/pages/Home/Home'
import Index from '@/pages/index'
import Exchange from '@/pages/exchange'
// import Account from '@/pages/account'
import { useRoutes } from "react-router-dom"


const Routers = [{
  path: '/',
  element: <Navigate to='/Exchange'></Navigate>
},
{
  path: '/home',
  element: <Home />,
},
{
  path: '/exchange',
  element: <Exchange />,
},
{
  path: '/Index',
  element: <Index></Index>,
  // children: [
  //   {
  //     path: '',
  //     element: <Outlet />,
  //     children: [
  //       { path: 'Swap', element: <Home /> },
  //       { path: 'Liquidity', element: <Liquidity /> },
  //     ],
  //   },]

},

{
  path: '*',
  element: <Navigate to="/Exchange" />,
},


]

const Router = () => {
  const routes = useRoutes(Routers);
  return routes;
};


export default Router