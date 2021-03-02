import React, { FC } from 'react';
import { Slideshow } from '../Slideshow';
import chickens from '../../assets/images/chickens.jpg';
import './Main.scss';

export const Main: FC<{}> = () => {
  const slideshowItems = [
    {
      title: 'Title 1',
      text: 'Some text 1',
      image: chickens
    },
    {
      title: 'Title 2',
      text: 'Some text 2',
      image: chickens
    },
    {
      title: 'Title 3',
      text: 'Some text 4',
      image: chickens
    }
  ]
  return (
    <>
      <section className="carousel">
        <Slideshow items={slideshowItems}/>
      </section>
    </>
  );
}

