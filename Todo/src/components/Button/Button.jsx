import './button.scss'
const Button = ({value, onClickFunc, className}) => {
  return (
    <button className={className} onClick={onClickFunc}>{value}</button>
  )
}

export default Button