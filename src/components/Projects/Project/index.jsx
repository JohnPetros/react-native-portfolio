import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import "./style.css";

export default function Project({
  name,
  images,
  description,
  technicals,
  components,
  link,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoplaySlider, setAutoplaySlider] = useState(true);
  const [isTabInformation, setIsTabInformation] = useState(true);
  let timeOut = null;

  function changeTab() {
    setIsTabInformation(!isTabInformation);
  }

  useEffect(() => {
    timeOut = autoplaySlider && setTimeout(() => nextImageSlider(), 2500);
  });

  function nextImageSlider() {
    const isCurrentImageTheLastImage = currentImage === images.length - 1;
    if (isCurrentImageTheLastImage) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(currentImage + 1);
  }
  function prevImageSlider() {
    const isCurrentImageTheFirstImage = currentImage === 0;
    if (isCurrentImageTheFirstImage) {
      setCurrentImage(images.length - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
  }
  return (
    <div className="project">
      <div className="slider">
        <h3 className="name">{name}</h3>
        <div
          className="slider-button prev"
          onClick={prevImageSlider}
          onMouseEnter={() => {
            setAutoplaySlider(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoplaySlider(true);
            clearTimeout(timeOut);
          }}
        >
          <FaAngleDoubleLeft />
        </div>
        <div className="images">
          <div
            className="slider-button next"
            onClick={nextImageSlider}
            onMouseEnter={() => {
              setAutoplaySlider(false);
              clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
              setAutoplaySlider(true);
              clearTimeout(timeOut);
            }}
          >
            <FaAngleDoubleRight />
          </div>
          {images.map((image, index) => (
            <div
              key={`image-${index}`}
              className={index === currentImage ? "image active" : "image"}
            >
              <img
                src={image}
                alt="Screenshot do projeto"
                onMouseEnter={() => {
                  setAutoplaySlider(false);
                  clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                  setAutoplaySlider(true);
                  clearTimeout(timeOut);
                }}
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <div className="slider-pagination">
            {images.map((_, index) => (
              <div
                key={index}
                className={
                  index === currentImage
                    ? "pagination-dot active"
                    : "pagination-dot"
                }
                onClick={() => setCurrentImage(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div className="information">
        <h4 className="sub-title">Sobre o projeto</h4>
        <p className="description">{description}.</p>
        <div className="lists">
          <div className="list">
            <h4 className="sub-title">Técnicas e conceitos aprendidos</h4>
            <ul>
              {technicals.map((technical, index) => (
                <li key={index}>
                  {technical}
                  {index === technicals.length - 1 ? "." : ";"}
                </li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h4 className="sub-title">Componentes utilizados</h4>
            <ul>
              {components.map((component, index) => (
                <li key={index}>{component}</li>
              ))}
            </ul>
          </div>
        </div>
        <a href={link} target="_blank" className="link">
          Visualizar projeto no Expo.io
        </a>
      </div>
    </div>
  );
}
