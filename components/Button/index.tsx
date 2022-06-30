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
        "flex items-center font-semibold text-lg px-2 py-1 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-lg whitespace-nowrap " +
        className
      }
      {...props}
    >
      {icon && <div className="h-6 w-6 mr-2">{icon}</div>}
      {children}
    </button>
  );
};

export default Button;
