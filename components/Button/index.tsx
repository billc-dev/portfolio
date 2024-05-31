import React, { AnchorHTMLAttributes, FC } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon?: JSX.Element;
}

const Button: FC<Props> = ({ children, icon, className, ...props }) => {
  return (
    <a
      className={
        "flex items-center whitespace-nowrap rounded-lg bg-zinc-800 px-2 py-1 text-lg font-semibold transition-colors hover:bg-zinc-600 " +
        className
      }
      {...props}
    >
      {icon && <div className="mr-2 h-6 w-6">{icon}</div>}
      {children}
    </a>
  );
};

export default Button;
