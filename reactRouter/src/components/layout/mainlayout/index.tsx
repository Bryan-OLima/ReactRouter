import Header from "../header";
import "./style.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="app-container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      {/* <Navbar /> */}
    </section>
  );
};

export default MainLayout;
