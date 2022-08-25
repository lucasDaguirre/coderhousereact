import './Modal.scss';

const Modal = ({title, children, setState}) => {
  const closeModal = () => {
    setState(false);
    document.body.classList.toggle("scrollLock");
  }
  return (
    <div className="modal-container">
      <div>
        <div>
            <h1>{title}</h1>
            <button onClick={() => closeModal()}>X</button>
        </div>
        <div>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Modal