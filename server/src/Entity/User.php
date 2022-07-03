<?php

declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\AddFavoris;
use App\Controller\RemoveFavoris;

/**
 * @ApiResource(
 *      formats={"json"={"application/json"}},
 *      collectionOperations={"get","post"},
 *      itemOperations={"get","put","delete","patch",
 *          "add_favoris"={
 *              "method"="GET",
 *              "path"="/users/{id}/addfav/{hotelId}",
 *              "controller"=AddFavoris::class},
 *          "remove_favoris"={
 *              "method"="GET",
 *              "path"="/users/{id}/removefav/{hotelId}",
 *              "controller"=RemoveFavoris::class},})
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private string $firstName;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private string $lastName;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private string $email;

    /**
     * @ORM\ManyToMany(targetEntity=Hotel::class, mappedBy="favoris")
     */
    private Collection $favoris;

    public function __construct()
    {
        $this->favoris = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection<int, Hotel>
     */
    public function getFavoris(): Collection
    {
        return $this->favoris;
    }

    public function addFavori(Hotel $favori): self
    {
        if (!$this->favoris->contains($favori)) {
            $this->favoris[] = $favori;
            $favori->addFavori($this);
        }

        return $this;
    }

    public function removeFavori(Hotel $favori): self
    {
        if ($this->favoris->removeElement($favori)) {
            $favori->removeFavori($this);
        }

        return $this;
    }
}