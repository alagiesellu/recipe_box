<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function sendResponse($result, string $message = 'Successful'): JsonResponse
    {
        $response = [
            'success' => true,
            'status'  => 200,
            'code'    => 'success',
            'message' => $message,
            'data'    => $result,
        ];

        return response()->json($response, 200);
    }
}
