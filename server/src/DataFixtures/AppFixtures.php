<?php

namespace App\DataFixtures;

use App\Entity\Hotel;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        for ($i = 0; $i < 10; $i++) {

            $user = (new User())
                ->setFirstName($faker->firstName())
                ->setLastName($faker->lastName())
                ->setEmail($faker->email());

            $manager->persist($user);
        }

        for ($i = 0; $i < 20; $i++) {
            $hotelName = 'Hotel ' . $faker->name();
            $hotel = (new Hotel())->setName($hotelName);

            $manager->persist($hotel);
        }

        $manager->flush();
    }
}