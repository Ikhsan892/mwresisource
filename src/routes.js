import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import Layout from "./layout";
import ErrorLayout from "pages/Error";
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to='/home' />,
  },
  {
    path: "/error",
    component: ErrorLayout,
  },
  {
    route: "*",
    component: Layout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: lazy(() => import("pages/Home")),
      },
      {
        path: "/track",
        exact: true,
        component: lazy(() => import("pages/Track")),
      },
      {
        path: "/invoice",
        exact: true,
        component: lazy(() => import("pages/Invoice")),
      },
      {
        path: "/blog",
        exact: true,
        component: lazy(() => import("pages/Information")),
      },
      {
        path: "/details/:slug",
        exact: true,
        component: lazy(() => import("pages/Information/InformationDetail")),
      },
      {
        component: () => <Redirect to='/error' />,
      },
    ],
  },
];

export default routes;
