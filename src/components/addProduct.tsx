"use client";
import { useState } from "react";
import api from "../api/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
interface ProductData {
  name: string;
  pricePurchase: number;
  priceSale: number;
  prodDate: string;
  count: number;
}

const AddProduct = ({ dataMethod }: { dataMethod: () => void }) => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    pricePurchase: 0,
    prodDate: new Date().toISOString().split("T")[0],
    priceSale: 0,
    count: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === "name" ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/product", productData);
      console.log("Product added successfully:", response.data);
      setProductData({
        name: "",
        pricePurchase: 0,
        priceSale: 0,
        prodDate: new Date().toISOString().split("T")[0],
        count: 0,
      });
      dataMethod();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="gap-2 flex justify-end px-24">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Ekle</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Ürün Ekle</SheetTitle>
            <SheetDescription>Ürün bilgilerini giriniz.</SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Ürün adi
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pricePurchase" className="text-right">
                  Ürün Alış Fiyatı
                </Label>
                <Input
                  id="pricePurchase"
                  name="pricePurchase"
                  type="number"
                  value={productData.pricePurchase}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priceSale" className="text-right">
                  Ürün Satış Fiyatı
                </Label>
                <Input
                  id="priceSale"
                  name="priceSale"
                  type="number"
                  value={productData.priceSale}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="count" className="text-right">
                  Adet
                </Label>
                <Input
                  id="count"
                  name="count"
                  type="number"
                  value={productData.count}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="proddate" className="text-right">
                Üretim Tarihi
              </Label>
              <Input
                id="proddate"
                name="proddate"
                type="date"
                value={productData.prodDate}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Ürün Ekle</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AddProduct;
