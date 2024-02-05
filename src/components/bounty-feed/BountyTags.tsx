import { useEffect, useState } from "react";

import { TAGS } from "~/lib/constants";
import { useNavigate, useParams } from "react-router-dom";

// import { useParams, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function BountyTags() {
  // const router = useRouter();
  // const params = useParams();

  const [selectedTag, setSelectedTag] = useState<string>("");
  let { tag } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const tagFromURL = tag;
    if (tagFromURL && typeof tagFromURL === "string") {
      setSelectedTag(tagFromURL);
    } else {
      setSelectedTag("");
    }
  }, [tag]);

  const handleValueChange = (newTag: string) => {
    if (newTag === "all") {
      navigate("/");
    } else navigate(`/tag/${newTag}`);
    setSelectedTag(newTag);
  };

  return (
    <Select onValueChange={handleValueChange} value={selectedTag}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select tag" />
      </SelectTrigger>
      <SelectContent>
        {["all", ...TAGS].map((tag: string) => (
          <SelectItem key={tag} value={tag}>
            {tag}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
