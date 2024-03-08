import { useEffect } from "react";

const GaugeChart = ({ gaugeValue, days }) => {
  console.log(gaugeValue);
  useEffect(() => {
    const gauge = document.querySelector(".gauge");

    const setGaugeValue = (value) => {
      if (value < 0 || value > 1) {
        return;
      }

      gauge.querySelector(".gauge__fill").style.transform = `rotate(${
        value / 2
      }turn)`;
    };

    setGaugeValue(gaugeValue);
  }, [gaugeValue]);

  return (
    <div className="gauge w-full max-w-[250px] text-[32px] text-[#004033]">
      <div className="gauge__body w-full h-0 relative overflow-hidden pb-[50%] rounded-t-[100%_200%] bg-[#b4c0be]">
        <div className="gauge__fill absolute w-[inherit] h-full origin-[center_top] rotate-[0.25turn] transition-transform duration-[0.2s] ease-[ease-out] left-0 top-full bg-[#009578]"></div>
        <div className="gauge__cover w-9/12 h-[150%] absolute -translate-x-2/4 flex items-center justify-center box-border pb-[25%] rounded-[50%] left-2/4 top-1/4 bg-[#f7fcf8]">{days}ΚΣ</div>
      </div>
    </div>
  );
};

export default GaugeChart;
