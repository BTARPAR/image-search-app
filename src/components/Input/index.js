import React from 'react'

const Input = ({
  onChangeHandler,
  placeholder,
  iconClass,
  value,
  inputName
}) => {
  return (
    <>
      <i className={`fas ${iconClass}`}/>
      <input type='text'
             placeholder={placeholder}
             onChange={(e)=>onChangeHandler(e)}
             value={value}
             name={inputName}
      />
    </>)
}

export default Input
