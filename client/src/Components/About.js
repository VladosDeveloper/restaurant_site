import React from "react";

function About(props) {
  return (
    <>
      <section className="about" id="about">
        <div className="row">
          <div className="col50">
            <h2 className="titleText">
              <span>О</span> нас
            </h2>
            <p>
              Мы рады приветствовать вас в нашем кафе. Мы - семья
              профессионалов, любящих свое дело. Главная задача нашего кафе -
              это внимательное и заботливое отношение к каждому гостю.
              <br />
              <br />
              Деловые обеды и ужины в уютной атмосфере. Два зала в разной
              стилистике, в одном из которых вы можете провести свое торжество.
              <br />
              <br />
              Желаем вам приятного отдыха и приятного аппетита!
            </p>
          </div>
          <div className="col50">
            <div className="imgBx">
              <img
                src="https://sun9-10.userapi.com/impf/c855336/v855336133/9f8e3/hcwxzM8wxeQ.jpg?size=780x1052&quality=96&sign=c28618cef97a8dfe8ad70a36c4b1eaa3&type=album"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
