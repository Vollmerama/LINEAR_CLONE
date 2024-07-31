import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const Button = ({ children, href, className }: ButtonProps) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default Button;
