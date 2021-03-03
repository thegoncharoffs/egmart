import React, { FC, useEffect, useRef, useState } from 'react';
import cx from "classnames";
import './Slideshow.scss';

export type SlideshowItem = {
  title: string;
  text: string;
  image: string;
}

type Props = {
  items: SlideshowItem[];
  timeInterval?: number;
  autoSlide?: boolean;
}
export const Slideshow: FC<Props> = ({ items, timeInterval = 4000, autoSlide = true }) => {
  const [index, setIndex] = useState(0);
  const [shift, setShift] = useState(0);
  const getTripleArray = (): SlideshowItem[] => {
    return [
      items[index - 1 < 0 ? items.length - 1 : index - 1],
      items[index],
      items[index + 1 > items.length - 1 ? 0 : index + 1],
    ];
  };

  const [slides, setSlides] = useState<SlideshowItem[]>(getTripleArray());
  const timer = useRef<any>();

  useEffect(() => {
    if (autoSlide) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        moveSlide(+1);
      }, timeInterval);
    }

    return () => {
      clearInterval(timer.current);
    }
  }, [timeInterval, index]);

  const setNewTimeout = (): void => {
    clearInterval(timer.current);
    timer.current = setTimeout(() => {
      moveSlide(+1);
    }, timeInterval);
  }

  const updateArray = (): void => {
    setSlides(getTripleArray());
    setShift(0);
  }

  const moveSlide = (shift: number): void => {
    let newIndex = (index + shift) % items.length;
    if (newIndex === -1) {
      newIndex = items.length - 1;
    }
    if (newIndex === items.length) {
      newIndex = 0;
    }
    setShift(shift);
    setIndex(newIndex);
  }

  const clickHandler = (shift: number) => {
    moveSlide(shift);
    setNewTimeout();
  }

  return (
    <div className="slideshow">
      <button className="slideshow__button left" onClick={() => clickHandler(-1)}>&#10094;</button>
      <button className="slideshow__button right" onClick={() => clickHandler(+1)}>&#10095;</button>
      <div
        className={cx("slideshow__container",
          {
            'move-left': shift === -1,
            'move-right': shift === +1,
          }
        )
        }
        onTransitionEnd={updateArray}
      >
        {slides.map((item) =>
          <div
            className="slideshow__item"
            key={item.title}
          >
            <div
              className="slideshow__item-container"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="slideshow__item-tile">
                <h2>{item.title}</h2>
                <span>{item.text}</span>
              </div>
            </div>
          </div>)
        }
      </div>
      <div className="slideshow__indicators">
        {items.map((_, i) =>
          <div
            className={cx("slideshow__indicators-item", { active: i === index })}
            key={i}
          >
          </div>)
        }
      </div>
    </div>
  );
}
