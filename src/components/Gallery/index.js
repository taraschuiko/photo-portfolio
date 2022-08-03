import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";
import "./index.css";
import white from "../../assets/white.png";

function importAll(r) {
  return r.keys().map(r);
}

// Minify all images to 75% quality before using
const images = importAll(
  require.context("../../photos", false, /\.(png|jpe?g|webp)$/)
).sort(() => 0.5 - Math.random());

const Image = ({ image }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (inView) {
      setSeen(true);
    }
  }, [inView]);

  return <img ref={ref} src={seen ? image : white} alt={image} />;
};

const breakpointColumns = {
  default: 3,
  768: 2,
  320: 1
};

const Gallery = () => (
  <Masonry
    breakpointCols={breakpointColumns}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    {images.map((image) => (
      <Image image={image} key={image} />
    ))}
  </Masonry>
);

export default Gallery;
