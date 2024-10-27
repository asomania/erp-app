import { useEffect, useState } from "react";
import { Products, columns } from "./utils/columns";
import { DataTable } from "./utils/dataTable";
import api from "../api/index";
import { ProductCard } from "./utils/Products";

const TableComponent = () => {
  const [prodData, setProdData] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Products[]>("/products");
        setProdData(response.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-10">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={prodData} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {prodData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
