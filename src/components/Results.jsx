import { useState, useContext } from 'react';
import  DifBtwDates from './DifBtwDates';
import GaugeChart from "./GaugeChart";
import { DatesContext } from '../store/dates-context';

export default function Form() {
  const { startDate, months } = useContext(DatesContext);

  const stDate = new Date(startDate);
  const month = new Number(months);
  const endDate = new Date(stDate.setMonth(stDate.getMonth() + month));
  const currentDate = new Date();

  function calculateDifference(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const diffDays = Math.round(
      Math.abs((startDateObj - endDateObj) / oneDay) - 1
    );

    return diffDays;
  }

  // Calculate differences
  const synoloDifference = calculateDifference(startDate, endDate);
  const ypoloipoDifference = calculateDifference(currentDate, endDate);
  const ypiretithikanDifference = calculateDifference(startDate, currentDate);

  return (
    <div>
      <DifBtwDates
        title={"Synolo"}
        startDate={startDate}
        endDate={endDate}
        difference={synoloDifference}
      />
      <DifBtwDates
        title={"Ypoloipo"}
        startDate={currentDate}
        endDate={endDate}
        difference={ypoloipoDifference}
      />
      <DifBtwDates
        title={"Ypiretithikan"}
        startDate={startDate}
        endDate={currentDate}
        difference={ypiretithikanDifference}
      />
      <GaugeChart gaugeValue={ypiretithikanDifference/synoloDifference} days={ypoloipoDifference} />
    </div>
  );
}
