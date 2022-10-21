import { DashBoard, Collections, Charts, Albums } from "../pages";

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
  {
    elements: [
      {
        path: "/albums",
        component: Albums,
      },
    ],
  },
];

export default myPaths;
