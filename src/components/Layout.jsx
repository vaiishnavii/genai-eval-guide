import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gray-100 px-6 py-8 border-r border-gray-200">
        <h2 className="text-2xl font-extrabold text-red-700 mb-8 tracking-tight">GenAI Guide</h2>
        <nav className="flex flex-col space-y-4 text-lg">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/framework"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Framework
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Resources
          </NavLink>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 px-12 py-12 bg-white shadow-md">
        <Outlet />
      </main>
    </div>
  );
}
