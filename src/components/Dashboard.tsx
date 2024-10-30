import React, { useState } from "react";
import TableComponent from "./table";
import AddProduct from "./addProduct";
import DatePicker from "./datePicker";
import { ModeToggle } from "./toogleTheme";
import { DropdownMenuRadioGroupDemo } from "./dropdown";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import api from "../api";

const Dashboard: React.FC = () => {
  const [model, setModel] = useState("");
  const [date, setDate] = useState<string | null>(null);

  const handleDataFromChild = (childData: string) => {
    setDate(childData);
  };
  const handleSearch = () => {
    return new Promise((resolve, reject) => {
      api
        .get(`/products?startDate=${date.from}&endDate=${date.to}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
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
          <DatePicker sendDateToParent={handleDataFromChild} />
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
            onValueChange={(value) => setModel(value)}
          />
          <DropdownMenuRadioGroupDemo
            defaultValue="all"
            label="Durum sec"
            buttonText="Durum"
            options={[
              { value: "all", label: "Hepsi" },
              { value: "new", label: "Sıfır" },
              {
                value: "secondHand",
                label: "İkinci el",
              },
            ]}
            onValueChange={(value) => console.log(value)}
          />
          <Button
            variant="outline"
            className="w-[100px]"
            onClick={() => {
              handleSearch();
            }}
          >
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;
