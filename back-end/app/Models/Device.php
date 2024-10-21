<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;
    protected $table = 'devices'; 
    protected $fillable = [
        'brand', 'model', 'gb', 'battery', 'imei', 'purchase_price', 'sale_price', 'from_whom'
    ];
    
}
