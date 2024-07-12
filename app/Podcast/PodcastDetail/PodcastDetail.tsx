import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Read from "../../../components/Read/Read";
import fetchData from "../../../shared/data";
import { IRead } from "../../../shared/interface";

type Props = {};

const PodcastDetail = (props: Props) => {

  const podcastSample = {
    published_date: "",
    published_link: "",
    title: "",
    body: "",
    body_html: "",
    slug: "",
  };
  
  const [podcast, setPodcast] = useState<IRead>(podcastSample);

  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.split("/").at(-1);

    const getPodcast = async () => {
      const { data } = await fetchData(`v1/view/podcast/${id}/`);
      setPodcast({ ...data });
    };
    getPodcast();
  }, [pathname]);

  return <Read {...podcast} />;
};

export default PodcastDetail;
