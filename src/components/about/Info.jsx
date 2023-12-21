import React from "react";

export const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">
          Data & Software Engineering degree
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20 + Projects</span>
      </div>
    </div>
  );
};
export default Info;
