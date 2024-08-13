import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [isEmail, setEmail] = useState(false);
  const [minlengthError, setMinlengthError] = useState(false);
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinlengthError(true)
            : setMinlengthError(false);
          setErrorMessage('Не менее 3-х символов');
          break;

        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          setErrorMessage('Поле не может быть пустым');
          break;

        case 'isEmail':
          EMAIL_REGEXP.test(value) ? setEmail(false) : setEmail(true);
          setErrorMessage('Неверный email');
          break;
      }
    }
  });

  return {
    isEmpty,
    isEmail,
    minlengthError,
    errorMessage,
  };
};
