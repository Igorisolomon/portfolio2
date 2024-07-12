import React from "react";
import { formatDate } from "../../../shared/functions";
import "./ListItem.scss";

type Props = {
  title: string;
  description: string;
  date: string;
};

const ListItem = ({title, description, date }: Props) => {
  return (
    <>
      <div className="listCard">
        <h2 className="title2">{title}</h2>
        <p className="body">{description}</p>
        <p className="date">{formatDate(date)}</p>
      </div>
    </>
  );
};

export default ListItem;
