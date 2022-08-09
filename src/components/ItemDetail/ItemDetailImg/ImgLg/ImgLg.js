import './ImgLg.scss';

const ImgLg = ({image}) => {
  return (
    <div className='imgLgWrap'>
      <img src={`/assets/${image}`} alt="" />
    </div>
  )
}

export default ImgLg