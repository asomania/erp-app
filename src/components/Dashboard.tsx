import React, { useEffect, useState, useCallback } from "react";
import TableComponent from "./table";
import AddProduct from "./addProduct";
import DatePicker from "./datePicker";
import { ModeToggle } from "./toogleTheme";
import { DropdownMenuRadioGroupDemo } from "./dropdown";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import api from "../api";
import { DateRange } from "react-day-picker";
import { Products } from "./utils/columns";

const Dashboard: React.FC = () => {
  const [model, setModel] = useState("");
  const [datas, setDatas] = useState<Products[]>([]);
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [error, setError] = useState<string | null>(null);

  const updateDate = (childData: DateRange | undefined) => {
    if (childData) setDate(childData);
  };

  const handleSearch = useCallback(async () => {
    try {
      const { data } = await api.get(
        `/products?start_date=${
          date.from?.toISOString().split("T")[0]
        }&end_date=${date.to?.toISOString().split("T")[0]}`
      );
      setDatas(data);
    } catch (error) {
      setError("Bir hata oluştu.");
      console.error(error);
    }
  }, [date, model, error]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <div className="dashboard p-4 flex flex-col">
      <div className="flex justify-between">
        <img src="logo.png" alt="Logo" className="w-20 h-20" />
        <ModeToggle />
      </div>

      <div className="flex flex-col px-20 gap-6">
        <AddProduct dataMethod={handleSearch} />

        <div className="flex flex-row gap-6 items-center">
          <DatePicker sendDateToParent={updateDate} />

          <DropdownMenuRadioGroupDemo
            defaultValue="all"
            label="Model Seç"
            buttonText="Model"
            options={[
              { value: "all", label: "Hepsi" },
              { value: "iphone", label: "Iphone" },
              { value: "android", label: "Android" },
            ]}
            onValueChange={setModel}
          />

          <DropdownMenuRadioGroupDemo
            defaultValue="all"
            label="Durum sec"
            buttonText="Durum"
            options={[
              { value: "all", label: "Hepsi" },
              { value: "new", label: "Sıfır" },
              { value: "secondHand", label: "İkinci el" },
            ]}
            onValueChange={(value) => console.log(value)}
          />

          <Button
            variant="outline"
            className="w-[100px]"
            onClick={handleSearch}
          >
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <TableComponent prodData={datas} />
      </div>
    </div>
  );
};

export default Dashboard;
