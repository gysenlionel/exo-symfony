<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Repository\HotelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class RemoveFavoris extends AbstractController
{
    protected $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function __invoke(Request $request, User $data, HotelRepository $hotelRepo)
    {

        $key = 'hotelId';
        $hotelId = $request->attributes->get($key);

        $user = $data;
        $favorisHotel =  $hotelRepo->findOneBy(['id' => $hotelId]);

        $user->removeFavori($favorisHotel);

        $this->em->flush();
        return $user;
    }
}