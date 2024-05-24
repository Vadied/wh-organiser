import Link from "next/link";

import { menuItems } from "@/assets/navigation";
import { usePathname, useSearchParams } from "next/navigation";
const Menu = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = searchParams.toString();
  console.log("params", params);
  console.log(pathname);

  return (
    <>
      {menuItems.map(({ url, title }) => (
        <li key={title}>
          <Link href={`${url}?${params}`}>{title}</Link>
        </li>
      ))}
    </>
  );
};

export default Menu;
