"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 p-x-5 h-14 items-center">
      <Link href="/">
        <AiFillBug size={20} />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "issues", href: "/issues" },
];

export default NavBar;
