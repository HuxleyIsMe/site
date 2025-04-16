"use client";
import { useRouter, useSearchParams } from "next/navigation";
import type { MediumArticle } from "../types";

export const SideBar = ({ items }: { items: MediumArticle[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (blogId: MediumArticle["guid"]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("blog", blogId);
    router.push(`?${params.toString()}`);
  };

  return (
    <ul>
      {items.map((item) => {
        return (
          <li onClick={() => handleClick(item.guid)} key={item.guid}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};
