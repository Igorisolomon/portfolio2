import React from 'react'
import Detail from '../../components/Detail/Detail';
import { IAbout } from '../../shared/interface';

type Props = { data: IAbout }

const About = (props: Props) => {
    const detailProps = {
      title: "About",
      body: props.data.about_html
    }
    return (
      <>
          <Detail {...detailProps}/>
      </>
    );
}

export default About