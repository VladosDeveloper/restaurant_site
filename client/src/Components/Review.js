import React, { useState } from "react";
import "./Modal.css";
import Axios from "axios";
import { useStateValue } from "../useStateValue";
import axios from "axios";

function Review() {
  const [{ reviewIsOpen, reviews }, dispatch] = useStateValue();
  const [fileInputState, setFileInputState] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [person, setPerson] = useState({
    userName: "",
    description: "",
  });
  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmit = (e) => {
    if (person.userName === "" && person.description === "") {
      alert("Заполните поля");
    }
    if (!previewSource) {
      addItem({ ...person });
      return;
    }
    uploadImage(previewSource);
    dispatch({
      type: "CLOSE_REVIEW",
    });
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify({
          data: { ...person, image: base64EncodedImage },
        }),
        headers: { "Content-type": "application/json" },
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  const addItem = (value) => {
    Axios.post("/api/reviews", value)
      .then((res) => {
        dispatch({
          type: "ADD_ITEM",
          item: res.data,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <>
      <div className="modal">
        <div className="sectionForm">
          <div className="boxForm">
            <div className="containerForm">
              <div className="form">
                <h2>Оставить отзыв</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="inputBox">
                    <div className="flexBox">
                      <div className="wrapper">
                        <input
                          name="image"
                          id="file"
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          value={fileInputState}
                          onChange={handleFileInputChange}
                          required
                        />
                        <label className="choosedFile" htmlFor="file">
                          Выбрать изображение
                        </label>
                      </div>
                      <div className="imgBox">
                        {previewSource && <img src={previewSource} alt="" />}
                      </div>
                    </div>
                  </div>
                  <div className="inputBox">
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      value={person.description}
                      onChange={handleChange}
                      placeholder="Введите ваш отзыв"
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      name="userName"
                      placeholder="Введите имя"
                      value={person.userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="submit"
                      value="Подтвердить"
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              </div>
              <div
                className="closeModal"
                onClick={() => {
                  document.body.style.overflow = "visible";
                  dispatch({
                    type: "CLOSE_REVIEW",
                  });
                }}
              >
                &times;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
