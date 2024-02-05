import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

export default function BackButton() {
  return (
    <Link to="/">
      {/* TODO: route back if routing back to / if not just route to / */}
      <Button
        variant="outline"
        className="flex dark:bg-secondary/70 dark:hover:bg-secondary/60"
      >
        <ArrowLeftIcon className="mr-1 h-4 w-4" />
        Back to all Bounties
      </Button>
    </Link>
  );
}
