import "./button.scss";

function Button (props){
        return (
            <button data-testid="button-element" id={props.id} data-modal-id={props.code} className="button" style={{backgroundColor: props.color}} onClick = {(e) => {props.onClick(e)}}>{props.text}</button>
        ) 
}

export default Button;

