// import { type UserWithKeys } from "~/types";

import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
// import { ThemeToggle } from "../ui/theme-toggle";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";
import useAuthStore from "~/store/auth-store";

export default function Header() {
  const { pubkey } = useAuthStore();

  return (
    <header className="mb-2 flex items-center justify-between py-4">
      <nav className="flex items-center">
        <Link className="hidden dark:block" to="/">
          <img className="w-[7.5rem]" src="/resolvr-logo-dark.png" alt="" />
        </Link>
        <Link className="dark:hidden" to="/">
          <img className="w-[7.5rem]" src="/resolvr-logo-light.png" alt="" />
        </Link>
      </nav>
      <div className="flex items-center justify-center gap-x-4">
        {pubkey && (
          <Button
            asChild
            variant="outline"
            className="border-primary hover:bg-primary/90"
            size="sm"
          >
            <Link to="/create">
              <Plus className="mr-1 h-4 w-4" />
              Bounty
            </Link>
          </Button>
        )}
        {/* <ThemeToggle /> */}
        {pubkey ? <UserProfile pubkey={pubkey} /> : <LoginButton />}
      </div>
    </header>
  );
}
