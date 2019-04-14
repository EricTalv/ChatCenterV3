<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class MeController extends Controller
{
    protected $auth;

    public function _construct(JWTAuth $auth)
    {
        $this->auth = $auth;
    }

    public function index(Request $request)
    {
        return response()->json([
            'success' => true,
            'data' => $request->user()
        ]);
    }

    public function logout()
    {
        $this->auth->invalidate();

        return response()->json([
            'success' => true,
        ]);

    }
}
