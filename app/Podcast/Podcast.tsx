import React, { useEffect, useState } from "react";
import List from "../../components/List/List";
import fetchData from "../../shared/data";
import { IAbout, IList } from "../../shared/interface";
import { ThreeDots } from "react-loader-spinner";
import apple from "../../assets/img/apple.svg";
import google from "../../assets/img/google.svg";
import spotify from "../../assets/img/spotify.svg";

import "./Podcast.scss";
import { Link } from "react-router-dom";

type Props = { data: IAbout };

const Podcast = (props: Props) => {
  const podcastSample = [
    {
      id: -99,
      title: "",
      summary: "",
      published_date: "",
      slug: "",
    },
  ];
  const [podcasts, setPodcasts] = useState<IList[]>(podcastSample);

  useEffect(() => {
    // fetch About
    const fetchBlog = async () => {
      const { data: blogs } = await fetchData("v1/view/podcast/");

      setPodcasts([...blogs]);
    };
    fetchBlog();
  }, []);

  const podcastList = {
    list: [...podcasts],
    listType: "podcast",
  };

  const featureList = props.data.featured_podcast.map((feature) => (
    <Link to={`${feature.slug}/${feature.id}`} key={feature.id} className="card">
      <div className="h4 body2">Feature</div>
      <div className="h3 title">{feature.title}</div>
      <div className="date">{feature.published_date}</div>
    </Link>
  ));

  const loadPage = (
    <div className="Podcast">
      <div className="text-center">
        <h2 className="">{props.data.podcast_title}</h2>
        {/* <p className="body2">by {props.data.podcast_author}</p> */}
        {/* <p className="subtitle">{props.data.podcast_subtitle}</p> */}
        <div className="feature">{featureList}</div>
        <div className="channel">
          <a href={props.data.spotify_podcast} target="_blank" rel="noreferrer">
            <img src={spotify} alt="" />
          </a>
          <a href={props.data.apple_podcast} target="_blank" rel="noreferrer">
            <img src={apple} alt="" />
          </a>
          <a href={props.data.google_podcast} target="_blank" rel="noreferrer">
            <img src={google} alt="" />
          </a>
        </div>
      </div>

      <div className="Podcast-list">
        <p className="body2">All episode</p>
        <List {...podcastList} />
      </div>
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

  return <>{podcastList.list.length ? loadPage : showLoader}</>;
};

export default Podcast;
