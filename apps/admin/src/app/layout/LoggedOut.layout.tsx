import React from "react";
import { Outlet } from "react-router-dom";

export interface LoggedOutLayoutProps {
  children?: React.ReactNode;
}

const LoggedOutLayout = ({ children }: LoggedOutLayoutProps) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LoggedOutLayout;
