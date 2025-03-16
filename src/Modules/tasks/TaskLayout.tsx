import { Outlet } from "react-router";
import NavBar from "../../sections/NavBar";
import SideBar from "./sections/TaskSideBar";

export default function TaskLayout() {
  return (
    <div>
        <NavBar></NavBar>
        <SideBar>
          <Outlet/>
        </SideBar>
    </div>
  )
}
