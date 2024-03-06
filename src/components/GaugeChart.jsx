import { useEffect } from "react";

const GaugeChart = ({ gaugeValue, days }) => {
  useEffect(() => {
    const gauge = document.querySelector(".gauge");

    const setGaugeValue = (value) => {
      if (value < 0 || value > 1) {
        return;
      }

      gauge.querySelector(".gauge__fill").style.transform = `rotate(${
        value / 2
      }turn)`;
      gauge.querySelector(".gauge__cover").textContent = `${days}
      ΚΣ`;
    };

    setGaugeValue(gaugeValue);
  }, [gaugeValue]);

  return (
    <div className="gauge ">
      <div className="gauge__body">
        <div className="gauge__fill"></div>
        <div className="gauge__cover"></div>
      </div>
    </div>
  );
};

export default GaugeChart;
