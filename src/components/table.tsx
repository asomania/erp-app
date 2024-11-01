import { Products, columns } from "./utils/columns";
import { DataTable } from "./utils/dataTable";
//import { ProductCard } from "./utils/Products";

const TableComponent = ({ prodData }: { prodData: Products[] }) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={prodData} />
      {
        //<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        //{prodData.map((product) => (
        //<ProductCard key={product.id} product={product} />
        //))}
        //</div>
      }
    </div>
  );
};

export default TableComponent;
