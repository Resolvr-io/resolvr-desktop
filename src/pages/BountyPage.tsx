import BackButton from "~/components/bounty/BackButton";
import Bounty from "~/components/bounty/Bounty";
import InvalidNaddr from "~/components/bounty/InvalidNaddr";
import { nip19, type Filter } from "nostr-tools";
import { useParams, useSearchParams } from "react-router-dom";

export default function BountyPage() {
  let { naddr } = useParams();
  let [searchParams] = useSearchParams();
  const selectedTab = searchParams.get("tab") ?? "details";

  try {
    if (!naddr || nip19.decode(naddr).type !== "naddr") {
      return <InvalidNaddr />;
    }
  } catch (e) {
    return <InvalidNaddr />;
  }
  const decodedNaddr = nip19.decode(naddr);
  if (decodedNaddr.type !== "naddr") {
    return <InvalidNaddr />;
  }

  const addressPointer = decodedNaddr.data;

  if (!addressPointer) {
    return <InvalidNaddr />;
  }

  const kind = addressPointer.kind;
  if (kind !== 30050) {
    return <InvalidNaddr />;
  }

  const identifier = addressPointer.identifier;
  const pubkey = addressPointer.pubkey;

  if (!identifier || !pubkey) {
    return <InvalidNaddr />;
  }

  const filter: Filter = {
    kinds: [kind],
    limit: 1,
    "#d": [identifier],
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="flex min-h-screen w-full max-w-4xl flex-col">
        <BackButton />
        <Bounty
          initialBounty={undefined}
          filter={filter}
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
}
