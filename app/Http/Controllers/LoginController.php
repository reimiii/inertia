<?php

namespace App\Http\Controllers;

class LoginController extends Controller
{
    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store()
    {

    }
}