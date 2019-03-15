<?php

use App\Content;
use Faker\Generator as Faker;

$factory->define(Content::class, function (Faker $faker) {
    return [
        'title' => $faker->unique()->word,
        'body' => $faker->text
    ];
});
