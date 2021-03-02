import React, { FC, useEffect, useState } from 'react';
import cx from "classnames";
import './Slideshow.scss';

export type SlideshowItem = {
  title: string;
  text: string;
  image: string;
}
export const Slideshow: FC<{ items: SlideshowItem[] }> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [shift, setShift] = useState(0);

  const getInnerArray = (): SlideshowItem[] => {
    return [
      items[index - 1 < 0 ? items.length - 1 : index - 1],
      items[index],
      items[index + 1 > items.length - 1 ? 0 : index + 1],
    ];
  };

  const [innerArray, setInnerArray] = useState<SlideshowItem[]>(getInnerArray());

  const moveIndex = (shift: number): void => {
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

  return (
    <div className="slideshow">
      <button className="slideshow__button left" onClick={() => moveIndex(-1)}>&#10094;</button>
      <button className="slideshow__button right" onClick={() => moveIndex(+1)}>&#10095;</button>
      <div
        className={cx("slideshow__container",
          {
            'move-left': shift === -1,
            'move-right': shift === +1,
          }
        )
        }
        onTransitionEnd={() => {
          setInnerArray(getInnerArray());
          setShift(0);
        }}
      >
        {innerArray.map((item) =>
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
