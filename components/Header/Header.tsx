import React from "react";
// import { Link, a } from "react-router-dom";
// import { Nav } from "react-bootstrap";
import "./Header.scss";
import { IAbout } from "@/utils/interface";

type Props = { data: IAbout };

const Header = (props: Props) => {
  let activeClassName = "active";

  return (
    <div className="header container">
      <div className="logo title2">
        <a href="/">{props.data.name}</a>
      </div>
      <div className="nav-tab tab">
        <ul className="justify-content-center nav-tab">
          <li>
            <a href="about" className="">
              About
            </a>
          </li>
          <li>
            <a href="writing" className="">
              Writing
            </a>
          </li>
          <li>
            <a href="podcast" className="">
              Podcast
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
