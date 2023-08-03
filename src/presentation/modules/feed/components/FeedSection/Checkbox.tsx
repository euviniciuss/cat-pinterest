// CustomCheckbox.tsx
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface CustomCheckboxProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export function CustomCheckbox({ value, checked, onChange }: CustomCheckboxProps) {
  return (
    <Checkbox.Root checked={checked} onCheckedChange={() => onChange(value)}>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
      {value}
    </Checkbox.Root>
  );
}
