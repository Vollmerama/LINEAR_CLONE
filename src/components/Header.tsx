import React from "react";
import { Logo } from "./icons/Logo";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "./Button";
import HamburgerIcon from "./icons/HamburgerIcon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link className="flex items-center" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
          Linear
        </Link>
        <nav className="h-full hidden md:block">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6 [&_a:hover]:text-grey [&_a]:transition-colors">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            {/*hidden lg-block defines the respomsivness*/}
            <li className="hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log in
          </Link>
          <Button className="btn-signup" href="#">
            Sign up
          </Button>
        </div>
        <button>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};

export default Header;
