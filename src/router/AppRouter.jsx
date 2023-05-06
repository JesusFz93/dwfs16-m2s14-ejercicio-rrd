import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
