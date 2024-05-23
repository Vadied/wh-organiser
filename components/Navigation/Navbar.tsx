import Link from "next/link";

import { admin, rules, home, missions } from "@/assets/navigation";
import Button from "../Button";

type Props = {
  toggle: () => void;
};
const Navbar = ({ toggle }: Props) => {
  return (
    <>
      <div className="w-full h-20 bg-background sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1>My organizer</h1>
            <ul className="hidden md:flex gap-x-6 text-white">
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
            </ul>
            <div className="md:hidden">
              <Button onClick={toggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
