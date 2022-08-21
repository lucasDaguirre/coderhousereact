import './OptionSelect.scss';

const OptionSelect = ({title, options, click, identifier}) => {
  return (
    <div className='selectWidget'>
      <span>{title}</span>
      <div>
        {options.map((option, index) => <button key={index} onClick={click} identifier={identifier}>{option}</button>)}
      </div>
    </div>
  )
}

export default OptionSelect