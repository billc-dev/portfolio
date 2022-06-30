import React, { FC } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: JSX.Element;
}

const Button: FC<Props> = ({ children, icon, className, ...props }) => {
  return (
    <button
      className={
        "flex items-center whitespace-nowrap rounded-lg bg-zinc-900 px-2 py-1 text-lg font-semibold transition-colors hover:bg-zinc-800 " +
        className
      }
      {...props}
    >
      {icon && <div className="mr-2 h-6 w-6">{icon}</div>}
      {children}
    </button>
  );
};

export default Button;
