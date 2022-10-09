import { DashBoard, Collections, Charts } from "../pages";

const myPaths = [
  {
    elements: [
      {
        path: "/dashboard",
        component: DashBoard,
      },
    ],
  },
  {
    elements: [
      {
        path: "/collections",
        component: Collections,
      },
    ],
  },
  {
    elements: [
      {
        path: "/charts",
        component: Charts,
      },
    ],
  },
];

export default myPaths;
