import React from "react";
import "./Actuality.css";

export default class Actuality extends React.Component {
  render() {
    return (
      <section className="Actuality-container">
        <div className="Actuality-content">
          <h2 className="Actuality-content-title">
            Coup de coeur of the moment{" "}
          </h2>
          <hr className="is-hr-summary" />
          <div className="favourite-feed-container">
            <div className="favourite-feed-item">
              <div className="favourite-feed-image" />
              <div>
                <h3>Book of the moment</h3>
                <h5>The way of a superior man</h5>
                <div className="favourite-feed-item-description">
                  They way of a superior man is an amazing book that I recommend
                </div>
              </div>
            </div>
            <div className="favourite-feed-item">
              <div className="favourite-feed-image" />
              <div>
                <h3>Interview of the moment</h3>
                <h5>Kanye West</h5>
                <div className="favourite-feed-item-description">
                  The most controversial singer is back at it again with some knowledge</div>
              </div>
            </div>
            <div className="favourite-feed-item">
              <div className="favourite-feed-image" />
              <div>
                <h3>Album of the moment</h3>
                <h5>Trilogy</h5>
                <div className="favourite-feed-item-description">
                  A modern age masterpiece
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
