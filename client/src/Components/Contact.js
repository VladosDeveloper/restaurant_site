import React, { useState } from "react";
import "./PreLoader.css";
import emailjs from "emailjs-com";

function Contact(props) {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    mail: "",
    description: "",
  });
  const changeHandler = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(!loading);
    emailjs
      .sendForm(
        "service_mcjhwpk",
        "template_m8xvfhs",
        e.target,
        "user_RRzmVhSouEv2AOItelGJM"
      )
      .then(
        () => {
          setPerson({ ...person, name: "", mail: "", description: "" });
          setLoading(loading);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="title">
          <h2 className="titleText">
            <span>С</span>вязаться с нами
          </h2>
          <p>Для получения более подробной информации.</p>
        </div>
        <form onSubmit={sendEmail}>
          <div className="contactForm">
            <h3>Отправить сообщение</h3>
            <div className="inputBox">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={person.name}
                  onChange={changeHandler}
                  placeholder="Введите имя"
                  required
                />
              </label>
            </div>
            <div className="inputBox">
              <label htmlFor="mail">
                <input
                  type="text"
                  id="mail"
                  name="mail"
                  value={person.mail}
                  onChange={changeHandler}
                  placeholder="Введите номер телефона"
                  required
                />
              </label>
            </div>
            <div className="inputBox">
              <label htmlFor="text">
                <textarea
                  name="description"
                  id="text"
                  cols="30"
                  rows="10"
                  value={person.description}
                  onChange={changeHandler}
                  required
                />
              </label>
            </div>
            <div className="inputBox">
              <label htmlFor="subm">
                <input type="submit" id="subm" value="Отправить" />
              </label>
            </div>
          </div>
        </form>
        {loading && <PreLoader />}
      </section>
    </>
  );
}

export const PreLoader = () => {
  return (
    <div className="preloader">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default Contact;
