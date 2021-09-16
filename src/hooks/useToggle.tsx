import { useState, useCallback } from 'react';

export default function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(() => {
    setValue((state) => !state);
  }, []);

  return [value, toggleValue];
}