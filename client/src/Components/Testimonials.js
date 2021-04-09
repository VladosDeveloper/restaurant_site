import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";
import "./Testimonials.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Review from "./Review";
import { useStateValue } from "../useStateValue";

SwiperCore.use([Navigation, Pagination]);

function Testimonials() {
  const [{ reviewIsOpen, reviews }, dispatch] = useStateValue();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    await axios
      .get("/api/reviews")
      .then((res) => {
        dispatch({
          type: "GET_ITEMS",
          items: res.data,
        });
      })
      .catch((error) => {
        console.log("Произошла ошибка", error.message);
      });
  };
  useEffect(() => {
    getItems();
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="title white">
          <h2 className="titleText">
            <span>О</span>тзывы
          </h2>
          <p>Наших посетителей.</p>
        </div>
        <div className="content">
          {reviews.map((item, personIndex) => {
            const { _id, userName, image, description } = item;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === reviews.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={_id}>
                <div className="imgBx">
                  <img src={image} alt="" />
                </div>
                <div className="text">
                  <p>{description}</p>
                  <h3>{userName}</h3>
                </div>
              </article>
            );
          })}
          <button className="prev">
            <FiChevronLeft onClick={() => setIndex(index - 1)} />
          </button>
          <button className="next">
            <FiChevronRight onClick={() => setIndex(index + 1)} />
          </button>
        </div>
        {reviewIsOpen && <Review />}
        <button
          className="btn btn-modal"
          onClick={() => {
            document.body.style.overflow = "hidden";
            dispatch({
              type: "OPEN_REVIEW",
            });
          }}
        >
          Оставить отзыв
        </button>
      </section>
    </>
  );
}

export default Testimonials;
