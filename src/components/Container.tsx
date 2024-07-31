import classNames from "classnames";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("max-w-[80rem] mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
