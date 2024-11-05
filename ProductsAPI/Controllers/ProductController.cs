using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Models;
using ProductsAPI.Services;
using System.Collections.Generic;

namespace ProductsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
      {
          [HttpGet]
          public ActionResult<List<Products>> GetProducts()
          {
              return ProductsService.GetProducts();
          }
          [HttpGet("id")]
          puplic ActionResult<Product> GetProduct(int id){
            var prod = ProductsService.GetProduct(id);
            if (prod is null){
              return NotFound()
            }
            return prod;
          }
          [HttpPost]
          public IActionResult AddProduct(Product prod){
            if(prod is null){
              return NotFound
            }
            ProductsService.AddProduct(prod)
            return Ok()
          }
          [HttpUpdate]
          public IActionResult UpdateProduct(int i, Product prod){
            var product = ProductsService.GetProduct(id);
            if(product is null)
              return NotFound();
             
            prod.Id = product.Id;
            ProductsService.UpdateProduct(prod);
            return Ok();
          }
          [HttpDelete]
          public IActionResult DeleteProduct(int i){
            var product = ProductsService.GetProduct(id);
            if(product is null)
              return NotFound();
             
            ProductsService.DeleteProduct(i);
            return Ok();
          }

      }

}
