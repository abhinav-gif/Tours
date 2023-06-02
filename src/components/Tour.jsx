import React, { useContext, useState } from "react";
import { dataContext } from "../App";

const Tour = (props) => {
  const { id, image, info, name, price } = props;
  const [readMore, setReadMore] = useState(true);
  const { data, setData } = useContext(dataContext);
  const removeHandler = (id) => {
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };
  return (
    <div className="single-tour">
      <div className="tour-price">${price}</div>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <div>
          <p>
            {readMore ? `${info.substring(0, 200)} ... ` : `${info}   `}
            <button className="readmore" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read More" : "Read Less"}
            </button>
          </p>
        </div>
        <button
          className="info-btn delete-btn btn"
          onClick={() => removeHandler(id)}
        >
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
