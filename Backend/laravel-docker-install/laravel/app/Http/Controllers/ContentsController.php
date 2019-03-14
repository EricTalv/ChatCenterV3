<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;


class ContentsController extends Controller
{
    public function GetAllContents()
    {
        $contents = Content::paginate(15);

        return $contents;
    }
}
