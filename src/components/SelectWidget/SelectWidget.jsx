import './SelectWidget.scss';
import Button from '../Button/Button';

const SelectWidget = ({title, options, btnTheme}) => {
  return (
    <div className='selectWidget'>
      <span>{title}</span>
      <div className='selectWidgetOptions'>
      {options.map((option, index) => <Button key={index} text={option} btnTheme={btnTheme}/>)}
      </div>
    </div>
  )
}

export default SelectWidget