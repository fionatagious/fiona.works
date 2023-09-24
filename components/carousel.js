import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './item'

export default function MediaCarousel(props) {
  var items = [
    {
    name: "When a Cool, Shiny App Won’t Cut It: Recognizing the Limits of Technology in Addressing Homelessness — Code for America",
    description: "Working to find housing solutions for people experiencing homelessness shows that technology is just one piece of the puzzle",
    image: {
      src: "https://files.codeforamerica.org/2021/05/09204729/swap-e1621447855163.jpg",
      alt: "people experiencing homelessness lined up for shelter",
      height: "150",
    }
  },
  {
    name: "'A Terrible Idea'",
    description: "Amazon Expands Contactless ‘Palm’ Technology During Pandemic",
    image: {
      src: "https://digitalprivacy.news/wp-content/uploads/2021/04/AmazonOne7.png",
      alt: "palm scanners",
      height: "150",
    }
  },
  {
    name: "'Giving It Out Like Candy'",
    description: "Calif. Bill Seeks to Stop Police From Unbridled License-Plate Data Collection",
    image: {
      src: "https://digitalprivacy.news/wp-content/uploads/2021/04/LPR-Data-845x450.png?crop=1",
      alt: "automatic license plate reader (ALPR) data access",
      height: "150",
    }
  },
];

  return (
    <Carousel autoplay={false} sx={"maxWidth: 50%"}>
      {items.map((item, i) => <Item key={i} item={item}/>)}
    </Carousel>
  )
}