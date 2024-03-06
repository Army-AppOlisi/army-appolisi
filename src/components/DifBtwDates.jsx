import { useState } from "react";

function DifBtwDates({ title, startDate, endDate }) {
  const [difference, setDifference] = useState(null);

  const handleCalculateDif = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const diffDays = Math.round(
      Math.abs((startDateObj - endDateObj) / oneDay) - 1
    );

    setDifference(diffDays);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleCalculateDif}>Calculate Difference</button>
      <br />
      {difference !== null && <p>Difference in days: {difference}</p>}
    </div>
  );
}

export default DifBtwDates;
