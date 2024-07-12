import React from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem/ListItem";

import "./List.scss";
import { IList } from "../../shared/interface";

type Props = {
  listType: string;
  list: IList[]
};

const List = ({ listType, list }: Props) => {
  return (
    <div className="list">
      {list.map((item) => (
        <Link key={item.id} to={`/${listType}/${item.slug}/${item.id}`}>
          <ListItem
            title={item.title}
            description={item.summary}
            date={item.published_date}
          />
        </Link>
      ))}
    </div>
  );
};

export default List;
