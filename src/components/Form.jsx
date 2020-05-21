import React from 'react';

const Form = ({ handleSubmit, handleChange, handleClick, url }) => {
  return (
    <form onSubmit={handleSubmit} >
      <h1 className="header">RESTy</h1>
      <input type="text" onChange={handleChange} value={url} />
      <button value="get" onClick={handleClick} >GET</button>
      <button value="post" onClick={handleClick} >POST</button>
      <button value="put" onClick={handleClick} >PUT</button>
      <button value="patch" onClick={handleClick} >PATCH</button>
      <button value="delete" onClick={handleClick} >DELETE</button>
      <input type="submit" value="Go!" />
    </form>
  )
}

export default Form;