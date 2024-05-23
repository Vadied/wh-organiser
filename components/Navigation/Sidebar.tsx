import Link from "next/link";
import { admin, rules, home, missions } from "@/assets/navigation";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container bg-background-light fixed w-full h-full overflow-hidden justify-center grid pt-[120px] left-0 z-10 transition-all duration-500"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          left: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl w-full">
          <li className="mb-4 w-full bg-background-lighter">
            <Link href={home.url}>{home.title}</Link>
          </li>
          <li className="mb-4">
            <Link href={admin.url}>{admin.title}</Link>
          </li>
          <li className="mb-4">
            <Link href={rules.url}>{rules.title}</Link>
          </li>
          <li className="mb-4">
            <Link href={missions.url}>{missions.title}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
