import React from "react";
import { formatDate } from "../../shared/functions";
import { IRead } from "../../shared/interface";
import "./Read.scss";


const Read = (props: IRead) => {
  const author = false ? (
    <p className="body2">Written by {'Ebuka'}</p>
  ) : (
    ""
  );

  const podcast = props.published_link ? (
    <div className="iframe">
      <iframe
        title={props.title}
        src={props.published_link}
        height="102px"
        width="100%"
        scrolling="no"
      ></iframe>
    </div>
  ) : (
    ""
  );
  return (
    <div className="read">
      <h1 className="title">{props.title}</h1>
      {author}
      <p className="date">{formatDate(props.published_date)}</p>
      {podcast}
      <div className="body" dangerouslySetInnerHTML={{ __html: props.body_html }} />
    </div>
  );
};

export default Read;
