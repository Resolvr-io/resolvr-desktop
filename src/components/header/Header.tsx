// import { type UserWithKeys } from "~/types";

import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
// import { ThemeToggle } from "../ui/theme-toggle";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

export default function Header() {
  const session = "";
  let loggedIn = false;
  let publicKey = "";

  // if (session?.user) {
  //   const user = session?.user as UserWithKeys;
  //   publicKey = user.publicKey;
  //   if (publicKey) {
  //     loggedIn = true;
  //   }
  // }

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
        {loggedIn && (
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
        {loggedIn ? <UserProfile pubkey={publicKey} /> : <LoginButton />}
      </div>
    </header>
  );
}
