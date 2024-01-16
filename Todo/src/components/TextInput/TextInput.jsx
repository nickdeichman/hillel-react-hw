import './textInput.scss'
import TextField from '@mui/material/TextField';

const TextInput = ({sx, onChange, placeholder, maxLength, value, className}) => {
  return (
    <TextField className={className} sx={sx} maxLength={maxLength} onChange={onChange} value={value} label={placeholder} variant="standard" />
  )
}

export default TextInput