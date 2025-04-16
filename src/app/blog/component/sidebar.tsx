"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const SideBar = ({ items }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (blogId) => {
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
