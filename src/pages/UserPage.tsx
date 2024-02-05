import BountyFeed from "~/components/bounty-feed/BountyFeed";
import BackButton from "~/components/bounty/BackButton";
import ProfileCard from "~/components/profile/ProfileCard";
import { VANITY_PROFILES } from "~/lib/constants";
import { notFound } from "next/navigation";
import { nip19, type Filter } from "nostr-tools";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  let { npub } = useParams();
  if (!npub) {
    notFound();
  }

  let decodedNpub;

  if (npub in VANITY_PROFILES) {
    npub = VANITY_PROFILES[npub];
  }

  if (!npub) {
    notFound();
  }

  try {
    decodedNpub = nip19.decode(npub);
  } catch (e) {
    notFound();
  }

  if (!decodedNpub) {
    notFound();
  }

  if (decodedNpub.type !== "npub") {
    notFound();
  }

  const profilePublicKey = decodedNpub.data;

  console.log("profilePublicKey", profilePublicKey);

  const filter: Filter = {
    kinds: [30050],
    authors: [profilePublicKey],
    limit: 10,
  };

  return (
    <div className="flex flex-col py-4">
      <BackButton />
      <ProfileCard pubkey={profilePublicKey} />
      <div className="flex w-full flex-col">
        <BountyFeed
          filter={filter}
          eventKey={`profile-feed-${profilePublicKey}`}
          showProfileInfo={false}
        />
      </div>
    </div>
  );
}
