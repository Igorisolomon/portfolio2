import React from "react";
import Detail from "@/components/Detail/Detail";
import { IAbout } from "@/utils/interface";
import "./Home.scss";

type Props = { data: IAbout }

const Home = (props: Props) => {
  const detailProps = {
    title: props.data.intro_title,
    body: props.data.intro_description_html,
  }
  return (
    <>
        <Detail {...detailProps}/>
    </>
  );
};

export default Home;
