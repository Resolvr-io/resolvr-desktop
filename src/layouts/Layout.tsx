import Header from "~/components/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="m-auto w-full max-w-screen-xl px-4">
      <Header />
      <Outlet />
    </div>
  );
}
