import React from "react";
import TableComponent from "./table";
import AddProduct from "./addProduct";
import DatePicker from "./datePicker";
import { ModeToggle } from "./toogleTheme";
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard p-4 flex flex-col">
      <div className="flex justify-between">
        <img src="logo.png" alt="images" className="w-20 h-20" />
        <ModeToggle />
      </div>
      <div className="flex flex-col px-20">
        <AddProduct />
        <DatePicker />
        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;
