import React, { useState, useEffect } from 'react';
import MyBtn from '../ui/MyBtn/MyBtn'
import InputComponent from '../ui/inputs/InputComponent';
import './forms.css'
import { useInput } from '../../hooks/UseInput';

const RegistrationForm = () => {
  const firstName = useInput('', { isEmpty: true, minLength: 3 })
  const email = useInput('', { isEmpty: true, isEmail: true })
  const password = useInput('', { isEmpty: true, minLength: 3 })
  const confirmPass = useInput('', { isEmpty: true, minLength: 3 })
  const [disabled, setDisabled] = useState(true)
  const [isConfirmPass, setConfirmPass] = useState(false)


  const createUser = (e) => {
    e.preventDefault()

    if (password.value !== confirmPass.value) {
      setConfirmPass(true)
      return;
    } else {
      setConfirmPass(false)
    }

    firstName.reset()
    email.reset()
    password.reset()
    confirmPass.reset()

  }

  useEffect(() => {
    if (!email.isEmail && !email.isEmpty && !password.isEmpty && !password.minlengthError && !firstName.isEmpty && !firstName.minlengthError) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email.isEmail, email.isEmpty, password.isEmpty, password.minlengthError, firstName.isEmpty, firstName.minlengthError])

  return (
    <form className='registration-form' onSubmit={(e) => createUser(e)}>
      <InputComponent
        value={firstName.value}
        onChange={e => firstName.onChange(e)}
        onBlur={e => firstName.onBlur(e)}
        labelName='name'
        id='name'
        type='text'
        inputClass='form-control'
        labelClass='form-label'
        labelText='Имя'
        isDirty={firstName.isDirty}
        isEmpty={firstName.isEmpty}
        minLength={firstName.minlengthError}
        errorMessage={firstName.errorMessage}
      />

      <InputComponent
        value={email.value}
        onChange={e => email.onChange(e)}
        onBlur={e => email.onBlur(e)}
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

      <InputComponent
        value={confirmPass.value}
        onChange={e => confirmPass.onChange(e)}
        onBlur={e => confirmPass.onBlur(e)}
        labelName='confirmPass'
        id='confirmPass'
        type='text'
        inputClass='form-control'
        labelClass='form-label'
        labelText='Подтвердите пароль'
        isDirty={confirmPass.isDirty}
        isEmpty={confirmPass.isEmpty}
        minLength={confirmPass.minlengthError}
        errorMessage={confirmPass.errorMessage}
        isConfirmPass={isConfirmPass}
      />

      <MyBtn disabled={disabled} classBtn={'btn btn-primary modal-btn'} >Зарегистрироваться</MyBtn>
    </form >
  );
};

export default RegistrationForm;