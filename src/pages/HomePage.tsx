import BountyFeed from "~/components/bounty-feed/BountyFeed";
import BountyTags from "~/components/bounty-feed/BountyTags";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import useAuthStore from "~/store/auth-store";
import { type Filter } from "nostr-tools";

export default function HomePage() {
  const selectedTab = "open";

  const { pubkey } = useAuthStore();

  const filter: Filter = {
    kinds: [30050],
    limit: 10,
  };

  if (selectedTab === "open") {
    filter["#s"] = ["open"];
  }

  // if (selectedTab === "posted") {
  //   filter.authors = [publicKey];
  // }

  // if (selectedTab === "assigned") {
  //   filter["#p"] = [publicKey];
  // }

  return (
    <div className="w-full flex-col items-center">
      {pubkey && (
        <div className="flex flex-col py-4">
          <Tabs defaultValue={selectedTab}>
            <div className="flex items-center justify-between">
              <h1 className="select-none text-center text-3xl font-bold">
                Bounties
              </h1>
              {/* TODO: figure out why this isn't showing the tabs*/}
              {/* <div className="mr-1 flex items-center"> */}
              {/*   <TabsList className="bg-secondary/90"> */}
              {/*     <TabsTrigger asChild value="open"></TabsTrigger> */}
              {/*     <TabsTrigger asChild value="posted"></TabsTrigger> */}
              {/*   </TabsList> */}
              {/* </div> */}
            </div>
          </Tabs>

          <div className="mb-2 mt-3 flex gap-x-2">
            <BountyTags />
          </div>
        </div>
      )}
      <BountyFeed initialBounties={[]} filter={filter} eventKey={selectedTab} />
    </div>
  );
}
