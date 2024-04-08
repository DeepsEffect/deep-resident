import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Main = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Nav></Nav>
        <div className="min-h-[calc(100vh-288px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
