import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import { IHotelType } from "../types/hotels";
import Card from "../components/Card";
import { IUserType } from "../types/users";
import { getIdFromSlug } from "../utils/getIdFromSlug";
import axios from "axios";

interface IHomeProps {}

interface IDataHotels {
  data: IHotelType[];
  isLoading: boolean;
  error: any;
  reFetch: () => Promise<void>;
}

interface IDataUsers {
  data: IUserType;
  isLoading: boolean;
  error: any;
  reFetch: () => Promise<void>;
}
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const userId: number = parseInt(process.env.REACT_APP_USER as string);
  const API: string = process.env.REACT_APP_API as string;
  const {
    data: hotels,
    isLoading: hotelsLoading,
    error: hotelsError,
    reFetch: reFetchHotels,
  }: IDataHotels = useFetch(`/hotels?page=1`);

  const {
    data: user,
    isLoading: usersLoading,
    error: usersError,
    reFetch: reFetchUsers,
  }: IDataUsers = useFetch(`/users/${userId}`);

  const userFav = user?.favoris?.map((fav) => getIdFromSlug(fav));

  const handleAdd = useMemo(
    () => async (hotelId: number) => {
      try {
        const res = await axios.get(`${API}/users/${userId}/addfav/${hotelId}`);
        reFetchHotels();
        reFetchUsers();
      } catch (err) {
        console.error(err);
      }
    },
    []
  );
  const handleRemove = useMemo(
    () => async (hotelId: number) => {
      try {
        const res = await axios.get(
          `${API}/users/${userId}/removefav/${hotelId}`
        );
        reFetchHotels();
        reFetchUsers();
      } catch (err) {
        console.error(err);
      }
    },
    []
  );

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
