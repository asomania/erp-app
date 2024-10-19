"use client";

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

const AddProduct = () => {
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
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Ürün markası
              </Label>
              <Input id="brand" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="model" className="text-right">
                Ürün Modeli
              </Label>
              <Input id="model" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gb" className="text-right">
                Ürün Gb
              </Label>
              <Input id="gb" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="battery" className="text-right">
                Ürün Batarya
              </Label>
              <Input id="battery" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pricePurchase" className="text-right">
                Ürün Alış Fiyatı
              </Label>
              <Input
                id="pricePurchase"
                value="@peduarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priceSale" className="text-right">
                Ürün Satış Fiyatı
              </Label>
              <Input id="priceSale" value="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imei" className="text-right">
                IMEI
              </Label>
              <Input id="imei" value="@1232131" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fromWhom" className="text-right">
                Kimden
              </Label>
              <Input id="fromWhom" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Ürün Ekle</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AddProduct;
