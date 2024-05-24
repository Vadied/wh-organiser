import Link from "next/link";

import { admin, rules, home, missions, generation } from "@/assets/navigation";
const Menu = () => {
  return (
    <>
      <li>
        <Link href={home.url}>{home.title}</Link>
      </li>
      <li>
        <Link href={admin.url}>{admin.title}</Link>
      </li>
      <li>
        <Link href={rules.url}>{rules.title}</Link>
      </li>
      <li>
        <Link href={missions.url}>{missions.title}</Link>
      </li>
      <li>
        <Link href={generation.url}>{generation.title}</Link>
      </li>
    </>
  );
};

export default Menu;
