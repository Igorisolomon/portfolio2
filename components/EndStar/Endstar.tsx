import React from 'react'
import star from "../../assets/img/star.svg";

type Props = {}

const Endstar = (props: Props) => {
  return (
    <div className="endstar mt-5" style={{"paddingBottom": "200px"}}>
        <img src={star} alt="" className='px-2' />
        <img src={star} alt="" className='px-2' />
        <img src={star} alt="" className='px-2' />
    </div>
  )
}

export default Endstar