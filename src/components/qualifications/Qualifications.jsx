import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualifications section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualifications__container container">
        <div className="qualifications__tabs">
          <div
            className={
              toggleState === 1
                ? "qualifications__button qualifications__active button--flex"
                : "qualifications__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualifications__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualifications__button qualifications__active button--flex"
                : "qualifications__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualifications__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualifications__sections">
          <div
            className={
              toggleState === 1
                ? "qualifications__content qualifications__content-active"
                : "qualifications__content"
            }
          >
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">INSEA, Rabat</h3>
                <span className="qualifications__subtitle">
                  Data and Software engineering degree
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">
                  CPGE - Salmane Al Farissi
                </h3>
                <span className="qualifications__subtitle">
                  Preparatory classes for engineering - MP option
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">
                  Lycée Al Yakada - Salé
                </h3>
                <span className="qualifications__subtitle">
                  Baccalauréat Sciences Mathématiques - Option B
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> Completed in 2018
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualifications__content qualifications__content-active"
                : "qualifications__content"
            }
          >
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Royal Air Maroc</h3>
                <span className="qualifications__subtitle">
                  Casablanca - Stage
                </span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> July 2023 - September
                  2023
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">ONCF</h3>
                <span className="qualifications__subtitle">Rabat - Stage</span>
                <div className="qualifications__calender">
                  <i className="uil uil-calendar-alt"></i> August 2022 -
                  September 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
