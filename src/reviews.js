import { reviews } from "./data.js";
import { useState } from "react";
import "./reviews.css";
export function ReviewsComponent() {
  const [currentReview, setCurrentReview] = useState(0);
  const { name, image, job, text } = reviews[currentReview];
  function backwardsBtn() {
    if (currentReview === 0) {
      setCurrentReview(reviews.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  }

  function forwardsBtn() {
    if (currentReview === reviews.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  }

  function randomBtn() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    while (randomIndex === currentReview) {
      randomIndex = Math.floor(Math.random() * reviews.length);
    }
    setCurrentReview(randomIndex);
  }

  return (
    <section className="reviews-container">
      <section className="reviews-div">
        <div className="image-div">
          <img src={image} alt={name} />
        </div>
        <div className="content-div">
          <h2 className="person-name">{name}</h2>
          <p className="person-job">{job}</p>
          <p className="person-review">{text}</p>
        </div>
      </section>
      <section className="button-div">
        <div className="forward-backward-button">
          <button className="backwards" onClick={backwardsBtn}>
            &#10094;
          </button>
          <button className="forwards" onClick={forwardsBtn}>
            &#10095;
          </button>
        </div>
        <button className="surpriseMe" onClick={randomBtn}>
          Surprise Me
        </button>
      </section>
    </section>
  );
}
