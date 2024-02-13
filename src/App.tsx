import { Toaster } from "~/components/ui/sonner";
import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./layouts/Login";
import BountyPage from "./pages/BountyPage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import UserPage from "./pages/UserPage";
import CreatePage from "./pages/CreatePage";

// import BlogPage from "./pages/BlogPage";
// import Header from "./components/header/Header";
// import WritePage from "./pages/WritePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/b/:naddr" element={<BountyPage />} />
          <Route path="/u/:npub" element={<UserPage />} />
        </Route>
        <Route element={<Login />}>
          <Route path="/signin" element={<SigninPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
