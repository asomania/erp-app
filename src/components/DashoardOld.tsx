import React, { useEffect, useState } from "react";
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
  const [err, setError] = useState<string | null>(null);

  const handleDataFromChild = (childData: DateRange | undefined): void => {
    if (childData) {
      setDate(childData);
    }
  };
  const handleSearch = (): Promise<Products[]> => {
    console.log(model);
    console.log(date);
    console.log("deneme");
    return new Promise((resolve, reject) => {
      console.log(typeof date.from?.toISOString().split("T")[0]);
      api
        .get(
          `/products?start_date=${
            date.from?.toISOString().split("T")[0]
          }&end_date=${date.to?.toISOString().split("T")[0]}`
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  useEffect(() => {
    handleSearch()
      .then((data) => {
        console.log("worked");
        setDatas(data); // API’den dönen veriyi state’e atıyoruz
      })
      .catch(() => {
        setError("Bir hata oluştu.");
        console.log(err);
      });
  }, []); // Dependency array boş bırakılarak component ilk yüklendiğinde çağırılır.

  return (
    <div className="dashboard p-4 flex flex-col">
      <div className="flex justify-between">
        <img src="logo.png" alt="images" className="w-20 h-20" />
        <ModeToggle />
      </div>
      <div className="flex flex-col px-20">
        <AddProduct dataMethod={handleSearch} />
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

        <TableComponent prodData={datas} />
      </div>
    </div>
  );
};

export default Dashboard;
