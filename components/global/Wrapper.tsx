import React, { ReactElement } from "react";

type ParamsProps = {
  children?: ReactElement;
};

const Wrapper = ({ children }: ParamsProps) => {
  return <div className="container mx-auto min-h-screen">{children}</div>;
};

export default Wrapper;
