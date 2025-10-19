import Edit from "../Component/Todo/Edit";
import Todo from "../Component/Todo/Todo";

export default [
  {
    path: "",
    element: <Todo />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
];
