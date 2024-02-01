import { Toaster } from "~/components/ui/sonner";
import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./layouts/Login";
import BountyPage from "./pages/BountyPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";

// import BlogPage from "./pages/BlogPage";
// import Header from "./components/header/Header";
// import WritePage from "./pages/WritePage";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/b/:naddr" element={<BountyPage />} />
        </Route>
        <Route element={<Login />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Route>

        {/* <Route path="/write" element={<WritePage />} /> */}
        {/* <Route path="blog/:naddr" element={<BlogPage />} /> */}
      </Routes>
      <Toaster />
    </>
  );
}
