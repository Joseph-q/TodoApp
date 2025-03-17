import { Link } from "react-router";
import NavBar from "../../sections/NavBar";

export default function HomePage() {
  return  (
    <div>
      <NavBar></NavBar>
      <div className="container mx-auto p-8 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold text-center text-white mb-6">
          Welcome to TaskApp 🚀
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-white mb-4">
            What is TaskApp? 🤔
          </h2>
          <p className="text-lg text-gray-100 mb-4">
            This is a multi-tenant application, meaning that each user has their
            own secure space to manage their tasks. The app connects to a
            backend API deployed on <a
              href="https://azure.microsoft.com/en-us/services/app-service/"
              className="text-indigo-300 hover:text-indigo-500 underline"
            >
              Azure App Service 🌐
            </a>, built with <strong className="text-indigo-300">C# .NET (version 8)</strong> that communicates with a
            SQL Server database deployed on <a
              href="https://azure.microsoft.com/en-us/services/sql-database/"
              className="text-indigo-300 hover:text-indigo-500 underline"
            >
              Azure SQL Database 💾
            </a>. The app utilizes <strong className="text-indigo-300">React ⚛️</strong> for
            the frontend, ensuring an interactive and fluid experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-white mb-4">
            How to Get Started? 🏁
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Getting started is simple! Follow these steps:
          </p>
          <p className="text-lg text-gray-100 mb-4">
            First, <Link to="/auth/register" className="text-indigo-300 hover:text-indigo-500 underline">
              register 📝
            </Link> to create your account, then <Link to="/auth/login" className="text-indigo-300 hover:text-indigo-500 underline">
              log in 🔑
            </Link> to access your task dashboard. Once you're in, you'll have the
            ability to:
          </p>

          <ul className="list-disc list-inside pl-6 text-lg text-gray-100 mb-6">
            <li>
              <strong className="font-medium text-indigo-300">Create 🛠️</strong> tasks.
            </li>
            <li>
              <strong className="font-medium text-indigo-300">Read 📖</strong> your
              tasks, track their progress, and stay organized.
            </li>
            <li>
              <strong className="font-medium text-indigo-300">Update 🔄</strong> tasks.
            </li>
            <li>
              <strong className="font-medium text-indigo-300">Delete 🗑️</strong> tasks when they're no longer relevant.
            </li>
          </ul>

          <p className="text-lg text-gray-100 mb-6">
            TaskApp is your ultimate companion for staying organized and
            productive. Start managing your tasks today and experience the power
            of efficiency. 💪
          </p>

          <div className="text-center">
            <a
              href="/auth/register"
              className="inline-block px-8 py-3 mt-4 bg-indigo-600 text-white rounded-full text-xl font-semibold hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
            >
              Register Now ✨
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
