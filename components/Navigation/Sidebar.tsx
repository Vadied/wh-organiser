import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { menuItems } from "@/assets/navigation";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const searchParams = useSearchParams();
  const params = searchParams.toString();

  return (
    <>
      <div
        className="sidebar-container bg-background-light fixed w-full h-full overflow-hidden justify-center grid pt-[120px] z-10 transition-all duration-500 top-0"
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

        <ul className="sidebar-nav leading-relaxed text-xl w-full">
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
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
