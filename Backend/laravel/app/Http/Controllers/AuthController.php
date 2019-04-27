<?php

namespace App\Http\Controllers;

use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use function MongoDB\BSON\toJSON;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Hash;
use JWTAuth;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     *
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('name', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'success' => false,
                    'error' => 'Invalid Credentials'
                ], 422);
            } else {
                return response()->json([
                    'success' => true,
                    'data' => $request->user(),
                    'token' => $token
                ], 200);
            }
        } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'error' => 'could_not_create_token'
            ], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     *
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 400);
        } else {
            $user = User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json([
                'success' => true,
                'data' => $user,
                'token' => $token,
            ], 201);

        }
    }

    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            } else {
                return response()->json([
                    'data' => $user
                ], 200);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());

        }
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        try {
            return response()->json([
                'success' => true,
                'token' => auth()->refresh()
            ]);

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], $e->getStatusCode());
        }
    }

    public function logout()
    {
        try {
            return response()->json([
                'success' => true,
                'token' => auth()->logout()
            ], 205);

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json([
                'error' => $e->getMessage()
            ], $e->getStatusCode());
        }
    }
}