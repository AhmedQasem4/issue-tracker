"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";
const NavBar = () => {
  const currentPath = usePathname();
  const {data: session, status} = useSession();

  return (
    <nav className="flex space-x-6 border-b mb-5 p-x-5 h-14 items-center">
      <Link href="/">
        <AiFillBug size={20} />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === 'authenticated' && <Link href="/api/auth/signout">Log out</Link>}
        {status === 'unauthenticated' && <Link href="/api/auth/signin">Log in</Link>}
      </Box>
    </nav>
  );
};

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "issues", href: "/issues" },
];

export default NavBar;
