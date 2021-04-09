import React from "react";
import "./Experts.css";

function Experts() {
  return (
    <section className="expert" id="expert">
      <div className="title">
        <h2 className="titleText">
          <span>Н</span>аши повара
        </h2>
        <p>В нашем кафе работают только профессионалы, любящие свое дело.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img
              src="https://sun9-70.userapi.com/impg/c858524/v858524616/15c723/_S-0i0_gz04.jpg?size=824x1030&quality=96&sign=9f6aa0e7ebce6555d8ad3b48315f6107&type=album"
              alt=""
            />
          </div>
          <div className="text">
            <h3>Комса Светлана </h3>
            <h3>
              <span>Опыт работы:</span> 8 лет
            </h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img
              src="https://sun9-32.userapi.com/impf/c836424/v836424629/5480d/5wIdRI3JWEo.jpg?size=608x1080&quality=96&sign=25a60c15d99a7c15b5c18e9c71cc4ced&type=album"
              alt=""
            />
          </div>
          <div className="text">
            <h3>Полещук Екатерина</h3>
            <h3>
              <span>Опыт работы:</span> 5 лет
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experts;
