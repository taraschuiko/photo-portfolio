import React from "react";
import Masonry from "react-masonry-css";
import "./index.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../photos", false, /\.(png|jpe?g|svg)$/)
).sort((a, b) => 0.5 - Math.random());

const Gallery = () => (
  <Masonry
    breakpointCols={3}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    {images.map((image) => (
      <img src={image} key={image} alt={image} />
    ))}
  </Masonry>
);

export default Gallery;
