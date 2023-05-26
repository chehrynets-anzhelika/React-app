import ProductList from "../components/ProductList/ProductList";
import Modal from "../components/Modal/Modal";
import { addFavorite, removeFavorite } from "../redux/actions/favorites";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../redux/actions/openModal";
import { addCart } from "../redux/actions/cart";
import { selectCartID, selectCurrent, selectOpen } from "../redux/selectors";


export function Home(props) {
const dispatch = useDispatch();

let open = useSelector(selectOpen);
let current = useSelector(selectCurrent);
let cart = useSelector(selectCartID);

    const addFavorites = (e, id) => {
        if (e.target.tagName !== "IMG") return false;
        id = e.target.id;
        e.target.className === "add-to-favorite" ? dispatch(addFavorite(id)) : dispatch(removeFavorite(id))
    }

    const addedCart = () => { 
        let isInArray = false;
        cart.forEach(item => {
            if(item === current){
                isInArray = true;
                dispatch(closeModal());
            }
        })
        if(!isInArray) {
            dispatch(addCart(current));
        }
        
        dispatch(closeModal());
   }

    return (
        <>
            <ProductList click= {addFavorites} onClick={props.show} />
            <Modal
                className={open ? "modal-wrapper active" : "modal-wrapper"}
                save={addedCart}
                close={() => {dispatch(closeModal())}}
            />
        </>
    )
}