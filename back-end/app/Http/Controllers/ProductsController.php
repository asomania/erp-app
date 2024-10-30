<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Http\Response;

class ProductsController extends Controller
{
   

    /**
     * Display a listing of the products.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }
    public function getDataByDate(Request $request)
    {
        // Başlangıç ve bitiş tarihlerini istekte alıyoruz
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        // Verileri belirli tarihler arasında getiriyoruz
        $data = Products::whereBetween('created_at', [$startDate, $endDate])->get();

        // Sonuçları JSON olarak döndür
        return response()->json($data);
    }

    /**
     * Store a newly created product in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'prodDate' => 'required|date',
            'pricePurchase' => 'required|integer',
            'priceSale' => 'required|integer',
            'count' => 'required|integer',
        ]);

        $product = Products::create($validatedData);
        return response()->json($product, Response::HTTP_CREATED);
    }

    /**
     * Display the specified product.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Products::findOrFail($id);
        return response()->json($product);
    }

    /**
     * Update the specified product in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Products::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'string',
            'prodDate' => 'date',
            'pricePurchase' => 'integer',
            'priceSale' => 'integer',
            'count' => 'integer',
        ]);

        $product->update($validatedData);
        return response()->json($product);
    }

    /**
     * Remove the specified product from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Products::findOrFail($id);
        $product->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
