import React from "react";

function FullMenu({ fullList }) {
  return (
    <>
      {fullList.map((item) => {
        const { price, img, id, name } = item;
        return (
          <div className="box" key={id}>
            <div className="imgBox">
              <img src={img} alt="" />
            </div>
            <div className="text">
              <h3>{name}</h3>
              <h4>{price} р.</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FullMenu;
