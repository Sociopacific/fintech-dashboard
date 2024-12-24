// App.tsx

import "@/App.css";

import { Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { routes } from "@/routes";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Function to close the sidebar (useful for overlay click)
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col">
      {/* Sidebar and Header */}
      <div className="z-50 md:fixed inset-0 flex items-start pointer-events-none">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <Header toggleSidebar={toggleSidebar} />
        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-accent opacity-30 z-40 2xl:hidden cursor-pointer pointer-events-auto"
            onClick={closeSidebar}
          ></div>
        )}
      </div>

      {/* Main Content */}
      <main className="relative flex-1 2xl:ml-sidebar md:mt-header">
        <div className="flex justify-center w-full px-[25px] md:px-10 md:pt-6 pb-12 overflow-hidden">
          <div className="size-full max-w-[800px] xl:max-w-[1220px]">
            <Routes>
              {routes.map(({ path, component: Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
