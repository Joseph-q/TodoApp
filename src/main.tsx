import "./index.css";
import { createRoot } from "react-dom/client";
import HomePage from "./Modules/home/HomePage";
import TaskLayout from "./Modules/tasks/TaskLayout";
import TodayTaskPage from "./Modules/tasks/pages/TodayTaskPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllTaskPage from "./Modules/tasks/pages/AllTaskPage";
import LoginPage from "./Modules/Auth/pages/LoginPage";
import AuthLayout from "./Modules/Auth/layouts/AuthLayout";
import RegisterPage from "./Modules/Auth/pages/RegisterPage";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskLayout />}>
          <Route path="today" element={<TodayTaskPage />} />
          <Route path="all" element={<AllTaskPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
