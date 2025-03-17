import "./index.css";
import { createRoot } from "react-dom/client";
import HomePage from "./Modules/home/HomePage";
import TaskLayout from "./Modules/tasks/TaskLayout";
import TodayTaskPage from "./Modules/tasks/pages/TodayTaskPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllTaskPage from "./Modules/tasks/pages/AllTaskPage";

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
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
