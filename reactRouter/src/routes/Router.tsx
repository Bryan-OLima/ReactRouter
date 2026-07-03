import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/mainlayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const Router = () => {
  return (
    <Routes>
      <Route></Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
