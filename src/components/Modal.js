import "./style.css";

const Modal = (props) => {
  return (
    <div id="modal">
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modal-wrapper">
        <header>{props.title}</header>
        <div className="body">
          <p>{props.content}</p>
        </div>
        <footer>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
