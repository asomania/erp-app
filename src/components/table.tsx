import { Products, columns } from "./utils/columns";
import { DataTable } from "./utils/dataTable";

function getData(): Products[] {
  return [
    {
      id: "1",
      brand: "apple",
      model: "iphone 12",
      gb: 100,
      battery: 100,
      fromWhom: "test",
      imei: "1234567890",
      pricePurchase: 100,
      priceSale: 100,
      date: new Date(),
    },
    {
      id: "1",
      model: "iphone 12",
      brand: "apple",
      gb: 100,
      battery: 100,
      fromWhom: "test",
      imei: "1234567890",
      pricePurchase: 100,
      priceSale: 100,
      date: new Date(),
    },
  ];
}

const TableComponent = () => {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default TableComponent;
