import React from "react";
// import "./Detail.scss";

type Props = {
  title: string,
  body: string
};

const Detail = ({title, body}: Props) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="body" dangerouslySetInnerHTML={{ __html: body}} />
    </>
  );
};

export default Detail;
