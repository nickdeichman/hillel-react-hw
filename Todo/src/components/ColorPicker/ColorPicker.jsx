import React from 'react'
import { MuiColorInput } from 'mui-color-input'

const ColorPicker = ({todosColor, setTodosColor, label}) => {
  
  const handleChange = (color) => {
    setTodosColor(color);
  }

  return (
    <MuiColorInput label={label} format='hex' sx={{margin: '1rem',
    }} value={todosColor} onChange={handleChange  } />
  )
}

export default ColorPicker