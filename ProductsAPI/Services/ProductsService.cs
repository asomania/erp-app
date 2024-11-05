using System.Collections.Generic;
using System.Linq;
using ProductsAPI.Models;
using ProductsAPI.Data;

namespace ProductsAPI.Services
{
    public class ProductsService
    {
        private readonly ApplicationDbContext _context;

        public ProductsService(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Products> GetProducts() => _context.Products.ToList();

        public Products? GetProduct(int id) => _context.Products.FirstOrDefault(p => p.Id == id);

        public void AddProduct(Products product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
        }

        public void DeleteProduct(int id)
        {
            var product = GetProduct(id);
            if (product is null) return;
            
            _context.Products.Remove(product);
            _context.SaveChanges();
        }

        public void UpdateProduct(Products product)
        {
            var existingProduct = GetProduct(product.Id);
            if (existingProduct is null) return;

            existingProduct.Name = product.Name;
            existingProduct.prodDate = product.prodDate;
            existingProduct.pricePurchase = product.pricePurchase;
            existingProduct.priceSale = product.priceSale;
            existingProduct.count = product.count;
            
            _context.SaveChanges();
        }
    }
}
