import React, { useEffect, useState } from 'react';
import { useInput } from '../../hooks/UseInput';
import MyBtn from '../ui/MyBtn/MyBtn';
import InputComponent from '../ui/inputs/InputComponent';

const FormLogin = () => {
  const email = useInput('', { isEmpty: true, isEmail: true })
  const password = useInput('', { isEmpty: true, minLength: 3 })
  const [disabled, setDisabled] = useState(true)

  const userLogin = (e) => {
    e.preventDefault()
    console.log(email.value);
    console.log(password.value);

    email.reset()
    password.reset()
  }

  useEffect(() => {
    if (!email.isEmail && !email.isEmpty && !password.isEmpty && !password.minlengthError) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email.isEmail, email.isEmpty, password.isEmpty, password.minlengthError])



  return (
    <form className='registration-form' onSubmit={(e) => userLogin(e)}>
      <InputComponent
        value={email.value}
        onChange={e => email.onChange(e)}
        onBlur={e => email.onBlur(e)}
        labelName='email'
        id='email'
        type='email'
        inputClass='form-control'
        labelClass='form-label'
        labelText='Email'
        isDirty={email.isDirty}
        isEmpty={email.isEmpty}
        isEmail={email.isEmail}
        errorMessage={email.errorMessage}
      />

      <InputComponent
        value={password.value}
        onChange={e => password.onChange(e)}
        onBlur={e => password.onBlur(e)}
        labelName='password'
        id='password'
        type='text'
        inputClass='form-control'
        labelClass='form-label'
        labelText='Пароль'
        isDirty={password.isDirty}
        isEmpty={password.isEmpty}
        minLength={password.minlengthError}
        errorMessage={password.errorMessage}
      />

      <MyBtn disabled={disabled} classBtn={'btn btn-primary modal-btn'} >Войти</MyBtn>
    </form >
  );
};

export default FormLogin;