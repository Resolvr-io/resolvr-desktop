import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useRelayStore } from "~/store/relay-store";
import { nip19 } from "nostr-tools";
import { Link } from "react-router-dom";

// import RelaySheet from "../relays/RelaySheet";

type Props = {
  children: React.ReactNode;
};

export default function UserMenu({ children }: Props) {
  const pubkey = "";

  const { setRelaySheetOpen } = useRelayStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2">
        {pubkey && (
          <DropdownMenuItem asChild>
            <Link to={`/u/${nip19.npubEncode(pubkey)}`}>Profile</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Link to="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setRelaySheetOpen(true)}>
          {/* <RelaySheet> */}
          Relays
          {/* </RelaySheet> */}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => console.log("signing out")}
          className="dark:text-red-400 dark:focus:bg-red-400/10 dark:focus:text-red-400 "
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
