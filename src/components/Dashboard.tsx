import React from "react";
import TableComponent from "./table";
import AddProduct from "./addProduct";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard p-4 flex flex-col">
      <div className="flex ">
        <img src="logo.jpeg" alt="images" className="w-20 h-20" />
      </div>
      <div className="flex flex-col px-20">
        <AddProduct />
        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;
