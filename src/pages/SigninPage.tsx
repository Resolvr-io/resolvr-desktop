import { useState } from "react";

import { invoke } from "@tauri-apps/api/tauri";
import { Button } from "~/components/ui/button";
import useAuthStore from "~/store/auth-store";
import { nip19 } from "nostr-tools";
import { useNavigate } from "react-router-dom";

export default function UserAuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setPubkey } = useAuthStore();

  const navigate = useNavigate();

  const signInWithExtension = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setIsLoading(true);

    const npub = (await invoke("login")) as string;

    const pubkey = nip19.decode(npub).data as string;

    setPubkey(pubkey);

    navigate("/");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center pt-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-[22rem]">
        <div className="flex w-full flex-col space-y-4">
          <div className="flex w-full flex-col space-y-4 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>
            {/* <p className="text-sm text-muted-foreground"> */}
            {/*   New to Nostr?{" "} */}
            {/*   <Link */}
            {/*     to="/register" */}
            {/*     className="font-semibold text-indigo-500 dark:text-indigo-400" */}
            {/*   > */}
            {/*     Create an account */}
            {/*   </Link> */}
            {/* </p> */}
          </div>

          <Button
            className="flex gap-x-1"
            variant="outline"
            type="button"
            onClick={signInWithExtension}
            disabled={isLoading}
          >
            <svg
              className="-ml-3.5 -mt-0.5 h-6 w-6 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="m210.81,116.2v83.23c0,3.13-2.54,5.67-5.67,5.67h-68.04c-3.13,0-5.67-2.54-5.67-5.67v-15.5c.31-19,2.32-37.2,6.54-45.48,2.53-4.98,6.7-7.69,11.49-9.14,9.05-2.72,24.93-.86,31.67-1.18,0,0,20.36.81,20.36-10.72,0-9.28-9.1-8.55-9.1-8.55-10.03.26-17.67-.42-22.62-2.37-8.29-3.26-8.57-9.24-8.6-11.24-.41-23.1-34.47-25.87-64.48-20.14-32.81,6.24.36,53.27.36,116.05v8.38c-.06,3.08-2.55,5.57-5.65,5.57h-33.69c-3.13,0-5.67-2.54-5.67-5.67V55.49c0-3.13,2.54-5.67,5.67-5.67h31.67c3.13,0,5.67,2.54,5.67,5.67,0,4.65,5.23,7.24,9.01,4.53,11.39-8.16,26.01-12.51,42.37-12.51,36.65,0,64.36,21.36,64.36,68.69Zm-60.84-16.89c0-6.7-5.43-12.13-12.13-12.13s-12.13,5.43-12.13,12.13,5.43,12.13,12.13,12.13,12.13-5.43,12.13-12.13Z"></path>
            </svg>
            Nostr Extension
          </Button>
        </div>
      </div>
    </div>
  );
}
