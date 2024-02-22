import { Select, Option } from "@material-tailwind/react";

export default function MonthsInput() {
  return (
    <div className="p-5 w-75">
      <Select label="Select Months">
        <Option>4</Option>
        <Option>6</Option>
        <Option>8</Option>
        <Option>9</Option>
        <Option>12</Option>
      </Select>
    </div>
  );
}
