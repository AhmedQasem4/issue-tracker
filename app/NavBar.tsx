import Link from "next/link";

import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 p-x-5 h-14 items-center">
      <Link href="/">
        <AiFillBug size={20} />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
