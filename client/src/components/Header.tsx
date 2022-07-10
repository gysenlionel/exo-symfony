import * as React from "react";
import { Link } from "react-router-dom";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="mb-4">
      <nav className="h-20 bg-slate-900">
        <ul className="flex justify-center items-center text-slate-50 h-full ">
          <Link to="/">
            <li className="mr-3 cursor-pointer hover:underline hover:decoration-2 hover:decoration-slate-50">
              Home
            </li>
          </Link>
          <Link to="/favoris">
            <li className="ml-3 cursor-pointer hover:underline hover:decoration-2 hover:decoration-slate-50">
              Favoris
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
