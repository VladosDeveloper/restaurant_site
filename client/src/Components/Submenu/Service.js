import React, { useState, useEffect, useRef } from "react";
import "./Service.css";
import { useStateValue } from "../../useStateValue";

function Service() {
  const [{ isServiceOpen }, dispatch] = useStateValue();
  const [typeService, setTypeService] = useState("");
  const [personNumber, setPersonNumber] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [price, setPrice] = useState(0);
  const selectedItem = useRef(null);
  const changeValue = () => {
    const currentItem = selectedItem.current.value;
    setTypeService(currentItem);
    setDisabled(false);
  };

  const totalPrice = (type) => {
    if (type === "Поминальный вечер") {
      const cost = personNumber * 15;
      setPrice(cost);
    } else if (type === "Свадьба") {
      const cost = personNumber * 30;
      setPrice(cost);
    } else if (type === "День рождения" || type === "Корпоратив") {
      const cost = personNumber * 25;
      setPrice(cost);
    } else if (type === "Выберите услугу") {
      const cost = 0;
      setPrice(cost);
      setPersonNumber(0);
      setDisabled(true);
    }
  };
  const animation = (e) => {
    e.target.parentElement.style.animation =
      "simpleAnimationOut 700ms ease forwards";
    setTimeout(() => {
      document.body.style.overflow = "visible";
      document.querySelector("#header").style.top = "0";
      dispatch({
        type: "CLOSE_SERVICE",
      });
    }, 300);
  };

  useEffect(() => {
    totalPrice(typeService);
  }, [typeService, personNumber]);
  return (
    <div className="service-background">
      <div className="service">
        <div className="closeModal" onClick={animation}>
          &times;
        </div>
        <div className="service-body">
          <div className="first-section">
            <div className="total-price">
              {typeService ? (
                <div>
                  Вы выбрали <span>{typeService}</span>, на количество персон:{" "}
                  <span>{personNumber}.</span> <br />
                  Итоговая сумма составляет: {price} р.
                </div>
              ) : (
                "Выберите услугу"
              )}
            </div>
            <div className="service-text">
              <span className="text">
                Стоимость рассчитана приблизительно. <br />
                Для согласования полной стоимости необходимо обращаться
                непосредственно в кафе.
              </span>
            </div>
          </div>
          <div className="second-section">
            <h4>Посчитать стоимость услуги</h4>
            <div className="service-form">
              <select ref={selectedItem} onChange={changeValue}>
                <option value="Выберите услугу">Выберите услугу</option>
                <option value="Поминальный вечер">Поминальный вечер</option>
                <option value="Свадьба">Свадьба</option>
                <option value="День рождения">День рождения</option>
                <option value="Корпоратив">Корпоратив</option>
              </select>
              <div className="select-people">
                <label htmlFor="people">Введите количество человек</label>
                <input
                  type="number"
                  id="people"
                  placeholder="0"
                  min="0"
                  max="4000"
                  disabled={disabled}
                  value={personNumber}
                  onChange={(e) => {
                    setPersonNumber(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
