import React, { useEffect, useState } from "react";

import List from "../../components/List/List";
import fetchData from "../../shared/data";
import { ThreeDots } from "react-loader-spinner";

import "./Writing.scss";
import { IList } from "../../shared/interface";

const Writing = () => {
  const blogSample = [
    {
      id: -99,
      title: "",
      summary: "",
      published_date: "",
      slug:"",
    },
  ];
  const [blogs, setBlogs] = useState<IList[]>(blogSample);

  useEffect(() => {
    // fetch About
    const fetchBlog = async () => {
      const { data: blogs } = await fetchData("v1/view/blog/");

      setBlogs([...blogs]);
    };
    fetchBlog();
  }, []);


  const writingList = {
    list: [...blogs],
    listType: "post",
  };

  const loadPage = (
    <div className="Writing">
      <hr />
      <List {...writingList} />
    </div>
  );

  const showLoader = (
    <div className="List-centralize">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );

  return <>{writingList.list.length ? loadPage : showLoader}</>;
};

export default Writing;
