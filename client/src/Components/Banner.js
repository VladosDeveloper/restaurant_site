import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <>
      <section className="banner" id="banner">
        <div className="content">
          <h2>Всегда выбирайте лучшее</h2>
          <p>
            Наше{" "}
            <Link to="/login">
              <span>кафе</span>
            </Link>{" "}
            - это качественная кухня, акутальный дизайн, разумные цены,
            безупречный сервис. <br />
            Нам нравится легкая и дружелюбная атмосфера, когда каждый гость
            чувствует себя "как в своей тарелке"
          </p>
          <a href="#menu" className="btn">
            Наше меню
          </a>
        </div>
      </section>
    </>
  );
}

export default Banner;
