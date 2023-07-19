import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import FixedComponent from "./Components/Router/FixedComponent";
import LoginPage from "./Components/Pages/LoginPage";
import Students from "./Components/Pages/Students";
import CoursesPage from "./Components/Pages/CoursesPage";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      !JSON.parse(localStorage.getItem("login"))?.username &&
      pathname != "/login"
    ) {
      window.location.href = "http://localhost:3000/login";
      console.log("true");
    }
  }, [pathname]);

  return (
    <>
      <ToastContainer
        position="top-center"
        style={{ zIndex: 10000 }}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <Routes>
        <Route path="/" element={<FixedComponent />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
