"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
  id: string;
  name: string;
  prodDate: Date;
  pricePurchase: number;
  priceSale: number;
  count: number;
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "prodDate",
    header: "Production Date",
  },
  {
    accessorKey: "pricePurchase",
    header: "Purchase Price",
  },
  {
    accessorKey: "priceSale",
    header: "Sale Price",
  },
  {
    accessorKey: "count",
    header: "Count",
  },
];
