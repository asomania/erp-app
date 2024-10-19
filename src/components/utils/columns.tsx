"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
  id: string;
  brand: string;
  model: string;
  date: Date;
  imei: string;
  gb: number;
  battery: number;
  pricePurchase: number;
  priceSale: number;
  fromWhom: string;
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "model",
    header: "Model",
  },

  {
    accessorKey: "gb",
    header: "GB",
  },

  {
    accessorKey: "battery",
    header: "Battery",
  },
  {
    accessorKey: "imei",
    header: "IMEI",
  },
  {
    accessorKey: "pricePurchase",
    header: "Alış Fiyatı",
  },
  {
    accessorKey: "priceSale",
    header: "Satış Fiyatı",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "fromWhom",
    header: "From Whom",
  },
];
