import * as React from "react";
import useFetch from "../hooks/useFetch";
import { IHotelType } from "../types/hotels.model";
import Card from "../components/Card";
import { IUserType } from "../types/users.model";
import { removeSlug } from "../utils/removeSlug";
import { USER } from "../utils/User";
import axios from "axios";

interface IHomeProps {}

interface IDataHotels {
  data: IHotelType[];
  loading: boolean;
  error: any;
  reFetch: () => Promise<void>;
}

interface IDataUsers {
  data: IUserType[];
  loading: boolean;
  error: any;
  reFetch: () => Promise<void>;
}
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    reFetch: reFetchHotels,
  }: IDataHotels = useFetch(`/hotels?page=1`);

  const {
    data: users,
    loading: usersLoading,
    error: usersError,
    reFetch: reFetchUsers,
  }: IDataUsers = useFetch(`/users`);

  const userFav = users[USER]?.favoris?.map((fav) => removeSlug(fav));

  const handleAdd = async (hotelId: number) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/users/${USER + 1}/addfav/${hotelId}`
      );
      reFetchHotels();
      reFetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (hotelId: number) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/users/${USER + 1}/removefav/${hotelId}`
      );
      reFetchHotels();
      reFetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2 px-2">
      {hotels.map((hotel) => (
        <Card
          hotel={hotel}
          userFav={userFav}
          key={hotel.id}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      ))}
    </main>
  );
};

export default Home;
