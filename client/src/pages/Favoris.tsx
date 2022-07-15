import * as React from "react";
import useFetch from "../hooks/useFetch";
import { IHotelType } from "../types/hotels";
import { getIdFromSlug } from "../utils/getIdFromSlug";

interface IFavorisProps {}

interface IDataHotels {
  data: IHotelType[];
  isLoading: boolean;
}
const Favoris: React.FunctionComponent<IFavorisProps> = (props) => {
  const userId: number = parseInt(process.env.REACT_APP_USER as string);
  const { data: hotels, isLoading: loadHotels }: IDataHotels =
    useFetch(`/hotels/`);
  const hotelsArr: IHotelType[] | undefined = [];

  const hotelsArray = () => {
    hotels.map((h) => {
      h?.favoris?.map((slug) => {
        let id = getIdFromSlug(slug);
        if (id === userId.toString()) {
          hotelsArr.push(h);
        }
      });
    });
  };
  hotelsArray();

  return (
    <main>
      {loadHotels ? (
        <h4 className="font-medium flex justify-center items-center ">
          ...loading
        </h4>
      ) : (
        <>
          {hotelsArr.length > 0 ? (
            hotelsArr.map((hotel) => (
              <div
                className="w-auto h-16 flex justify-center items-center rounded shadow font-Taviraj font-medium bg-slate-300 mb-4 mx-4"
                key={hotel.id}
              >
                <h3>{hotel.name}</h3>
                <div className="mt-1"></div>
              </div>
            ))
          ) : (
            <div className="flex justify-center font-medium">No favourites</div>
          )}
        </>
      )}
    </main>
  );
};

export default Favoris;
