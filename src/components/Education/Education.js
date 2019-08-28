import React from "react";
import "./Education.css";
import { argumentPlaceholder } from "@babel/types";

export default class Education extends React.Component {
  render() {
    return (
      <section className="education-item-container">
        <h2 className="education-title">Education</h2>

        <hr className="is-hr-summary" />

        <div className="education-content">
          <div className="education-box">
            <div className="uniicon">
              <i className="fas fa-university fa-2x" />
            </div>
            <h4>
              Software Engineering Bch From 
              <br /><a href="">Concordia University</a>
            </h4>
            <div>2017-2021</div>
            <ul className="school-responsibility">
              <li>
                <i class="fab fa-circle" />
                Dean's List 2018-2019
              </li>
              <li>
                <i class="fab fa-circle" />
                Receiver of the ___ Scholarship
              </li>
            </ul>
          </div>
          <div className="education-box">
            <div className="uniicon">
              <i className="fas fa-graduation-cap fa-2x" />
            </div>

            <h4>
              Pure and Applied Science Dec From <br/><a href="">Vanier College</a>
            </h4>
            <div>2017-2021</div>
            <ul className="school-responsibility">
              <li>
                <i class="fab fa-circle" />
                Dean's List 2018-2019
              </li>
              <li>
                <i class="fab fa-circle" />
                Receiver of the ___ Scholarship
              </li>
            </ul>
          </div>
          <div className="education-box">
            <div className="uniicon">
              <i class="fab fa-adobe fa-2x" />
            </div>
            <h4>
              Photoshop Tutor at <br/> <a href="">Vanier College</a>
            </h4>
            <div>2017-2021</div>
            <ul className="school-responsibility">
              <li>
                <i class="fab fa-circle" />
                Dean's List 2018-2019
              </li>
              <li>
                <i class="fab fa-circle" />
                Receiver of the ___ Scholarship
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
