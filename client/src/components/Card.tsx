import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { IHotelType } from "../types/hotels.model";

interface ICardProps {
  hotel: IHotelType;
  userFav?: string[];
  handleAdd: (hotelId: number) => Promise<void>;
  handleRemove: (hotelId: number) => Promise<void>;
}

const Card: React.FunctionComponent<ICardProps> = ({
  hotel,
  userFav,
  handleAdd,
  handleRemove,
}) => {
  return (
    <div className="w-auto h-16 text-center rounded shadow font-Taviraj font-medium bg-slate-300">
      <h3>{hotel.name}</h3>
      <div className="mt-1">
        {userFav && userFav.includes(hotel.id.toString()) ? (
          <FontAwesomeIcon
            icon={solidHeart}
            className="cursor-pointer text-red-500"
            onClick={() => handleRemove(hotel.id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            className="cursor-pointer text-red-500"
            onClick={() => handleAdd(hotel.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
