import React from "react";
import TableComponent from "./table";
import AddProduct from "./addProduct";
import DatePicker from "./datePicker";
import { ModeToggle } from "./toogleTheme";
import { DropdownMenuRadioGroupDemo } from "./dropdown";
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard p-4 flex flex-col">
      <div className="flex justify-between">
        <img src="logo.png" alt="images" className="w-20 h-20" />
        <ModeToggle />
      </div>
      <div className="flex flex-col px-20">
        <AddProduct />
        <div className="flex flex-row gap-6">
          {" "}
          <DatePicker />
          <DropdownMenuRadioGroupDemo
            defaultValue="all"
            label="Model sec"
            buttonText="Model"
            options={[
              { value: "all", label: "Hepsi" },
              { value: "iphone", label: "Iphone" },
              {
                value: "android",
                label: "Android",
              },
            ]}
            onValueChange={(value) => console.log(value)}
          />
        </div>

        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;
