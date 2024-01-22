import React, { HTMLProps } from "react";

interface Props {
  children: any;
  className?: any;
  onClick?: any;
}

const ButtonComponent = ({ children, ...restProps }: Props) => {
  const { className, onClick } = restProps;
  return <button {...restProps}>{children}</button>;
};

export default ButtonComponent;
