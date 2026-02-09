import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SubmitConfession from "../pages/SubmitConfession";
import ProtectedRoute from "../components/ProtectedRoute";
import About from "../pages/About";
import TermsOfService from "../pages/Termsofservices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/termsofservices" element={<TermsOfService/>} />
      

      <Route
        path="/submit" element={
          <ProtectedRoute>
            <SubmitConfession />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;