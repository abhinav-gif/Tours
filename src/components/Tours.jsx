import React, { useContext } from "react";
import Tour from "./Tour";
import { dataContext } from "../App";

const Tours = () => {
  const { data } = useContext(dataContext);
  return (
    <div className="tours">
      {data.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </div>
  );
};

export default Tours;
