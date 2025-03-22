import Link from "next/link";

interface NavItem {
  id: number;
  name: string;
  url: string;
}

const navItems: NavItem[] = [
  { id: 1, name: "Layihələr", url: "/projects" },
  { id: 2, name: "Qalareya", url: "/gallery" },
  { id: 3, name: "Haqqımızda", url: "/about" },
  { id: 4, name: "Əlaqə", url: "/contact" },
];

export const Nav = () => {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-row items-center gap-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative py-2 px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-200"
          >
            <Link
              href={item.url}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
