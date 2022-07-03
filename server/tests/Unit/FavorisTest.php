<?php

declare(strict_types=1);

namespace App\Tests\Unit;

use App\Entity\User;
use App\Entity\Hotel;
use PHPUnit\Framework\TestCase;

class FavorisTest extends TestCase
{

    /**
     * User data
     *
     * @var User
     */
    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = new User();
    }

    public function testAddFavoris(): void
    {
        $value = new Hotel();

        $response = $this->user->addFavori($value);

        self::assertInstanceOf(User::class, $response);
        self::assertCount(1, $this->user->getFavoris());
        self::assertTrue($this->user->getFavoris()->contains($value));
    }

    public function testRemoveFavoris(): void
    {
        $value = new Hotel();

        $response = $this->user->removeFavori($value);

        self::assertInstanceOf(User::class, $response);
        self::assertCount(0, $this->user->getFavoris());
        self::assertFalse($this->user->getFavoris()->contains($value));
    }
}