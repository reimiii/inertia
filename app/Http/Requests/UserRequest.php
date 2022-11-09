<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'username' => ['required', 'string', 'max:25', 'unique:users', 'alpha_num'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'name' => ['required', 'string', 'max:255'],
            'location' => ['required', 'string', 'max:255'],
            'password' => ['required', Password::default()],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}