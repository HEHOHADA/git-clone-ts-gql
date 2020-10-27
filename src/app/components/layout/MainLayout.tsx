import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";

const MainLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default MainLayout;
