import React from "react";
import ReactDom from "react-dom";
import { ReviewsComponent } from "./reviews";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1 className="main-heading">Our Reviews</h1>
      <ReviewsComponent />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
