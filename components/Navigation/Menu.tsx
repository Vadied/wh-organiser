import Link from "next/link";

import { menuItems } from "@/assets/navigation";
import { useSearchParams } from "next/navigation";
const Menu = () => {
  const searchParams = useSearchParams();
  const params = searchParams.toString();

  return (
    <>
      {menuItems.map(({ url, title, children }) => (
        <li className="text-3xl mb-4" key={title}>
          <Link href={`${url}?${params}`}>{title}</Link>
          {children?.length && (
            <ul className="pl-4">
              {children.map(({ url, title }) => (
                <li className="text-2xl m-2" key={title}>
                  <Link href={`${url}?${params}`}>{title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Menu;
