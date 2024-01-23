import React, { useState } from "react";

import Planet from "../Assets/planet-saturn.svg";
import Internal from "../Assets/planet-saturn-internal.svg";
import Geology from "../Assets/geology-saturn.png";
import IconSource from "../Assets/icon-source.svg";

import "../index.css";

import PlanetData from "../data.json";

const Saturn = () => {
  const [overview, setOverView] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  const overviewHandler = () => {
    setOverView(true);

    if (structure) {
      setStructure(false);
    }
    if (surface) {
      setSurface(false);
    }
  };

  const structureHandler = () => {
    setStructure(true);

    if (overview) {
      setOverView(false);
    }
    if (surface) {
      setSurface(false);
    }
  };

  const surfaceHandler = () => {
    setSurface(true);

    if (structure) {
      setStructure(false);
    }
    if (overview) {
      setOverView(false);
    }
  };

  return (
    <React.Fragment>
      <main>
        <section>
          <div className="container">
            <div className="planet-buttons">
              <button className="btn btn--saturn" onClick={overviewHandler}>
                Overview
              </button>
              <button className="btn btn--saturn" onClick={structureHandler}>
                Structure
              </button>
              <button className="btn btn--saturn" onClick={surfaceHandler}>
                Surface
              </button>
            </div>
            {overview && (
              <>
                <div className="planet-image">
                  <img className="planet--saturn" alt="planet" src={Planet} />
                </div>
                <div className="planet-info">
                  <h2>{PlanetData[5].name}</h2>
                  <p>{`${PlanetData[5].overview.content}`}</p>
                  <div className="source-wrapper">
                    <span className="source">Source : </span>
                    <a
                      className="source__link"
                      href={`${PlanetData[5].overview.source}`}
                    >
                      Wikipedia
                    </a>
                    <img className="source__image" src={IconSource} alt="#" />
                  </div>
                </div>
              </>
            )}
            {structure && (
              <>
                <div className="planet-image">
                  <img className="planet--saturn" alt="planet" src={Internal} />
                </div>
                <div className="planet-info">
                  <h2>{PlanetData[5].name}</h2>
                  <p>{`${PlanetData[5].structure.content}`}</p>
                  <div className="source-wrapper">
                    <span className="source">Source : </span>
                    <a
                      className="source__link"
                      href={`${PlanetData[5].structure.source}`}
                    >
                      Wikipedia
                    </a>
                    <img className="source__image" src={IconSource} alt="#" />
                  </div>
                </div>
              </>
            )}
            {surface && (
              <>
                <div className="planet-image">
                  <div className="planet-images">
                    <img className="planet--saturn" src={Planet} alt="planet" />
                    <img
                      className="planet--saturn-adhoc"
                      alt="planet surface"
                      src={Geology}
                    />
                  </div>
                </div>
                <div className="planet-info">
                  <h2>{PlanetData[5].name}</h2>
                  <p>{`${PlanetData[5].geology.content}`}</p>
                  <div className="source-wrapper">
                    <span className="source">Source : </span>
                    <a
                      className="source__link"
                      href={`${PlanetData[5].geology.source}`}
                    >
                      Wikipedia
                    </a>
                    <img className="source__image" src={IconSource} alt="#" />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="planet-data-wrapper">
            <div className="planet-data">
              <h2 className="text">Rotation time:</h2>
              <div className="data">{`${PlanetData[5].rotation}`}</div>
            </div>
            <div className="planet-data">
              <h2 className="text">Revolution time:</h2>
              <div className="data">{PlanetData[5].revolution}</div>
            </div>
            <div className="planet-data">
              <h2 className="text">Radius:</h2>
              <div className="data">{PlanetData[5].radius}</div>
            </div>
            <div className="planet-data">
              <h2 className="text">Average temp.</h2>
              <div className="data">{PlanetData[5].temperature}</div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Saturn;