using System;
using ProductsAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace ProductsAPI.Services
{
    public class ProductsService
    {
        static List<Products> ProductsList { get; }
        static int nextId = 3;

        static ProductsService()
        {
            ProductsList = new List<Products>
            {
                new Products { Id = 1, Name = "Product1", prodDate = "2024-10-23", pricePurchase = 500, priceSale = 700, count = 10 },
                new Products { Id = 2, Name = "Product2", prodDate = "2024-10-24", pricePurchase = 600, priceSale = 800, count = 15 }
            };
        }

        public static List<Products> GetProducts() => ProductsList;

        public static Products? GetProduct(int id) => ProductsList.FirstOrDefault(x => x.Id == id);

        public static void AddProduct(Products product)
        {
            product.Id = nextId++;
            ProductsList.Add(product);
        }

        public static void DeleteProduct(int id)
        {
            var product = GetProduct(id);
            if (product is null)
            {
                return;
            }
            ProductsList.Remove(product);
        }

        public static void UpdateProduct(Products product)
        {
            var index = ProductsList.FindIndex(p => p.Id == product.Id);
            if (index == -1)
            {
                return;
            }
            ProductsList[index] = product;
        }
    }
}
