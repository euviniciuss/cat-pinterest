// FeedSection.tsx
import React, { useState } from 'react';
import { CustomCheckbox } from './Checkbox';

export function FeedSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheck = (value: string) => {
    console.log('teste');

    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }

    console.log('Valor do checkbox:', value);
  };

  return (
    <div>
      <div>
        <CustomCheckbox value="opaaaaa" checked={selected.includes('teste')} onChange={handleCheck} />
        Teste
      </div>
      {/* Adicione mais CustomCheckboxes conforme necessário */}
    </div>
  );
}
