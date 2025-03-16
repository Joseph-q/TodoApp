import "./index.css";
import { createRoot } from "react-dom/client";
import HomePage from "./Modules/home/HomePage";
import TaskLayout from "./Modules/tasks/TaskLayout";
import TodayTaskPage from "./Modules/tasks/pages/TodayTaskPage";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskLayout />}>
        <Route path="today" element={<TodayTaskPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
