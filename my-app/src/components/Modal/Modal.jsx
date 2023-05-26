import { useSelector } from "react-redux";
import { selectContent } from "../../redux/selectors";
import "./modal.scss";

function Modal(props) {

    let content = useSelector(selectContent);
   

    return (
        <>
            <div data-testid="modal-element" className={props.className} onClick={props.close}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="title">{content.header}</h4>
                        <span onClick={props.close} className="header-close" data-testid="closed-button-element">{content.closeButton ? "╳" : ""}</span>
                    </div>
                    <div className="modal-content">
                        <div className="modal-body">
                            <p className="text">{content.text}</p>
                        </div>
                        <div className="modal-footer">
                            <button data-testid="modal-first-button-element" className="btn" onClick={props.save}>{content.actions[0]}</button>
                            <button data-testid="modal-second-button-element" className="btn" onClick={props.close}>{content.actions[1]}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;

