import { useEffect, useState } from "react";
import { Products, columns } from "./utils/columns";
import { DataTable } from "./utils/dataTable";
import api from "../api/index";

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
    </div>
  );
};

export default TableComponent;
