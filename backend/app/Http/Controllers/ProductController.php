<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum')->only(['store', 'update', 'destroy']);
    }

    public function index(): JsonResponse
    {
        $products = Product::with('user')->orderBy('id', 'desc')->get();

        return $this->sendResponse($products);
    }

    public function store(StoreProductRequest $request): JsonResponse
    {
        $data = $request->validated();

        $data['user_id'] = $request->user()->id;

        $product = Product::create($data);

        return $this->sendResponse($product);
    }

    public function show(Product $product): JsonResponse
    {
        return $this->sendResponse($product);
    }

    public function update(UpdateProductRequest $request, Product $product): JsonResponse
    {
        Gate::inspect('update', $product);

        $product->update($request->validated());

        return $this->sendResponse($product);
    }

    public function destroy(Product $product): JsonResponse
    {
        Gate::inspect('delete', $product);

        $response = $product->delete();

        return $this->sendResponse($response);
    }
}
