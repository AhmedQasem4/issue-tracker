"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
const NavBar = () => {

  return (
    <Container>
      <nav className="border-b mb-5 px-5 py-3">
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug size={20} />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </nav>
    </Container>
  );
};

const AuthStatus = () => {
  const { data: session, status } = useSession();
  if(status === 'loading') return null;
  
  if(status === 'unauthenticated') return (
      <Link href="/api/auth/signin">Log in</Link>
  )
  
  return (
    <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              className="cursor-pointer"
              fallback="?"
              size="2"
              radius="full"
              src={session!.user?.image!}
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{session!.user?.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Box>
  );
};

const NavLinks = () =>{
  
  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];

  const currentPath = usePathname();
  
  return(
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
  )
}
export default NavBar;
