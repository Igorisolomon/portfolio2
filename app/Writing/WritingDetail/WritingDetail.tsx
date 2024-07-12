import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Read from "../../../components/Read/Read";
import fetchData from "../../../shared/data";
import { IRead } from "../../../shared/interface";

type Props = {};

const WritingDetail = (props: Props) => {
  const blogSample = {
    published_date: "",
    title: "",
    body: "",
    body_html: "",
    slug: "",
  };

  const [blog, setBlog] = useState<IRead>(blogSample);

  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.split("/").at(-1);

    const getPost = async () => {
      const { data } = await fetchData(`v1/view/blog/${id}/`);
      setBlog({ ...data });
    };
    getPost();
  }, [pathname]);

  return <Read {...blog} />;
};

export default WritingDetail;
