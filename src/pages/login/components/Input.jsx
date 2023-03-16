import React from 'react'

const Input = ({ attribute, handleChange, param}) => {
  return (
    <div>
        <input
        id={attribute.id}
        name={attribute.name}
        type={attribute.type}
        placeholder={attribute.placeholder}
        onChange={ (e) => handleChange(e.target.name, e.target.value)}
        className={ param ? 'input-error' : 'input-perso' }
        />
    </div>
  )
}

export default Input