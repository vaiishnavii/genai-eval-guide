import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gray-100 px-6 py-8 border-r border-gray-200">
        <h2 className="text-2xl font-extrabold text-red-700 mb-8 tracking-tight">Evaluating GenAI Tools</h2>
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
            to="/why-frameworks"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Why Evaluation Matters?
          </NavLink>
          <NavLink
            to="/framework"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Core Evaluation Criteria
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/recommendations"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            Recommendations for Institutions
          </NavLink><NavLink
            to="/references"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-800 hover:text-blue-600"
            }
          >
            References
          </NavLink>
          <Footer />
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 px-12 py-12 bg-white shadow-md">
        <Outlet />
      </main>
    </div>

  );
}
