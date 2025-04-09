import { createBrowserRouter } from "react-router-dom";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import Teachers from "../components/pages/Teachers";
import Notfound from "../components/pages/Notfound";
import Addteacher from "../components/pages/Addteacher";
import TeacherData from "../components/pages/TeacherData";

export const route = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/notfound", element: <Notfound /> },
  { path: "/addteacher", element: <Addteacher /> },
  { path: "/teacherdata", element: <TeacherData /> },
  { path: "/teacherdata/:id", element: <TeacherData /> },
]);
