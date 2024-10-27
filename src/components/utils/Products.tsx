import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Products } from "@/types/products";

type ProductCardProps = {
  product: Products;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Ürün ID:</Label>
            <p>{product.id}</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Üretim Tarihi:</Label>
            <p>{product.prodDate}</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Alış Fiyatı:</Label>
            <p>{product.pricePurchase} TL</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Satış Fiyatı:</Label>
            <p>{product.priceSale} TL</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Stok Adedi:</Label>
            <p>{product.count}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Sil</Button>
        <Button>Güncelle</Button>
      </CardFooter>
    </Card>
  );
}

// Örnek kullanım:
// <ProductCard product={{ id: "1", name: "iPhone 13", prodDate: new Date("2023-01-01"), pricePurchase: 5000, priceSale: 7500, count: 20 }} />
