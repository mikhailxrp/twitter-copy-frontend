import { useState } from 'react';
import { useValidation } from './UseValidation';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const reset = () => {
    setValue('');
    setDirty(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    isDirty,
    onBlur,
    onChange,
    reset,
    ...valid,
  };
};
