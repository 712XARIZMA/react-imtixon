import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import Teachers from "./components/pages/Teachers";
import NotFound from "./components/pages/Notfound";
import Addteacher from "./components/pages/Addteacher";
import TeacherData from "./components/pages/TeacherData";

const isAuth = () => localStorage.getItem("token") !== null;

const ProtectedRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/login" />;
};

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(isAuth());
  const navigate = useNavigate();

  useEffect(() => {
    setAuthenticated(isAuth());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    navigate("/login");
  };
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuth() ? <Navigate to="/dashboard" /> : <Navigate to="/" />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teachers"
          element={
            <ProtectedRoute>
              <Teachers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/addteacher"
          element={
            <ProtectedRoute>
              <Addteacher />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacherdata/:id"
          element={
            <ProtectedRoute>
              <TeacherData />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
