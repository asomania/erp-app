import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { Button } from "./button";
import TableComponent from "../table";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Button>Click me</Button>
      <UserButton />
      <TableComponent />
    </div>
  );
};

export default Dashboard;
