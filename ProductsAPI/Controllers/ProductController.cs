using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Models;
using ProductsAPI.Data;
using ProductsAPI.Services;
using System.Collections.Generic;

namespace ProductsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductsService _productsService;

        public ProductController(ProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public ActionResult<List<Products>> GetProducts()
        {
            var products = _productsService.GetProducts(); // ProductsService ile değiştirildi
            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Products> GetProduct(int id)
        {
            var prod = _productsService.GetProduct(id); // ProductsService ile değiştirildi
            if (prod is null)
            {
                return NotFound();
            }
            return Ok(prod);
        }

        [HttpPost]
        public IActionResult AddProduct(Products prod)
        {
            if (prod is null)
            {
                return BadRequest("Product cannot be null."); // NotFound yerine BadRequest
            }
            _productsService.AddProduct(prod); // ProductsService ile değiştirildi
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Products prod)
        {
            var product = _productsService.GetProduct(id); // ProductsService ile değiştirildi
            if (product is null)
                return NotFound();

            prod.Id = product.Id; // Güncellenen ürünün ID'sini ayarlıyoruz
            _productsService.UpdateProduct(prod); // ProductsService ile değiştirildi
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _productsService.GetProduct(id); // ProductsService ile değiştirildi
            if (product is null)
                return NotFound();

            _productsService.DeleteProduct(id); // ProductsService ile değiştirildi
            return Ok();
        }
    }
}
