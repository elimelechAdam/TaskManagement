import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./_root/pages/Dashboard";
import { Login } from "./_auth/pages/Login";
import { AuthLayout } from "./_auth/AuthLayout";
import { Signup } from "./_auth/pages/Signup";
import { RootLayout } from "./_root/RootLayout";
import { Toaster, toast } from "sonner";
import { Content } from "./components/Content";
import { Settings } from "./_root/pages/Settings";
import { Project } from "./_root/pages/Project";

function App() {
  return (
    <div className="flex bg-[#dce0e8] h-screen p-4">
      <div className="flex w-full bg-[#f4f5f6] rounded-3xl overflow-hidden justify-center items-center align-middle">
        <Toaster richColors position="bottom-center" />
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<RootLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/content" element={<Content />} />
            <Route path="/project/:id" element={<Project />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
