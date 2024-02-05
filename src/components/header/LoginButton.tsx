import { Link } from "react-router-dom";

import { Button } from "../ui/button";

export default function LoginButton() {
  return (
    <Link to="/signin">
      <Button
        onClick={() => console.log("signing in")}
        variant="outline"
        size="sm"
      >
        login &rarr;
      </Button>
    </Link>
  );
}
