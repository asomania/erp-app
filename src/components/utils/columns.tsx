"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
  id: string;
  text: string;
  date: Date;
  imei: string;
  price: number;
  fromWhom: string;
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "text",
    header: "Text",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "imei",
    header: "IMEI",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "fromWhom",
    header: "From Whom",
  },
];
