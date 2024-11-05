using System;

namespace ProductsAPI.Models;

public class Products
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime prodDate { get; set; }
    public int pricePurchase { get; set; }
    public int priceSale { get; set; }
    public int count { get; set; }
}