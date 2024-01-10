import './textInput.scss'

const TextInput = ({onChange, value, placeholder, maxLength}) => {
  return (
    <input value={value} maxLength={maxLength} onChange={onChange} placeholder={placeholder} type="text" />
  )
}

export default TextInput