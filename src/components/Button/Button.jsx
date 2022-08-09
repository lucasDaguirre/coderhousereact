import './Button.scss';

const Button = ({text, btnTheme, onClick, identifier}) => {
  return (
    <button className={`btnNormal ${btnTheme} ${identifier}`} onClick={onClick}>{text}</button>
  )
}

export default Button