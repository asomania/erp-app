import { Products, columns } from "./utils/columns";
import { DataTable } from "./utils/dataTable";

function getData(): Products[] {
  return [
    {
      id: "1",
      text: "test",
      date: new Date(),
      imei: "1234567890",
      price: 100,
      fromWhom: "John Doe",
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
