
const InputComponent = (
  {
    labelName,
    inputClass,
    id,
    labelClass,
    labelText,
    isEmpty,
    isDirty,
    isEmail,
    minLength,
    errorMessage,
    isConfirmPass,
    ...props
  }) => {

  let error = false

  if (isEmpty && isDirty) {
    error = true
  } else if (isEmail && isDirty) {
    error = true
  }
  if (minLength && isDirty) {
    error = true
  }
  if (isConfirmPass && isDirty) {
    error = true
    errorMessage = 'Пароли не совпадают'
  }

  return (
    <div className="mb-3">
      <label htmlFor={labelName} className={labelClass}>{labelText}</label>
      <input {...props} className={error ? 'error-input ' + inputClass : inputClass} id={id} />
      {(error) && <div className='error-from form-text'>{errorMessage}</div>}
    </div>
  );
};

export default InputComponent;