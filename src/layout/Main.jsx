import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
const Main = () => {
  return (
    <div className="font-body">
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
