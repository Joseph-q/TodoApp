import { Outlet } from "react-router";
import NavBar from "../../../sections/NavBar";

function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />
    <div className="flex mt-20 justify-center items-center ">
      <Outlet />
    </div>
  </div>
  );
}

export default AuthLayout;
