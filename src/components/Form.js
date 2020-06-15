import React from 'react';

const Form = ({ handleSubmit, handleChange, handleClick, url, handleGo }) => {
  return (
    <form onSubmit={handleSubmit} >
      <input type="text" onChange={handleChange} value={url} />
      <button value="get" onClick={handleClick} >GET</button>
      <button value="post" onClick={handleClick} >POST</button>
      <button value="put" onClick={handleClick} >PUT</button>
      <button value="patch" onClick={handleClick} >PATCH</button>
      <button value="delete" onClick={handleClick} >DELETE</button>
      <input type="submit" onClick={handleGo} value="Go!" />
    </form>
  )
}

export default Form;