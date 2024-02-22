import DateInput from "./DateInput";
import MonthsInput from "./MonthsInput";
export default function Questions() {
  return (
    <form className="mt-10 flex items-center flex-col">
      <h2>IN what date will you start?</h2>
      <DateInput />
      <h2>How many months will you serve?</h2>
      <MonthsInput />
    </form>
  );
}
