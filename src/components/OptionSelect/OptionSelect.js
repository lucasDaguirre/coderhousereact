import './OptionSelect.scss';
import Button from '../Button/Button';

const OptionSelect = ({title, options, click, identifier}) => {
  return (
    <div className='selectWidget'>
      <span>{title}</span>
      <div className='selectWidgetButtons'>
      {options.map((option, index) => <Button key={index} text={option} onClick={click} identifier={identifier}/>)}
      </div>
    </div>
  )
}

export default OptionSelect