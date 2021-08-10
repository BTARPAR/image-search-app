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
      <i className={`fas fa-times`}
         style={{visibility: value ? 'visible' : 'hidden', cursor: 'pointer'}}
         onClick={() => onChangeHandler('')}/>
    </>)
}

export default Input
