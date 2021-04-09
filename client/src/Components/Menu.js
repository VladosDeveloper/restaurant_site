import React, { useState } from "react";
import "./Menu.css";
import FullMenu from "./FullMenu";
import Categories from "./menuCategories/Categories";
import MenuList from "./menuCategories/menuList";
import { Link, animateScroll as scroll } from "react-scroll";

function Menu() {
  const [showHide, setShowHide] = useState(false);
  const allCategories = [
    "Все",
    ...new Set(MenuList.map((item) => item.category)),
  ];
  const [menuItems, setMenuItems] = useState(MenuList);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setShowHide(true);
    if (category === "Все") {
      setMenuItems(MenuList);
      return;
    }
    const newItem = MenuList.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <>
      <section className="menu" id="menu">
        <div className="title">
          <h2 className="titleText">
            <span>Н</span>аше меню
          </h2>
          <p>Все наши блюда приготовлены строго по стандартам.</p>
        </div>
        <div className="content" id="pointForScroll">
          <Categories filterItems={filterItems} categories={categories} />
          {menuItems.slice(0, 6).map((item) => {
            const { price, img, id, name } = item;
            return (
              <div className="box" key={id}>
                <div className="imgBox">
                  <img src={img} alt="" />
                </div>
                <div className="text">
                  <h3>{name}</h3>
                  <h4>
                    <span style={{ marginRight: "3px" }}>Стоимость: </span>
                    {price} р.
                  </h4>
                </div>
              </div>
            );
          })}
          {showHide && <FullMenu fullList={menuItems.slice(6)} />}
        </div>
        <div className="title">
          <button className="btn txt" onClick={() => setShowHide(!showHide)}>
            {showHide ? (
              <Link to="pointForScroll" onClick={() => setShowHide(!showHide)}>
                Скрыть
              </Link>
            ) : (
              "Показать все"
            )}
          </button>
        </div>
      </section>
    </>
  );
}

export default Menu;
