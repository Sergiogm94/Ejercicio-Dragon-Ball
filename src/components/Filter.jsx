import React from 'react'

const Filter = ({setSearch}) => {
    const handleChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }
  return (
    <div>
      <input type="text" placeholder='Buscar' onChange={handleChange}></input>
    </div>
  )
}

export default Filter
