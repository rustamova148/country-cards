import React from 'react'
import SingleCard from './SingleCard'

const data = [
  {
  title:"Azerbaijan",
  desc:"Capital of Azerbaijan is Baku.",
  img:"https://international-horizons.com/wp-content/uploads/2022/01/Blog-Baku.jpg",
  },
  {
  title:"Turkiye",
  desc:"Capital of Turkiye is Ankara.",
  img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/6f/ankara.jpg?w=700&h=500&s=1",
  },
  {
  title:"Germany",
  desc:"Capital of Germany is Berlin.",
  img:"https://destinationwellknown.com/wp-content/uploads/2022/10/berlin-city.jpg",
  },
  {
  title:"Greece",
  desc:"Capital of Greece is Athens.",
  img:"https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg",
  }
];

const Shop = () => {

  return (
    <div className='container'>
    {data.map((item,i) => (
    <SingleCard title={item.title} desc={item.desc} img={item.img} key={i} />
    ))}
  </div>
);
};



export default Shop