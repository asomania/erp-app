import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuRadioGroupProps {
  label: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  onValueChange: (value: string) => void;
  buttonText?: string;
}

export function DropdownMenuRadioGroupDemo({
  label,
  defaultValue = "",
  options,
  onValueChange,
  buttonText = "Open",
}: DropdownMenuRadioGroupProps) {
  const [position, setPosition] = React.useState(defaultValue);

  const handleValueChange = (value: string) => {
    setPosition(value);
    onValueChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={handleValueChange}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
