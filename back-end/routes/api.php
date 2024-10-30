<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::prefix('products')->group(function () {
    Route::get('/', [ProductsController::class, 'index']);
    Route::get('/{start_date}/{end_date}', [ProductsController::class, 'getDataByDate']); // Tarih aralığına göre ürünleri listelemek
    Route::post('/', [ProductsController::class, 'store']);
    Route::get('/{id}', [ProductsController::class, 'show']);
    Route::put('/{id}', [ProductsController::class, 'update']);
    Route::delete('/{id}', [ProductsController::class, 'destroy']);
});
