import { Outlet } from "react-router-dom";

import Bonjour from "./_components/bonjour";
import { DesktopNav, MobileNav } from "./_components/navigation";

function App() {
  return (
    <>
      <Bonjour />
      <MobileNav />
      <DesktopNav />

      <main className="p-2 grid sm:place-items-center sm:p-0 sm:pl-20 lg:pl-28 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;
