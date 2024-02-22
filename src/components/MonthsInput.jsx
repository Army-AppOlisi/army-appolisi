import { Dropdown, DropdownItem } from "flowbite-react";

export default function MonthsInput() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem>6</DropdownItem>
      <DropdownItem>8</DropdownItem>
      <DropdownItem>9</DropdownItem>
      <DropdownItem>12</DropdownItem>
    </Dropdown>
  );
}
