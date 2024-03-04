import { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";

export default function MonthsInput() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    if (selectedMonth !== null) {
      console.log(selectedMonth);
    }
  }, [selectedMonth]);

  return (
    <div className="p-5 w-75">
      <Select
        onChange={(value) => setSelectedMonth(value)}
        defaultValue={selectedMonth}
        label="Select Months"
      >
        <Option value="4">4</Option>
        <Option value="6">6</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
        <Option value="12">12</Option>
      </Select>
    </div>
  );
}
