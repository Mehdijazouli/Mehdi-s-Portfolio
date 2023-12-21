import React, { useState } from "react";
import "./services.css";

import projectImage1 from "../../assets/Me/project1.png";
import projectImage2 from "../../assets/Me/project2.png";
import projectImage3 from "../../assets/Me/project3.png";

const Services = () => {
  const githubRepoUrl = "https://github.com/your-username/your-repo-name";

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle_special">
        Excited to see more? Checkout my Github 😉
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <img
              src={projectImage1}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              ML-Powered Competitive
              <br />
              Anomaly Detection System
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                ML-Powered Competitive Anomaly Detection System
              </h3>
              <p className="services__modal-description grid">
                Système de veille concurrentielle basé sur un modèle de Machine
                Learning pour la détection d'anomalies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Collection d'un ensemble de données de vol
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Entrainement d’un modèle de langage sur l'ensemble de
                    données
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Évaluation des performances du modèle
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, Scikit-Learn, Isolation Forest
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/Mehdijazouli/AnomalyDetection-Model--Airline-Competiton-Analysis.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img
              src={projectImage2}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              Brain Tumors <br />
              Classification
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Brain Tumors Classification
              </h3>
              <p className="services__modal-description grid">
                Projet de classification des tumeurs du cerveau
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Modèle visant à déterminer la présence de tumeurs sur des
                    images de rayons X.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    {" "}
                    Mise en place d'un modèle de classification avec des
                    algorithmes de Computer Vision.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Optimisation du diagnostic médical en utilisant des données
                    cliniques et radiologiques.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, TensorFlow, Keras
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/Mehdijazouli/Brain-Tumor-Classification.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img
              src={projectImage3}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              Fintech client
              <br />
              Transaction Forcast
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Fintech client Transaction Forcast
              </h3>
              <p className="services__modal-description grid">
                Mise en œuvre d’un modèle de prévision capable de prédire avec
                précision les montants des transactions quotidiennes des clients
                bancaires à partir de données historiques
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, Machine Learning, scikit-learn, Séries
                    chronologiques, LSTM.
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/Mehdijazouli/Fintech-client-Transactions-Forcast.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
