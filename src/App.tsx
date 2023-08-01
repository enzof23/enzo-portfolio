import { Outlet } from "react-router-dom";
import { DesktopNav, MobileNav } from "./_components/navigation";

function App() {
  return (
    <>
      <MobileNav />
      <DesktopNav />

      <main className="p-2 sm:p-4 sm:pl-20 lg:pl-28 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;
