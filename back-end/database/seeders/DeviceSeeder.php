<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Device;
use Faker\Factory as Faker;

class DeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faker = Faker::create();

        for ($i = 0; $i < 50; $i++) {
            Device::create([
                'brand' => $faker->randomElement(['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi']),
                'model' => $faker->word . ' ' . $faker->numberBetween(1, 20),
                'gb' => $faker->randomElement([32, 64, 128, 256, 512]),
                'battery' => $faker->numberBetween(2000, 5000),
                'imei' => $faker->unique()->numerify('##############'),
                'purchase_price' => $faker->randomFloat(2, 100, 800),
                'sale_price' => $faker->randomFloat(2, 150, 1000),
                'from_whom' => $faker->name,
            ]);
        }
    }
}
