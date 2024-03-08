import { useState, useEffect } from "react";

function DifBtwDates({ title, difference }) {

  // useEffect(() => {
  //   const calculateDifference = () => {
  //     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  //     const startDateObj = new Date(startDate);
  //     const endDateObj = new Date(endDate);

  //     const diffDays = Math.round(
  //       Math.abs((startDateObj - endDateObj) / oneDay) - 1
  //     );

  //     setDifference(diffDays);
  //   };

  //   calculateDifference();
  // }, [startDate, endDate]);

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Difference in days:{" "}
        {difference !== null ? difference : "Calculating..."}
      </p>
    </div>
  );
}

export default DifBtwDates;
