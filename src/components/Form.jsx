import DateInput from "./DateInput";
import MonthsInput from "./MonthsInput";

import { Card, Button, Typography } from "@material-tailwind/react";

export default function Form() {
  return (
    <Card className="flex items-center" color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Ποια είναι η πρώτη μέρα της θητείας σου;
          </Typography>
          <DateInput size="lg" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Πόσους μήνες θα υπηρετήσεις;
          </Typography>
          <MonthsInput />
        </div>
        <Button className="mt-6" fullWidth>
          Results
        </Button>
      </form>
    </Card>
  );
}
